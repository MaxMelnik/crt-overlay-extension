
(() => {
    if (document.getElementById("crt-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "crt-overlay";
    overlay.setAttribute("aria-hidden", "true");
    overlay.style.display = "none";

    document.documentElement.appendChild(overlay);

    let settings = {
        enabled: true,
        flickerEnabled: false
    };

    function applySettings() {
        overlay.style.display = settings.enabled
            ? "block"
            : "none";

        overlay.classList.toggle(
            "crt-flicker",
            settings.enabled && settings.flickerEnabled
        );
    }

    chrome.storage.local.get(settings, (stored) => {
        settings = { ...settings, ...stored };
        applySettings();
    });

    chrome.storage.onChanged.addListener((changes, area) => {
        if (area !== "local") return;

        if (changes.enabled) {
            settings.enabled = changes.enabled.newValue;
        }

        if (changes.flickerEnabled) {
            settings.flickerEnabled =
                changes.flickerEnabled.newValue;
        }

        applySettings();
    });
})();
