export class Pomodoro {
  clockTime: string = '00:00';
  getClock(): any {
    return `<div id='clock'>${this.clockTime}</div>`;
  }
  updateTime(timeLeft: number) {
    let seconds = Math.floor(timeLeft / 1000);
    const minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    this.clockTime = `${this.pad(minutes)}:${this.pad(seconds)}`;
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
