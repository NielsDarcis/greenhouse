import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material/table";
import { Room } from 'src/app/shared/models/room';
import { RoomsService } from 'src/app/services/rooms/room.service'

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  room: Room = new Room;
  dataSource: any;
  columnsToDisplay = ["name"];
  roomsList: Room [];

  constructor( private roomService: RoomsService) {

  }

  async getRooms(){
    this.roomsList = await this.roomService.getAll();
    this.dataSource = new MatTableDataSource(this.roomsList);
  }

  ngOnInit() {
    this.getRooms();
  }

}
