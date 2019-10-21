import { PlantType } from '../plant-type';

export class Plant {
  
  Id?: any;
  name?: string;
  location?: boolean;
  type?: PlantType;
  water? = 7;
  light? = 7;
  temp?: number;
  imageUrl?: string;
  actions? = [];
  constructor() {
    this.name = "";
    this.location = true;
  }
}
