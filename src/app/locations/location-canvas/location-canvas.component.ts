import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-canvas',
  templateUrl: './location-canvas.component.html',
  styleUrls: ['./location-canvas.component.scss']
})


export class LocationCanvasComponent implements OnInit {

  testList: any[] = [{name:'hey'},{name:'jij'},{name:'dit'},{name:'is'},{name:'een'},{name:'test'}]

  constructor() { }




  ngOnInit() {
    console.log('test',this.testList)
  }

}
