import { Component, OnInit } from "@angular/core";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

import { MatSnackBar } from "@angular/material/snack-bar";
import { AngularFireStorage } from "@angular/fire/storage";
import { RoomsService } from "src/app/services/rooms/room.service";
import { Room } from "src/app/shared/models/room";

@Component({
  selector: "app-rooms",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.scss"]
})
export class RoomComponent implements OnInit {
  faImage = faImage;
  room: Room = new Room();
  roomsList: Room[];
  roomId: String;
  selectedFile: File;

  constructor(
    private roomService: RoomsService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  onSubmit() {
    this.roomService.create(this.room);
    this.router.navigate(["roomsList"]);
    this.openSnackBar("Room Creation", "Succeed");
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000
    });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  async onUpload() {
    event.preventDefault();
    const file = this.selectedFile;
    const filePath = this.selectedFile.name;
    const url = await this.storage
      .upload(filePath, file)
      .then(async res => await res.ref.getDownloadURL());
    this.room.imageUrl = url;
  }

  ngOnInit() {}
}
