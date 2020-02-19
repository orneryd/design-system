# mckesson-design-system
Design System using StoryBook to showcase native web-components


## Installation

Typically, you will want to install the individual components themselves. 


However, you may find at time that wou want to enclude the entire system at once.

### npm
```bash
npm i @mcklabs/mckesson-design-system --save
```

### yarn
```bash
yarn add @mcklabs/mckesson-design-system
```

# Building
```
curl -uEID:PASSWORD "https://tools.mckesson.com/artifactory/api/npm/mcklabs-npm/auth/mcklabs" >> ~/.npmrc
git clone git@github.com:mckesson/mckesson-design-system.git
cd mckesson-design-system
yarn config set strict-ssl false
yarn && yarn build && cd ./storybook && yarn && yarn storybook
```
The root build will compile all of the components under /packages as standard web-components. Each has its own unique package name under the @mcklabs scope in npm.

Then you can go into the /storybook directory and run the storybook script to test out each of the components within storybook.

