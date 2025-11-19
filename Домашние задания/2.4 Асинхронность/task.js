class AlarmClock{

    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    } 

    addClock(_time, func){
        if(!_time || !func){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        else if (this.alarmCollection.some((alarmCollection) => alarmCollection.time === _time)){
            console.warn('Уже присутствует звонок на это же время');
        }
        else{
            let alarm = {callback: func, time:_time, canCall: true};
            this.alarmCollection.push(alarm)
        }
    }

    removeClock(_time){
        this.alarmCollection = this.alarmCollection.filter(alarmCollection => alarmCollection.time !== _time);
    }

    getCurrentFormattedTime(){
        const now = new Date().toLocaleTimeString("ru-Ru", {hour: "2-digit",minute: "2-digit"});
        return now.slice(0,5);
        
    }

    start(){
        if (this.intervalId){
            return null;
        }
        else{
            this.intervalId = setInterval(() => { 
                const currentTime = this.getCurrentFormattedTime();
                
                this.alarmCollection.forEach((alarm) => { 
                    if(alarm.time === currentTime && alarm.canCall === true){
                        alarm.callback();
                        alarm.canCall = false;
                    }
                } )
            }, 1000)
        }
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((alarmCollection)=> alarmCollection.canCall = true);
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}
