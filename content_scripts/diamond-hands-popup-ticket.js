const INPUT_ID = "#qt-symbol";

const setInput = (input) => {
  input.addEventListener("change", (e) => {
    console.log(e.target.value);
    if (e.target.value.toUpperCase() === "GME") {
      Array.from(
        document.querySelector("#st-form-container--action")?.children
      )?.map((child) => {
        if (child.innerHTML.includes("Sell")) {
          child.classList.add("HIDE-SELL-BUTTON");
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

    if (response.diamondHands) {
      const trade_container = document.querySelector("#tradeTicketContainer");
      console.log(trade_container);
      const getInput = (mutationsList, observer) => {
        if (trade_container.children.length) {
          const interval_id = setInterval(() => {
            let input = document.querySelector(INPUT_ID);
            if (input) {
              setInput(input);
              clearInterval(interval_id);
            }
          }, 500);
        }
      };

      const observer = new MutationObserver(getInput);

      observer.observe(trade_container, { childList: true });
    }
  } catch (error) {
    console.log(error);
  }
})();
