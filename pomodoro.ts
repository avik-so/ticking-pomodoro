export class Pomodoro   {
    shortMs: number = 0;
    getShortTime(): number {
        return this.shortMs;
    }
    setShortTime(time: string):number {
       let config = time.split(" ");
       let ms = 0;
       if (config[1] == "min") {
           ms =  parseInt(config[0]) * 60 * 1000;
       } else if (config[1] == "sec") {
           ms = parseInt(config[0]) * 1000;
       }
       this.shortMs = ms;
       return ms;
    }

}