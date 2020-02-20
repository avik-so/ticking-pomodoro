import { Pomodoro } from './pomodoro';

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

  it('30 seconds shows 00:30', () => {
    pomodoro.updateTime(30000);
    let expectedHTML = `<div id='clock'>00:30</div>`;
    expect(pomodoro.getClock()).toBe(expectedHTML);
  });

  it('30 minutes shows 30:00', () => {
    pomodoro.updateTime(30 * 1000 * 60);
    let expectedHTML = `<div id='clock'>30:00</div>`;
    expect(pomodoro.getClock()).toBe(expectedHTML);
  });

  it('30 minutes and 499 ms shows 30:00', () => {
    pomodoro.updateTime(30 * 1000 * 60 + 499);
    let expectedHTML = `<div id='clock'>30:00</div>`;
    expect(pomodoro.getClock()).toBe(expectedHTML);
  });

  it('30 minutes and 600 ms shows 30:01', () => {
    pomodoro.updateTime(30 * 1000 * 60 + 600);
    let expectedHTML = `<div id='clock'>30:00</div>`;
    expect(pomodoro.getClock()).toBe(expectedHTML);
  });
});

describe('start button', () => {
  it('should start the timer when the button is clicked', () => {
    pomodoro.setWorkTime('25 min');
    pomodoro.start();
    setTimeout(pomodoro.getClock, 1000);
    let expectedHTML = `<div id='clock'>25:00</div>`;
    expect(pomodoro.getClock()).toBe(expectedHTML);
  });
});
