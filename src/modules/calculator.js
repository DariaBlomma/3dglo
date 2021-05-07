const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcCount = document.querySelector('.calc-count'),
        calcSquare = document.querySelector('.calc-square'),
        calcDay = document.querySelector('.calc-day'),
        totalValue = document.getElementById('total');
    let calcInterval;
    let numCount = 0;
    const countSum = () => {
        let total = 0,
            countValue = 1,
            dayValue = 1;
        let diff;
        const typeValue = calcType.options[calcType.selectedIndex].value,
            squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }
        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        // totalValue.textContent = total;
        console.log('total: ', total);
        const calcAnimate = () => {
            calcInterval = requestAnimationFrame(calcAnimate);
            numCount += 100;
            if (totalValue.textContent !== total) {
                if (typeValue === '') {
                    cancelAnimationFrame(calcInterval);
                    numCount = total;
                    totalValue.textContent = 0;
                    calcSquare.value = '';
                    calcCount.value = '';
                    calcDay.value = '';
                } else if (numCount <= total) {
                    if (total > 1000) {
                        numCount += 1000;
                    }
                    numCount += 100;
                    diff = total - numCount;
                    if (diff < 100 || diff < 1000) {
                        numCount += diff;
                    }
                    totalValue.textContent = numCount;
                } else if (totalValue.textContent > total) {
                    numCount = totalValue.textContent;
                    diff = numCount - total;
                    if (diff > 1000) {
                        numCount -= 1000;
                    }
                    numCount -= 100;

                    if (diff < 100) {
                        numCount -= diff;
                    }
                    totalValue.textContent = numCount;
                } else {
                    cancelAnimationFrame(calcInterval);
                    numCount = total;
                }
            }
        };
        calcInterval = requestAnimationFrame(calcAnimate);
    };
    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });


};
export default calculator;
