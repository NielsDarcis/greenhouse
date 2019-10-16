export class Plant {
  
  Id?: any;
  name?: string;
  location?: string;
  type?: string;
  water?: number;
  light?: number;
  minTemp?: number;
  maxTemp?: number;
  imageUrl?: string;
  coordinates?: object;
  
  constructor() {
    this.name = "";
    this.location = "";
    this.type = "";
  }
}
