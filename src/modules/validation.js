const validation = () => {
    const numbers = event => {
        const target = event.target;
        if (target.matches('.calc-count') || target.matches('.calc-square') || target.matches('.calc-day')) {
            target.value = target.value.replace(/\D/g, '');
        }
    };

    const markInvalid = elem => {
        elem.style.border = '1px solid red';
        setTimeout(() => {
            elem.style.border = '';
        }, 3000);
    };
    const markValid = elem => {
        elem.style.border = '1px solid green';
        setTimeout(() => {
            elem.style.border = '';
        }, 3000);
    };
    const rusText = event => {
        const namePLaceholders = document.querySelectorAll('[placeholder="Ваше имя"');
        const messagePLaceholders = document.querySelectorAll('[placeholder="Ваше сообщение"');

        const target = event.target;
        namePLaceholders.forEach(item => {
            if (item === target) {
                const reg = /^[А-яё\s-]{2,50}$/i;
                const test = reg.test(target.value);
                // const match = target.value.match(reg);
                // console.log('match: ', match);
                // console.log(target.value.length);
                // console.log('test: ', test);
                if (!test) {
                    target.value = '';
                    markInvalid(target);
                } else {
                    markValid(target);
                }
                // target.value = target.value.replace(/[^А-яё\s-]{2,50}/ig, '');
                // /[^А-яё\s-]*/ig
                target.value = target.value.toLowerCase().replace(/^.|\s./g, match => match.toUpperCase());
            }
        });

        messagePLaceholders.forEach(item => {
            if (item === target) {
                target.value = target.value.replace(/[^А-яё\s\d-.!?,:;']*/ig, '');
                // /[^А-яё\s-]*/ig
            }
        });
    };

    const email = event => {
        const target = event.target;
        const emailFields = document.querySelectorAll('[type="email"]');
        emailFields.forEach(item => {
            if (item === target) {
                const reg = /[a-z-@_.!~*']+@\w+\.\w{2,3}/g;
                const test = reg.test(target.value);
                if (!test) {
                    target.value = '';
                    markInvalid(target);
                } else {
                    markValid(target);
                }
                //target.value = target.value.replace(/[^a-z-@_.!~*']/ig, '');
                // [^A-z][^@-_\.!~\*']
                // /[^A-z]+[^@\-\_\.\!\~\*\']*/ig
            }
        });
    };

    const phone = event => {
        const target = event.target;
        const telFields = document.querySelectorAll('[type="tel"');
        telFields.forEach(item => {
            if (item === target) {
                const reg = /^[+\d]{11,12}$/g;
                const test = reg.test(target.value);
                if (!test) {
                    target.value = '';
                    markInvalid(target);
                } else {
                    markValid(target);
                }
                //target.value = target.value.replace(/[^+\d]/g, '');
                // /[^-()\d]/g - working solution
                // /\D[^-()]/g
            }
        });
    };

    const calcBlock = document.querySelector('.calc-block');
    calcBlock.addEventListener('input', numbers);
    //document.addEventListener('input', rusText);
    // document.addEventListener('input', email);
    document.addEventListener('blur', email, true);
    document.addEventListener('blur', rusText, true);
    // document.addEventListener('input', phone);
    document.addEventListener('blur', phone, true);
    document.addEventListener('blur', event => {
        const target = event.target;
        target.value = target.value.replace(/-+/g, '-');
        target.value = target.value.replace(/\s+/g, ' ');
        target.value = target.value.replace(/^\s/g, '');
        target.value = target.value.replace(/\s$/g, '');
    }, true);

};
export default validation;