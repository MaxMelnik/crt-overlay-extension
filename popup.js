
const toggle = document.getElementById("toggle");
const flickerToggle = document.getElementById("flicker-toggle");

function updateUI() {
    flickerToggle.disabled = !toggle.checked;
}

chrome.storage.local.get(
    {
        enabled: true,
        flickerEnabled: false
    },
    (settings) => {
        toggle.checked = settings.enabled;
        flickerToggle.checked = settings.flickerEnabled;
        updateUI();
    }
);

toggle.addEventListener("change", async () => {
    updateUI();

    await chrome.storage.local.set({
        enabled: toggle.checked
    });
});

flickerToggle.addEventListener("change", async () => {
    await chrome.storage.local.set({
        flickerEnabled: flickerToggle.checked
    });
});
