
const toggle = document.getElementById("toggle");

chrome.storage.local.get({ enabled: true }, (result) => {
    toggle.checked = result.enabled;
});

toggle.addEventListener("change", async () => {
    await chrome.storage.local.set({
        enabled: toggle.checked
    });
});
