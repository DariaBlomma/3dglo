const changePhotos = () => {
    const teamImgs = document.querySelectorAll('.command__photo'),
        teamWrapper = document.querySelector('.command'),
        initialSrc = [];

    teamImgs.forEach(item => {
        const src = item.getAttribute('src');
        initialSrc.push(src);
    });

    teamWrapper.addEventListener('mouseover', event => {
        teamImgs.forEach(item => {
            if (event.target === item) {
                event.target.src = event.target.dataset.img;
            }
        });
    });
    teamWrapper.addEventListener('mouseout', event => {
        teamImgs.forEach((item, index) => {
            if (event.target === item) {
                event.target.src = initialSrc[index];
            }
        });
    });
};
export default changePhotos;