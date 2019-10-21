import { Component, OnInit } from '@angular/core';
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Room } from '../shared/models/room';

@Component({
  selector: 'app-rooms',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  
  faImage= faImage;
  room: Room = new Room();
  

  constructor() {
  
  }

  ngOnInit() {

  }

}
