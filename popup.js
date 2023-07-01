document.getElementById("getCookies").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        const url = tabs[0].url;
        chrome.runtime.sendMessage({ action: "getAllCookies", url: url }, (response) => {
            if (response) {
                const jsonData = JSON.stringify(response.data, null, 2);
                console.log(jsonData);
                saveAsFile(jsonData, "cookies.json");
            } else {
                console.error('Error fetching cookies');
            }
        });
    });
});

function saveAsFile(data, filename) {
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
}
