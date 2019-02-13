# React-Native Typescript Boilerplate

## Prerequisites

### Install Brew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### Install Node and Watchman
`
brew install node
brew install watchman
`

### Install React-Native-Cli
`npm install -g react-native-cli`

### Install XCode
Download and install XCode from the App Store.
Then open the preferences of Xcode and install Command line tools.

## Setup

It might be possible you need to add `react-native` to your PATH environment.
`export PATH="$HOME/.npm-packages/bin:$PATH"`

`
git clone https://github.com/ShahNami/rn-ts-starter.git
cd App
yarn install
react-native run-ios
`