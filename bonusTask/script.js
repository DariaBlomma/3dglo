window.addEventListener('DOMContentLoaded', () => {
    'strict';
    //send ajax form
    const doAjax = () => {
        const select = document.getElementById('select');
        // const errorMessage = 'Something went wrong';
        // // const loadMessage = 'Loading...';
        // const successMessage = 'Thank you! We will contact you soon!';
        // const statusMessage = document.createElement('div');
        // const inputs = formId.querySelectorAll('input');
        // statusMessage.style.cssText = `font-size: 2rem;color: green;`;
        // statusMessage.className = 'statusMessage';
        // const removeMessage = () => {
        //     statusMessage.remove();
        // };

        // const showSuccess = data => {
        //     statusMessage.className = '';
        //     statusMessage.style.cssText = `font-size: 2rem;color: white;`;
        //     statusMessage.textContent = successMessage;
        //     // inputs.forEach(item => {
        //     //     item.value = '';
        //     // });
        //     setTimeout(removeMessage, 5000);
        // };

        // const showError = error => {
        //     statusMessage.className = '';
        //     statusMessage.style.cssText = `font-size: 2rem;color: white;`;
        //     statusMessage.textContent = errorMessage;
        //     console.error(error);
        //     setTimeout(removeMessage, 5000);
        // };

        select.addEventListener('change', () => {
            // event.preventDefault();
            // document.body.append(statusMessage);
            // statusMessage.className = 'statusMessage';
            // statusMessage.textContent = loadMessage;
            // const formData = new FormData(formId);
            // const body = {};
            // for (const val of formData.entries()) {
            //     body[val[0]] = val[1];
            // }
            // formData.forEach((val, key) => {
            //     body[key] = val;
            // });
            fetch('./dbheroes.json')
                .then(response => {
                    console.log('response: ', response);
                    if (response.status !== 200) {
                        throw new Error('network status is not 200');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('data: ', data);
                    // showSuccess(data);
                })
                .catch(error => {
                    console.log('error: ', error);
                    // console.error(error);
                });

        });
    };

    doAjax();
});
