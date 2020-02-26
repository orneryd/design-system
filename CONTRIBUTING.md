# Contributing to the McKesson Design Sytem

## Philosophies
### Portability of Behavior
Behavior should be encapsulated with as few dependencies as possible. We should be encapsulating the behavior inside of standard Web Components (Custom Elements) that are part of the standard browser platform. That way, anyone can use the components regardless of the framework the consumer wants to use.

### Framework Agnosticism.
Every dependency we add to the design system increases the complexity and weight and reducses the ability of the design system to maintain the portability of behavior philosophy.

### Browser API mimicry
Every component should behave with interoperability/drop-in-replacements to standard broswer elements. That means forms should pick up our input elements to allow for built-in-browser validation. They should be extensible and overridable.

### Whitelabeling capability.
Every components should allow for som elevel of customizability through scss variables.

### Consistency 
naming should be consistent amond classes, functions, variables, etc... that way we can have a reasonable expectation of behavior within the design system itself.

### Anyone can contribute.
Anyone should feel confortable contributing, making suggestions, pointing out deficiencies, etc...

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

