import { Component, OnInit,Input } from '@angular/core';
import {Server} from '../Shared/Server';



@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

@Input() serverInput: Server;

  ngOnInit() {
    this.setServerAction(this.serverInput.isOnline);
  }
  color:string;
  buttonText:string;

setServerAction(isOnline: boolean)
{
  if(isOnline)
  {
    this.serverInput.isOnline = true;
    this.color = '#23D0D6'; 
    this.buttonText = 'Shut Down'
  } else  
  {
    this.serverInput.isOnline = false;
    this.color = '#6B8AA0';
    this.buttonText = 'Start Server';
  }
}
toggleStatus(onlineStatus:boolean)
{
  this.serverInput.isOnline = !this.serverInput.isOnline;
  this.setServerAction(!onlineStatus);
}

}