import { Component, OnInit } from '@angular/core';
import {Server} from "../../Shared/Server";

const SampleServers = [
  {id: 1,name: 'dev-web',isOnline:true},
  {id: 2,name: 'dev-mail',isOnline:true},
  {id: 3,name: 'prod-web',isOnline:true},
  {id: 4,name: 'prod-mail',isOnline:false}
];

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})



export class SectionHealthComponent implements OnInit {

  constructor() { }
servers: Server[] = SampleServers;
  ngOnInit() {
  }

}
