const getDiamondHandsState = () => {
  chrome.runtime.sendMessage(
    {
      msg: "getDiamondHands",
    },
    (response) => {
      if (response) {
        document.querySelector("#diamond-hands").checked =
          response.diamondHands;
      }
    }
  );
};

(() => {
  getDiamondHandsState();

  document.querySelector("#diamond-hands")?.addEventListener("change", (e) => {
    chrome.runtime.sendMessage({
      msg: "setDiamondHands",
      diamondHands: e.target.checked,
    });
  });
})();
