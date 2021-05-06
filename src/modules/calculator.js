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
            if (numCount <= total) {
                diff = total - numCount;
                console.log(' diff: ',  diff);
                console.log('numCount: ', numCount);
                if (total > 1000) {
                    numCount += 1000;
                }
                if (diff < 100 || diff < 1000) {
                    console.log('diff < 1000: ', diff < 1000);
                    console.log('diff < 100: ', diff < 100);
                    numCount += diff;
                    console.log('numCount + diff: ', numCount);
                }
                totalValue.textContent = numCount;
            } else if (totalValue.textContent > total) {
                numCount = totalValue.textContent;
                console.log(' numCount in value < total: ',  numCount);
                diff = total - numCount;

                numCount -= 100;
                // if (total > 1000) {
                //     numCount -= 1000;
                // }
                // if (diff < 100) {
                //     // console.log('diff < 1000: ', diff < 1000);
                //     console.log('diff < 100: ', diff < 100);
                //     numCount += diff;
                //     console.log('numCount + diff: ', numCount);
                // }
                // numCount -= 100;
                totalValue.textContent = numCount;
            } else if (typeValue === '') {
                numCount = 0;
                totalValue.textContent = numCount;
                cancelAnimationFrame(calcInterval);
                calcSquare.value = '';
                calcCount.value = '';
                calcDay.value = '';
            } else {
                cancelAnimationFrame(calcInterval);
                numCount = total;
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
