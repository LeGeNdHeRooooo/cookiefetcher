chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getAllCookies") {
        const getAllCookiesParams = { url: request.url };
        chrome.cookies.getAll(getAllCookiesParams, (cookies) => {
            console.log('Cookies fetched:', cookies);
            sendResponse({ data: cookies });
        });
        
        return true;
    }
});


