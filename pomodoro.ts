export class Pomodoro {
  start() {
    this.updateTime(this.workMs);
  }
  clockTime: string = '00:00';
  getClock(): any {
    let element: HTMLElement | null | string = document.getElementById('clock');
    if (element) {
      element.innerHTML = this.clockTime;
    } else {
      element = `<div id='clock'>${this.clockTime}</div>`;
    }
    return element;
  }
  updateTime(timeLeft: number) {
    this.clockTime = `${this.pad(this.getMinutes(timeLeft))}:${this.pad(
      this.getSeconds(timeLeft)
    )}`;
  }
  getSeconds(timeLeft: number): number {
    let seconds = Math.floor(timeLeft / 1000);
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return seconds;
  }
  getMinutes(timeLeft: number): number {
    let seconds = Math.floor(timeLeft / 1000);
    const minutes = Math.floor(seconds / 60);
    return minutes;
  }

  pad(value: number) {
    return value > 9 ? value : '0' + value;
  }
  setLongTime(time: string | number) {
    this.longMs = this.parseTime(time);
    return this.longMs;
  }
  getLongTime(): number {
    return this.longMs;
  }
  getWorkTime(): number {
    return this.workMs;
  }
  setWorkTime(time: string | number) {
    this.workMs = this.parseTime(time);
    return this.workMs;
  }
  longMs: number = 0;
  workMs: number = 0;
  shortMs: number = 0;
  getShortTime(): number {
    return this.shortMs;
  }
  setShortTime(time: string | number): number {
    this.shortMs = this.parseTime(time);
    return this.shortMs;
  }

  parseTime(time: string | number): number {
    let ms: number = 0;
    if (typeof time === 'number') {
      ms = time * 1000;
    } else {
      let config = time.split(' ');
      ms =
        config.length == 1
          ? parseInt(time) * 1000
          : this.parseTimeInterval(config);
    }
    return ms;
  }
  parseTimeInterval(config: string[]): number {
    let ms: number = 0;
    if (config[1] == 'min') {
      ms = parseInt(config[0]) * 60 * 1000;
    } else if (config[1] == 'sec') {
      ms = parseInt(config[0]) * 1000;
    }
    return ms;
  }
}
