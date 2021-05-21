chrome.action.onClicked.addListener(function (activeTab) {
  let newURL = 'http://sgsg.space/';
  chrome.tabs.create({ url: newURL });
});
