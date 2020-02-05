# Introduction

Vue-apicloud-QuickStart consists of two parts:

- The first part is `ready.plugin`, which mainly solves the API problems, such as `api`, `apiready` does not exist in PC browser。 Using Vue mixin to register a new life cycle `onReady` to the Vue instance, `onReady` will execute after `mounted`, and ensure that apiready has been executed; registering `apiEvent` to the Vue instance, which can quickly realize the listening of native events.

- The other part is `help.plugin`, which provides us with some common helper methods and mounts them on the Vue instance, which is convenient for us to call. For example, `this.$page.push({ Name: 'pagename' })` can be used directly for page Jump.

## How It Works

In fact, Vue apicloud QuickStart is based on [w-xuefeng/vue-cli-plugin-apicloud](https://github.com/w-xuefeng/vue-cli-plugin-apicloud). With the help of `Vue CLI` to modify the entry of webpack, as well as some other configurations, the file directory structure needed to develop a multi page application and build it into an apicloud platform using Vue is realized.
