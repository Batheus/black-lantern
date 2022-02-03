export default class OpeningHours {
  constructor(openingHour, activeClass) {
    this.businessHours = document.querySelector(openingHour);
    this.activeClass = activeClass;
  }

  openingInfo() {
    this.dayWeek = this.businessHours.dataset.dayweek.split(',').map(Number);
    this.hourWeek = this.businessHours.dataset.hour.split(',').map(Number);
  }

  actualInfo() {
    this.actualDate = new Date();
    this.actualDay = this.actualDate.getDay();
    this.actualHours = this.actualDate.getUTCHours() - 3;
  }

  isOpen() {
    const weekOpen = this.dayWeek.indexOf(this.actualDay) !== -1;
    const hourOpen = (this.actualHours >= this.hourWeek[0]
      && this.actualHours < this.hourWeek[1]);
    return weekOpen && hourOpen;
  }

  activateOpening() {
    if (this.isOpen()) {
      this.businessHours.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.businessHours) {
      this.openingInfo();
      this.actualInfo();
      this.activateOpening();
    }
    return this;
  }
}
