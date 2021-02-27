const INPUT_ID = "#eq-ticket-dest-symbol";

const setInput = (input) => {
  input.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (e.target.value.toUpperCase() === "GME") {
      document.querySelectorAll(".eq-ticket-toggle-button").forEach((elem) => {
        if (elem.htmlFor === "action-sell") {
          elem.classList.add("HIDE-SELL-BUTTON");
        }
      });
    } else {
      document
        .querySelector(".HIDE-SELL-BUTTON")
        ?.classList.remove("HIDE-SELL-BUTTON");
    }
  });
};

(async () => {
  try {
    const response = await browser.runtime.sendMessage({
      msg: "getDiamondHands",
    });

    console.log(response, response.diamondHands);

    if (response.diamondHands) {
      let input = document.querySelector(INPUT_ID);

      console.log(input);
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
