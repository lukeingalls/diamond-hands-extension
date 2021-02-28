(() => {
    globalThis.diamondHands = true;

    browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.msg === 'getDiamondHands') {
            sendResponse({ diamondHands: globalThis.diamondHands });
        }
        if (request.msg === 'setDiamondHands') {
            globalThis.diamondHands = request.diamondHands;
        }
    })
})();