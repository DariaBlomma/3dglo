const scroll = () => {
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
