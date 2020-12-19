chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostSuffix: 'atlassian.net' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'bitbucket.org' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ])
  })
})

chrome.pageAction.onClicked.addListener(tab => {
  let url = new URL(tab.url)
  let domain = url.hostname.split('.').slice(-2).join('.')

  // add support for insiders via config
  let vscode = 'vscode://'
  switch (domain) {
    case 'bitbucket.org':
      path = url.pathname.split('/').slice(1)
      if (path[0] === 'account' || path[0] === 'dashboard' || path.length < 2) return;

      if (path.length >= 4 && path[2] === 'pull-requests' && path[3].match(/[0-9]+/) !== null) {
        vscode += 'atlassian.atlascode/openPullRequest?q=' + encodeURIComponent(url.href)
      } else {
        let clonePath = path.slice(0, 2).join('/')
        vscode += 'timmoverlaan.uri-open-recent/open-or-clone?url=' + encodeURIComponent("ssh://git@" + url.hostname) + '/' + clonePath
      }
      
      break;
    case 'atlassian.net':
      let issueMatch = url.pathname.match(/[A-Z]{2,}-[0-9]+/)
      if (issueMatch) {
        vscode += 'atlassian.atlascode/startWorkOnJiraIssue?issueKey=' + issueMatch[0] + '&site=' + url.hostname
      }

      break;
    default:
  }
  if (vscode !== 'vscode://') {
    window.open(vscode)
    // only enable with config
    // chrome.tabs.remove(tab.id)
  }
})
