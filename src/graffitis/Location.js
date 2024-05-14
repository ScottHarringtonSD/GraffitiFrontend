export class Location {
  constructor(initializer) {
    this.longitude = 0;
    this.latitude = 0;

    if (!initializer) return;
    if (initializer.longitude) this.longitude = initializer.longitude;
    if (initializer.latitude) this.latitude = initializer.latitude;
  }
}
