const getDiamondHandsState = async () => {
  try {
    const response = await browser.runtime.sendMessage({
      msg: "getDiamondHands",
    });
    
    document.querySelector('#diamond-hands').checked = response.diamondHands;
  } catch (error) {
    console.log(error);
  }
};

(() => {
    getDiamondHandsState();

    document.querySelector('#diamond-hands')?.addEventListener("change", (e) => {
        browser.runtime.sendMessage({
            msg: "setDiamondHands",
            diamondHands: e.target.checked,
        })
    });
})();
