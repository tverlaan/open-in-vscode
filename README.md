# Open in VS Code

[![Open in VS Code in chrome store](https://img.shields.io/chrome-web-store/v/kcplfgklelmfcockoimjkdgnlkbfgkjf)](https://chrome.google.com/webstore/detail/open-in-vs-code/kcplfgklelmfcockoimjkdgnlkbfgkjf)

Add a simple button to navigate from Github, Gitlab, Bitbucket and Jira to VS Code with a single click. Requires '[Open Recent via URI](https://marketplace.visualstudio.com/items?itemName=timmoverlaan.uri-open-recent)' plugin in VS Code. You can also use the keyboard shortcut `Cmd+Shift+O` (Mac) or `Ctrl+Shift+O` (Win/Linux).

## Features

  * Open or clone the project in VS code on Github, Gitlab & Bitbucket
  * Open Bitbucket PR in VS code when viewing a specific PR
  * Open Jira issue in VS code

## Requirements

You need the following plugins in VS Code.

  * [timmoverlaan.uri-open-recent](https://marketplace.visualstudio.com/items?itemName=timmoverlaan.uri-open-recent)
  * [atlassian.atlascode](https://marketplace.visualstudio.com/items?itemName=Atlassian.atlascode) (only if you need extended bitbucket/jira features)

## URI Handlers in VS Code

  * Opening: vscode://timmoverlaan.uri-open-recent/open-or-clone?project=open-in-vscode&url=https%3A%2F%2Fgithub.com%2Ftverlaan%2Fopen-in-vscode.git
  * Cloning: vscode://vscode.git/clone?url=foobar
  * Open PR: vscode://atlassian.atlascode/openPullRequest?q=https%3A%2F%2Fbitbucket.org%2Fcompany%2Fproject%2Fpull-requests%2F123
  * Show Jira issue: vscode://atlassian.atlascode/showJiraIssue?issueKey=ABC-123&site=company.atlassian.net

## Documentation

https://github.com/microsoft/vscode-docs/blob/master/api/advanced-topics/remote-extensions.md#callbacks-and-uri-handlers

