export class Plant {
  
  Id?: any;
  name?: string;
  location?: string;
  type?: string;
  water?: number;
  imageUrl?: string;
  coordinates?: object;
  
  constructor() {
    this.name = "";
    this.location = "";
    this.type = "";
  }
}
