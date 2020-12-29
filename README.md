# Atlassion to VS Code

**DEPRECATED, PLEASE SWITCH TO [Open in VS Code](https://chrome.google.com/webstore/detail/open-in-vs-code/kcplfgklelmfcockoimjkdgnlkbfgkjf)**

[![Atlassian to VS Code in chrome store](https://img.shields.io/chrome-web-store/v/addmboihofpaognchiciamhmfdmfbipd)](https://chrome.google.com/webstore/detail/atlassian-to-vs-code/addmboihofpaognchiciamhmfdmfbipd)

Chrome browser extension that adds a button to navigate from Jira/Bitbucket to VS Code with a single click.

## Features

  * Opens Bitbucket PR in VS Code
  * Opens (when in recents) or clones the project in VS code on all other Bitbucket pages
  * Opens "start work" in VS code, from there easily click on the ticket
  * Directly opening related Jira is [pending](https://bitbucket.org/atlassianlabs/atlascode/pull-requests/965)

## Requirements

For optimal use of this browser extension install the following VS Code extensions:

  * atlassian.atlascode
  * timmoverlaan.uri-open-recent

## URI Handlers in VS Code

  * Opening: vscode://timmoverlaan.uri-open-recent/open-or-clone?project=atlas-to-vscode&url=https%3A%2F%2Fgithub.com%2Ftverlaan%2Fatlas-to-vscode.git
  * Cloning: vscode://vscode.git/clone?url=foobar
  * Open PR: vscode://atlassian.atlascode/openPullRequest?q=https%3A%2F%2Fbitbucket.org%2Fcompany%2Fproject%2Fpull-requests%2F123
  * Starting work on Jira: vscode://atlassian.atlascode/startWorkOnJiraIssue?issueKey=ABC-123&site=company.atlassian.net

## Documentation

https://github.com/microsoft/vscode-docs/blob/master/api/advanced-topics/remote-extensions.md#callbacks-and-uri-handlers

