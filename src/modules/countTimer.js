const  countTimer = deadline => {
    const timerHours = document.querySelector('#timer-hours'),
        timerMinutes = document.querySelector('#timer-minutes'),
        timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining() {
        const dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor(timeRemaining / 60 / 60);
        return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
        const timer = getTimeRemaining();
        const addZero = function(date, tag) {
            if (date < 10) {
                return tag.textContent = `0${date}`;
            } else {
                return tag.textContent = `${date}`;
            }
        };
        addZero(timer.hours, timerHours);
        addZero(timer.minutes, timerMinutes);
        addZero(timer.seconds, timerSeconds);

        if (timer.timeRemaining <= 0) {
            // eslint-disable-next-line no-use-before-define
            clearInterval(idInterval);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }
    const idInterval =  setInterval(updateClock, 1000);
};

export default countTimer;
