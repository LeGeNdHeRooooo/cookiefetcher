document.addEventListener('fetchCookies', () => {
    chrome.runtime.sendMessage(
        "dnkcepgamapooaogieoacgejjallfhcd", 
        { action: "getAllCookies", url: window.location.href },
        (response) => {
            console.log(JSON.stringify(response.data, null, 2));
            const fetchedCookiesEvent = new CustomEvent('fetchedCookies', { detail: response.data });
            document.dispatchEvent(fetchedCookiesEvent);
        }
    );
});
