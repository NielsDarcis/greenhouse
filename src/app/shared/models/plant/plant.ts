import { PlantType } from "../plant-type";
import { Room } from "../room";

export class Plant {
  Id?: any;
  name?: string;
  location?: boolean;
  type?: PlantType;
  water? = 7;
  light? = 7;
  space?: Room;
  temp?: number;
  imageUrl?: string;
  actions? = [];
  constructor() {
    this.name = "";
    this.location = true;
  }
}
