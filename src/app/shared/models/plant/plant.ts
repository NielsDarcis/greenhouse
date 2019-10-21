import { PlantType } from '../plant-type';
import { Space } from '../space/space';


export class Plant {
  
  Id?: any;
  name?: string;
  location?: boolean;
  type?: PlantType;
  water? = 7;
  light? = 7;
  space?: Space;
  temp?: number;
  imageUrl?: string;
  actions? = [];
  constructor() {
    this.name = "";
    this.location = true;
  }
}
