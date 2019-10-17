export class Plant {
  
  Id?: any;
  name?: string;
  location?: string;
  type?: string;
  water?: number;
  light?: number;
  temp?: number;
  imageUrl?: string;
 
  constructor() {
    this.name = "";
    this.location = "";
    this.type = "";
  }
}
