const toggleMenu = () => {
    const menuBlock = document.querySelector('menu');

    let showInterval;
    let count = 0;
    const menuShow = () => {
        // console.log('in menu show');
        menuBlock.style.left = 0;
        showInterval = requestAnimationFrame(menuShow);
        count += 2;
        if (count < 101) {
            menuBlock.style.transform = `translate(${count}%)`; // 100%
        } else {
            cancelAnimationFrame(showInterval);
            count = 0;
        }
    };

    let hideInterval;
    let countHide = 0;
    const menuHide = () => {
        // console.log('in menu hide');
        hideInterval = requestAnimationFrame(menuHide);
        const width = menuBlock.clientWidth;
        countHide += 5;
        if (countHide < width) {
            menuBlock.style.left = `${countHide}px`;
        } else {
            cancelAnimationFrame(hideInterval);
            countHide = 0;
        }
    };

    const handlerMenu = () => {
        // console.log('in handler menu');
        countHide = 0;
        count = 0;
        menuBlock.style.left = 0;
        if (!menuBlock.style.transform || menuBlock.style.transform === `translate(-100%)` ||
        menuBlock.style.transform === `translate(100%)`) {
            menuBlock.style.transform = `translate(0)`;
        } else {
            menuBlock.style.transform = `translate(-100%)`;
        }

        // menuBlock.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', event => {
        let target = event.target;
        // console.log('target: ', target);
        if (target.closest('.menu')) {
            console.log('menu click');
            if (window.innerWidth > 768) {
                menuBlock.classList.add('shown');
                console.log('will show menu');
                menuShow();
            } else {
                handlerMenu();
            }
        } else  if (target.classList.contains('close-btn')) {
            menuBlock.classList.remove('shown');
            if (window.innerWidth > 768) {
                menuHide();
            } else {
                handlerMenu();
            }
        } else if (target.closest('menu ul>li>a')) {
            menuBlock.classList.remove('shown');
            if (window.innerWidth > 768) {
                menuHide();
            } else {
                handlerMenu();
            }
        } else {
            target = target.closest('menu');
            if (!target && !event.target.closest('.menu') && menuBlock.classList.contains('shown')) {
                menuBlock.classList.remove('shown');
                if (window.innerWidth > 768) {
                    menuHide();
                } else {
                    handlerMenu();
                }
            }
        }
    });
};

export default toggleMenu;