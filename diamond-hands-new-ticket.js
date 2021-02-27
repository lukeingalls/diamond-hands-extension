const INPUT_ID = '#eq-ticket-dest-symbol';

const setInput = (input) => {
    input.addEventListener("change", (e) => {
        if (e.target.value.toUpperCase() === 'GME') {
            document.querySelectorAll(".eq-ticket-toggle-button").forEach((elem) => {
                if (elem.htmlFor === 'action-sell') {
                    elem.classList.add('HIDE-SELL-BUTTON');
                }
            });
        } else {
            document.querySelector('.HIDE-SELL-BUTTON')?.classList.remove('HIDE-SELL-BUTTON');
        }
    });
}

(() => {
    let input = document.querySelector(INPUT_ID);

    if (!input) {
        const input_interval = setInterval(() => {
            input = document.querySelector(INPUT_ID);
            if (input) {
                clearInterval(input_interval);
                setInput(input);
            }
        }, 500);
    } else {
        setInput(input);
    }

})();