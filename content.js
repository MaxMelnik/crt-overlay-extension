
(() => {
    if (document.getElementById("crt-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "crt-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.style.display = "none";

    document.documentElement.appendChild(overlay);

    const setEnabled = (enabled) => {
        overlay.style.display = enabled ? "block" : "none";
    };

    chrome.storage.local.get({ enabled: true }, (result) => {
        setEnabled(result.enabled);
    });

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area === "local" && changes.enabled) {
            setEnabled(changes.enabled.newValue);
        }
    });
})();
