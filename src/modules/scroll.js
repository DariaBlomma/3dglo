const scroll = () => {
    /*
        // для множества якорей
        const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
            animationTime = 300,
            framesCount = 20;

        anchors.forEach(item => {
        // каждому якорю присваиваем обработчик события
            item.addEventListener('click', e => {
                // убираем стандартное поведение
                e.preventDefault();
                // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
                // eslint-disable-next-line max-len
                const coordY = document.querySelector(item.getAttribute('href'))
                    .getBoundingClientRect().top + window.pageYOffset;
                console.log('coordY: ', coordY);
                // item.getAttribute('href') это конкретный полный атрибут ссылки, напр #service-block
                // getBoundingClientRect().top координаты оносительно окна
                // window.pageYOffset высота прокрутки от документа
                //  их сумма даст координаты относительно документа
                // coordY это координата блока, до которого надо прокрутить

                // запускаем интервал, в котором
                const scroller = setInterval(() => {
                // считаем на сколько скроллить за 1 такт
                    const scrollBy = coordY / framesCount;
                    console.log('scrollBy: ', scrollBy);

                    // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                    // и дно страницы не достигнуто
                    if(scrollBy > window.pageYOffset - coordY &&
                        window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                        console.log('window.pageYOffset - coordY: ', window.pageYOffset - coordY);
                        // то скроллим на к-во пикселей, которое соответствует одному такту
                        window.scrollBy(0, scrollBy);
                        // scrollBy скроллим каждый раз
                    } else {
                        // иначе добираемся до элемента и выходим из интервала
                        //  когда то, что прокрутили, стало больше координат элемента
                        window.scrollTo(0, coordY);
                        clearInterval(scroller);
                    }
                    // время интервала равняется частному от времени анимации и к-ва кадров
                }, animationTime / framesCount);
            });
        });
    */


    const anchor = document.querySelector('a[href="#service-block"]'),
        serviceBlock = document.getElementById('service-block'),
        animationTime = 300,
        framesCount = 20;

    anchor.addEventListener('click', e => {
        e.preventDefault();
        const coordY = serviceBlock.getBoundingClientRect().top + window.pageYOffset;
        const scroller = setInterval(() => {
            const scrollBy = coordY / framesCount;
            if (scrollBy > window.pageYOffset - coordY &&
                    window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                window.scrollBy(0, scrollBy);
            } else {
                window.scrollTo(0, coordY);
                clearInterval(scroller);
            }
        }, animationTime / framesCount);
    });
};
export default scroll;
