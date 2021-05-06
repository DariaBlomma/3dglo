const togglePopUp = () => {
    const popup = document.querySelector('.popup');

    let popupIntervalShow;
    let count = 0;
    const popupShow = () => {
        popupIntervalShow = requestAnimationFrame(popupShow);
        count += 0.01;
        if (count < 1) {
            popup.style.display = 'block';
            popup.style.opacity = `${count}`;
        } else {
            cancelAnimationFrame(popupIntervalShow);
            count = 0;
        }
    };
    let popupIntervalHide;
    let countHide = 1;
    const popupHide = () => {
        popupIntervalHide = requestAnimationFrame(popupHide);
        countHide -= 0.01;
        if (countHide > 0) {
            popup.style.opacity = `${countHide}`;
        } else {
            popup.style.display = 'none';
            cancelAnimationFrame(popupIntervalHide);
            countHide = 1;
        }
    };
    // popupBtns.forEach(item => {
    //     item.addEventListener('click', () => {
    //         popup.style.display = 'block';
    //     });
    // });
    // popupClose.addEventListener('click', () => {
    //     popup.style.display = 'none';
    // });
    // popupBtns.forEach(item => {
    //     item.addEventListener('click', popupShow);
    // });

    // popup.addEventListener('click', event => {
    //     let target = event.target;
    //     if (target.classList.contains('popup-close')) {
    //         popupHide();
    //     } else {
    //         target = target.closest('.popup-content');
    //         if (!target) {
    //             popupHide();
    //         }
    //     }

    // });
    const popupHandler = () => {
        if (popup.style.display === '' ||  popup.style.display === 'none') {
            popup.style.opacity = 1;
            popup.style.display = 'block';
        } else {
            popup.style.opacity = 0;
            popup.style.display = 'none';
        }
    };

    document.addEventListener('click', event => {
        let target = event.target;
        if (target.matches('.popup-btn')) {
            if (window.innerWidth > 768) {
                popupShow();
            } else {
                popupHandler();
            }
        }

        if (popup.style.display === 'block') {
            if (target.classList.contains('popup-close')) {
                if (window.innerWidth > 768) {
                    popupHide();
                } else {
                    popupHandler();
                }
            } else {
                target = target.closest('.popup-content');
                if (!target && !event.target.matches('.popup-btn')) {
                    if (window.innerWidth > 768) {
                        popupHide();
                    } else {
                        popupHandler();
                    }
                }
            }
        }
    });
};

export default togglePopUp;