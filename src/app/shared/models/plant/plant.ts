import { Space } from '../space/space';


export class Plant {
  
  Id?: any;
  name?: string;
  location?: boolean;
  space?: Space;
  type?: string;
  water?: number;
  light?: number;
  temp?: number;
  imageUrl?: string;
 
  constructor() {
    this.name = "";
    this.location = true;
    this.type = "";
  }
}
