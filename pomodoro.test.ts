import { Pomodoro } from './pomodoro';

// UI box, shows ticking timmer
// start button, stop button, short-break, long-break, pomodoro

// play sound on each tick.
// play buzzer on time end.
// say Break.  Say Work. Say Step away from the computer.
// reset button.

let pomodoro: Pomodoro;
beforeEach(() => {
  pomodoro = new Pomodoro();
});

describe('Set Short Break Time', () => {
  it('set Time accepts 30 sec syntax', () => {
    pomodoro.setShortTime('30 sec');
    expect(pomodoro.getShortTime()).toBe(30000);
  });

  it('set Time accepts only a number as seconds', () => {
    pomodoro.setShortTime(30);
    expect(pomodoro.getShortTime()).toBe(30000);
  });

  it('set Time accepts 5 min syntax', () => {
    pomodoro.setShortTime('5 min');
    expect(pomodoro.getShortTime()).toBe(300000);
  });
});

describe('Set Long Break Time', () => {
  it('set Time accepts 30 sec syntax', () => {
    pomodoro.setLongTime('30 sec');
    expect(pomodoro.getLongTime()).toBe(30000);
  });

  it('set Time accepts only a number as seconds', () => {
    pomodoro.setLongTime(30);
    expect(pomodoro.getLongTime()).toBe(30000);
  });

  it('set Time accepts 5 min syntax', () => {
    pomodoro.setLongTime('5 min');
    expect(pomodoro.getLongTime()).toBe(300000);
  });
});

describe('Set Pomodoro Time', () => {
  it('set Time accepts 30 sec syntax', () => {
    pomodoro.setWorkTime('30 sec');
    expect(pomodoro.getWorkTime()).toBe(30000);
  });

  it('set Time accepts only a number as seconds', () => {
    pomodoro.setWorkTime(30);
    expect(pomodoro.getWorkTime()).toBe(30000);
  });

  it('set Time accepts 5 min syntax', () => {
    pomodoro.setWorkTime('5 min');
    expect(pomodoro.getWorkTime()).toBe(300000);
  });
});

describe('text displays current time', () => {
  it('0 seconds shows 00:00', () => {
    pomodoro.updateTime(0);
    let expectedHTML = `<div id='clock'>00:00</div>`;
    expect(pomodoro.getClock()).toBe(expectedHTML);
  });

  it('3 seconds shows 00:03', () => {
    pomodoro.updateTime(3000);
    let expectedHTML = `<div id='clock'>00:03</div>`;
    expect(pomodoro.getClock()).toBe(expectedHTML);
  });
});
