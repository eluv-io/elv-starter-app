# Eluvio Starter App

A project template for creating an Eluvio application using React, Mobx, and elv-client-js. 

### Prerequisites

- Node.js version 16 or 18
- NPM 8 or higher

### Setup

#### Cloning

Clone the repo. We recommend making use of the following flags:
```
git clone --depth <number_of_commits_to_clone> -b <branch> <repo_url> <new_name>
```
- `--depth <depth>` is the amount of commits to include. In order to avoid copying the history of this repository, we recommend `--depth 1`.
- `-b <branch>` is the name of the branch that you would like to clone from, i.e., `main` or `develop`.
- `repo_url` is the url of this repository.
- `new_name` is what you would like to name the project.

#### Updating Origin

Update the origin remote to your repository url.
```
git remote set-url origin git://new_repo_url
```

#### Configuration

Create a file named `configuration.js` in the root of your project.
```
elv-starter-app
├── configuration.js
└── src
```

By default, WalletClient and ElvClient are initialized in the RootStore, which require the following configuration:
```
const EluvioConfiguration = {
  "config-url": <node-config-url>,

  "network": "main" | "demo",
  "mode": "staging" | "production"
};
```

### Installation

Run the following to install dependencies:
```
npm install
```

### Initialization

Run the following to start the server:

```
npm run serve
```
