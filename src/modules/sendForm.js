const sendForm = formId => {
    const errorMessage = 'Something went wrong';
    const successMessage = 'Thank you! We will contact you soon!';
    const statusMessage = document.createElement('div');
    const inputs = formId.querySelectorAll('input');
    const removeMessage = () => {
        statusMessage.remove();
    };

    const showSuccess = () => {
        statusMessage.className = '';
        statusMessage.style.cssText = `font-size: 2rem;color: white;`;
        statusMessage.textContent = successMessage;
        inputs.forEach(item => {
            item.value = '';
        });
        setTimeout(removeMessage, 5000);
    };

    const showError = error => {
        statusMessage.className = '';
        statusMessage.style.cssText = `font-size: 2rem;color: white;`;
        statusMessage.textContent = errorMessage;
        console.error(error);
        setTimeout(removeMessage, 5000);
    };

    formId.addEventListener('submit', event => {
        event.preventDefault();

        formId.append(statusMessage);
        statusMessage.className = 'statusMessage';
        const formData = new FormData(formId);
        const body = {};
        formData.forEach((val, key) => {
            body[key] = val;
        });

        postData(body)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('network status is not 200');
                }
                showSuccess();
            })
            .catch(showError);
    });

    const postData = body =>  fetch('./server.php', {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
};
export default sendForm;
