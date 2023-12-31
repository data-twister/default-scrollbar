
setPopupBoxStates();

// document.getElementById("abf-enabled").checked = true

document.getElementById("ds-disabled").addEventListener("click", enableDisable)


function setPopupBoxStates(){
  chrome.storage.local.get().then(function(settings){

    if(settings.enabled){
        document.getElementById("ds-disabled").checked = false;
      }
    else{
      document.getElementById("ds-disabled").checked = true;
    }

    setIcon();
  });
  };


  async function setIcon(){
    await chrome.storage.local.get("enabled").then(function(result){
      if(result.enabled == true){
      chrome.action.setIcon({
        path: {
          48: "../icons/wheel_128.png"
        }
      });
      }
      else{
        chrome.action.setIcon({
          path: {
            48: "../icons/wheel_disabled_128.png"
          }
        });
      }
  });
  }


async function enableDisable(event){
  disabled=document.getElementById("ds-disabled").checked;
  console.log("event: "+ event);
  if(!disabled){
    chrome.storage.local.set({"enabled": true});
  }
  else{
    chrome.storage.local.set({"enabled": false});
  }

  setIcon();

chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
  chrome.tabs.reload(arrayOfTabs[0].id);
});
}


