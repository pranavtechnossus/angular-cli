import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus= 'No server was created!! ';
  serverName='TestServer';
  isServername=false;
  servers= ['Testserver','Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer=true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.isServername=true;
    this.servers.push(this.serverName);
    this.serverCreationStatus='server was created!! Yippee'+ this.serverName;
  }
  onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
  }

}
