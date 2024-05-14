import { Location } from "./Location";

export class Graffiti {
  constructor(initializer) {
    this._id = undefined;
    this.graffitiSurveyNumber = "";
    this.name = "";
    this.size = "";
    this.address = "";
    this.description = "";
    this.postcode = "";
    this.location = new Location();
    this.imgLocation = "";

    if (!initializer) return;
    if (initializer._id) this._id = initializer._id;
    if (initializer.graffitiSurveyNumber)
      this.graffitiSurveyNumber = initializer.graffitiSurveyNumber;
    if (initializer.name) this.name = initializer.name;
    if (initializer.size) this.size = initializer.size;
    if (initializer.address) this.address = initializer.address;
    if (initializer.description) this.description = initializer.description;
    if (initializer.postcode) this.postcode = initializer.postcode;
    if (initializer.location) this.location = initializer.location;
    if (initializer.imgLocation) this.imgLocation = initializer.imgLocation;
  }

  isNew() {
    return this._id === undefined;
  }
}
