import {Pomodoro} from './pomodoro'


// UI box, shows ticking timmer
// start button, stop button, short-break, long-break, pomodoro
// set time per short, long, pomodoro
// play sound on each tick.
// play buzzer on time end.
// say Break.  Say Work. Say Step away from the computer.
// reset button.





describe('Can create Pomodor', () => {
    it('have a pomodoro', () => {
        let pomodoro = new Pomodoro();
        expect(pomodoro).toBeTruthy();
    });

    it('have a pomodoro', () => {
        let pomodoro = new Pomodoro();
        let shortTime = pomodoro.setShortTime("5 min");
        expect(pomodoro.getShortTime()).toBe(shortTime);
    });
    
});