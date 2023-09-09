class AlarmClock {
    constructor (alarmCollection=[], intervalId=null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = intervalId;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
   
        for (let value of this.alarmCollection) {
            console.log("for", value.time)
            if (value.time === time) {
                console.warn('Уже присутствует звонок на это же время')
            }
        }
   
        this.alarmCollection.push({callback: callback, time: time, canCall: true})
    }

    removeClock (time) {
        this.alarmCollection = this.alarmCollection.filter(value => value.time !== time);
    }

    getCurrentFormattedTime() {
        let date = new Date;
        return date.getHours().toString() + ':' + date.getMinutes().toString(); 
    }

    start() {
        if (!this.intervalId) {
            let idStarter = setInterval(() => {
                this.alarmCollection.forEach((value, index) => {
                    if(value.time === this.getCurrentFormattedTime() && value.canCall===true) {
                        this.alarmCollection[index].canCall = false;
                        value.callback();
                    }
                })
            }, 1000);
            this.intervalId = idStarter;
        }
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId= null;
    }
    
    resetAllCalls() {
        this.alarmCollection.forEach((value, index) => {
            this.alarmCollection[index].canCall = true;
        });
    }

    clearAlarms() {
        stop()
        this.alarmCollection=[];
    }
}

