import { Component, OnChanges } from '@angular/core';
import { faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drop-maker',
  templateUrl: './drop-maker.component.html',
  styleUrls: ['./drop-maker.component.scss']
})
export class DropMakerComponent implements OnChanges {
  faTint = faTint;
  amount: number = 4;
  dropWidth: number;
  constructor() { }

  ngOnChanges() {
    this.dropWidth = this.amount *75/5;
  }

}
