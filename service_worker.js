 chrome.runtime.onInstalled.addListener(function (_details) {
     chrome.storage.sync.set({ enabled: true }, function () {
      console.log("Default Scrollbar Installed.");
      });
 });

async function setIcon() {
  let enabled = await chrome.storage.local.get("enabled");
  if (enabled){
    chrome.action.setIcon({
      path: {
        48: "icons/wheel_128.png"
      }
    });
  } else {
    chrome.action.setIcon({
      path: {
        48: "icons/wheel_disabled_128.png"
      }
    });
  }
}

setIcon();
