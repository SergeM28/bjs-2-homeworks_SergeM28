class AlarmClock {
    constructor() {
      this.alarmCollection = [];
      this.timerId = null;
    }
  
  addClock(time, callback, id) {
    if (typeof id === "undefined") {
      throw new Error("error text");
    }
   else if (typeof this.alarmCollection.find(clock => clock.id === id) !== "undefined") {
    return console.error("Такой id уже существует");
   }
    return this.alarmCollection.push({id, time, callback});
  }
  
  removeClock(id) {
    let inputArrayLength = this.alarmCollection.length;
    this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
    let outputArrayLength = this.alarmCollection.length;
    return outputArrayLength < inputArrayLength;
  }
  
    getCurrentFormattedTime() {
      const currentDate = new Date();
      const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
      const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
      return hours + ":" + minutes;
    }
  
    start() {
      let checkClock = (clock) => {
        let alarm = this.getCurrentFormattedTime();
        if (clock.time === alarm) {
          return clock.callback();
        }
      }
  
      if (this.timerId === null) {
        this.timerId = setInterval(() => {
          this.alarmCollection.forEach(clock => checkClock(clock));
        }, 1000);
    }
      return;
  }
  
    stop() {
      if (this.timerId !== null) {
        clearInterval(this.timerId);
        return (this.timerId = null);
      }
    }
   printAlarms() {
      return this.alarmCollection.forEach(clock => console.log(clock.id + ":" + clock.time));
    }
  
    clearAlarms() {
      this.stop();
      return this.alarmCollection = [];
    }
  }
  
  let phoneAlarm = new AlarmClock();
  phoneAlarm.addClock("09:00", () => console.log("Пора вставать"), 1);
  phoneAlarm.addClock("09:01" , () => console.log("Давай, вставай уже!"), 2); 
  phoneAlarm.removeClock(2)
  phoneAlarm.addClock("09:01", () => console.log("Иди умываться!"), 3);
  phoneAlarm.clearAlarms();
  phoneAlarm.printAlarms();
  phoneAlarm.start();
  phoneAlarm.stop();
  phoneAlarm.printAlarms();