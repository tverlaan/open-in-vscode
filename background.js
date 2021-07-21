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
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'github.com' },
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'gitlab.com' },
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ])
  })
})

chrome.pageAction.onClicked.addListener(tab => {
  const url = new URL(tab.url)
  const domain = url.hostname.split('.').slice(-2).join('.')

  let uriHandle = false
  switch (domain) {
    case 'bitbucket.org':
      uriHandle = handleBitbucket(url)
      break
    case 'atlassian.net':
      uriHandle = handleJira(url)
      break
    case 'github.com':
      // consider using https://github.com/Mottie/github-reserved-names
      uriHandle = handleOpenOrClone(url)
      break
    case 'gitlab.com':
      uriHandle = handleOpenOrClone(url)
      break
    default:
  }
  if (uriHandle !== false) {
    window.open(uriHandle)
    // only enable with config
    // chrome.tabs.remove(tab.id)
  }
})

function handleBitbucket(url) {
  const path = url.pathname.split('/').slice(1)
  if (path[0] === 'account' || path[0] === 'dashboard' || path.length < 2) return;

  if (path.length >= 4 && path[2] === 'pull-requests' && path[3].match(/[0-9]+/) !== null) {
    return `${ide()}://atlassian.atlascode/openPullRequest?q=${encodeURIComponent(url.href)}`
  } else {
    return handleOpenOrClone(url)
  }
}

function handleJira(url) {
  const issueMatch = url.pathname.match(/[A-Z]{2,}-[0-9]+/)
  if (issueMatch) {
    return `${ide()}://atlassian.atlascode/showJiraIssue?issueKey=${issueMatch[0]}&site=${url.hostname}`
  }
  return false
}

function handleOpenOrClone(url) {
  const path = url.pathname.split('/').slice(1)

  if (path[0] !== undefined && path[1] !== undefined) {
    const org = path[0]
    const project = path[1]
    const cloneUrl = encodeURIComponent(`git@${url.hostname}:${org}/${project}`)
    return `${ide()}://timmoverlaan.uri-open-recent/open-or-clone?project=${project}&url=${cloneUrl}`
  }
  return false
}

function ide() {
  // add support for insiders via config
  return 'vscode'
}
