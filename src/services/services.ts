// Servis
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Server } from '../model/server';
interface GetServerRequests {
  serverid: number;
}
@Injectable({
  providedIn: 'root',
})
export class ServerService {
  //apiurl örnek: "ip:port/api proje yolu/api controller adı"
  readonly apiurl="http://localhost:5066/api/Server/";
  private veriKaynagi = new BehaviorSubject<number>(0);
  currentData = this.veriKaynagi.asObservable();
constructor(
  private http:HttpClient,
){}
  // bütün discord serverlerını çekmek için services örneği
  async GetServers(): Promise<Array<Server>|null> {
      
      try {
        const response = await this.http.get<Array<Server>>(this.apiurl + "GetServers")
          .pipe(
            catchError(error => {
              console.error('Error in GetClients:', error);
              throw error; 
            })
          )
          .toPromise() as Array<Server>; 
  
        if (response === undefined) {
          return null;
        }
        return response;
      } catch (error) {
        console.error('Error in GetClients:', error);
        throw error; 
      }
  
  }
  //tek bir discord serverı çekmek için örneğin idsi=1 olan tarzında (detay sayfası için)
  async GetServer(serverid:number): Promise<Server|null> {

      const requestData: GetServerRequests = {
        serverid: serverid,
      };
      try {
        const response = await this.http.post<Server>(this.apiurl + "GetServer",requestData)
          .pipe(
            catchError(error => {
              console.error('Error in GetClient:', error);
              throw error;
            })
          )
          .toPromise() as Server; 
            console.log(response);
        if (response === undefined) {
          return null;
        }
        return response;
      } catch (error) {
        console.error('Error in GetClient:', error);
        throw error; 
      }
  
  }
}