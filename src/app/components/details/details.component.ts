import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from '../../../services/services';
import { Server } from '../../../model/server';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  server=new Server();
  constructor(private router: Router,private veriServisi: ServerService) { }

  async ngOnInit(): Promise<void> {
    try {
        const response= await this.veriServisi.GetServer(1) || null;;
  
        if (response === null) {
          console.log("Client not found");
        } 
        else
        {
          this.server = response;
        }
      
      console.log(this.server)
    } catch (error) {
      console.error("Error fetching clients", error);
    }
  }
}
