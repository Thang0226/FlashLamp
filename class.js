class Battery {
  constructor(energy) {
    this.energy = energy;
  }

  setEnergy(energy) {
    this.energy = energy;
  }

  getEnergy() {
    return this.energy;
  }

  decreaseEnergy() {
    if (this.energy > 0) {
      this.energy--;
    }
  }
}

class FlashLamp {
  constructor() {
    this.status = false;
  }

  setBattery(battery) {
    this.battery = battery;
  }

  getBatteryInfo = function () {
    return this.battery.getEnergy();
  };

  light() {
    if (this.status) {
      alert("Lighting");
    } else {
      alert("Not lighting");
    }
  }

  turnOn() {
    this.status = true;
  }

  turnOff() {
    this.status = false;
  }
}
