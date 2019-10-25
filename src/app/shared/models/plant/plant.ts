import { PlantType } from "../plantType/plant-type";
import { Room } from "../room";

export class Plant {
  Id?: any;
  name?: string;
  location?: boolean;
  type?: PlantType;
  water? = 7;
  light? = 7;
  room?: Room;
  temp?: number;
  imageUrl?: string;
  actions? = [];
  constructor() {
    this.name = "";
    this.location = true;
  }
}
