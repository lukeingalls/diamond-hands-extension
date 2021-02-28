const INPUT_ID = '#SYMBOL';

const setInput = (input) => {
    input.addEventListener("change", (e) => {
        if (e.target.value.toUpperCase() === 'GME') {
            Array.from(document.querySelector("#TEMP_ORDER_ACTION")?.children)?.map((child) => {
                if (child.innerHTML.includes('Sell')) {
                    child.classList.add('HIDE-SELL-BUTTON');
                }
            })
        } else {
            document.querySelector('.HIDE-SELL-BUTTON')?.classList.remove('HIDE-SELL-BUTTON');
        }
    });
}

(async () => {
    try {
        const response = await browser.runtime.sendMessage({
            msg: "getDiamondHands",
        });
        if (response.diamondHands) {
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
        }
    } catch (error) {
        console.log(error);
    }

})();