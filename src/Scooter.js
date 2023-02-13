class Scooter{

  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = 0;
    this.nextSerial = 1;
    this.charge = 100;
    this.broken = false;
  }
}


module.exports = Scooter
