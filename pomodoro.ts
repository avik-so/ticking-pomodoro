export class Pomodoro   {
    shortMs: number = 0;
    getShortTime(): number {
        return this.shortMs;
    }
    setShortTime(time: string| number):number {
        let ms:number = 0;
        if (typeof time === "number"){
           ms = time * 1000;

       } else {
        let config = time.split(" ");
        ms = config.length == 1 ? parseInt(time) * 1000 : this.parseTimeInterval(config)
       
    }
       this.shortMs = ms;
       return ms;
    }
    parseTimeInterval(config: string[]): number {
        let ms:number = 0;
        if (config[1] == "min") {
            ms =  parseInt(config[0]) * 60 * 1000;
        } else if (config[1] == "sec") {
            ms = parseInt(config[0]) * 1000;
        }
        return ms;
    }

}