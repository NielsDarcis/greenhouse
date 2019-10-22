
import { Room } from '../room';


export class Plant {
  
  Id?: any;
  name?: string;
  location?: boolean;
  space?: Room;
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
