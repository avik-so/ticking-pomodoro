import { Pomodoro } from './pomodoro';


// UI box, shows ticking timmer
// start button, stop button, short-break, long-break, pomodoro
// set time per short, long, pomodoro
// play sound on each tick.
// play buzzer on time end.
// say Break.  Say Work. Say Step away from the computer.
// reset button.



let pomodoro: Pomodoro;

describe('Can create Pomodor', () => {
    beforeEach(()=> {
        pomodoro  = new Pomodoro();
    }

    );
    it('set Time accepts 30 sec syntax', () => {
        pomodoro.setShortTime("30 sec");
        expect(pomodoro.getShortTime()).toBe(30000);
    });

    it('set Time accepts only a number as seconds', () => {
        pomodoro.setShortTime(30);
        expect(pomodoro.getShortTime()).toBe(30000);
    });

    it('set Time accepts 5 min syntax', () => {
        pomodoro.setShortTime("5 min");
        expect(pomodoro.getShortTime()).toBe(300000);
    });
    
});