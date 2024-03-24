import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Server } from '../../../model/server';
import { ServerService } from '../../../services/services';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css'
})
export class AnasayfaComponent implements OnInit{
  servers: Server[] = [];
  constructor(private router: Router,private veriServisi: ServerService) { }

  async ngOnInit(): Promise<void> {
    //sayfa açılırken servisi çağırıp dataları yüklemesi için 
    try {
      this.servers = await this.veriServisi.GetServers() || [];
      console.log(this.servers)
    } catch (error) {
      console.error("Error fetching clients", error);
    }
  }
}
