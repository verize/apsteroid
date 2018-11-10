## Apsteroid! by Verize

**author**: Gonzalo Plaza <gonzalo@verize.com>

**version**: 1.0.1-beta

Apsteroid! A simple service to retrieve a list of Asteroids based on their closest approach date to Earth...

We use Vuejs, Nodejs and NASA APIs to obtain data filtered by dates.

### Installation:

Install libraries using Yarn (https://yarnpkg.com)

```
$ yarn install
$ cp .env.dist .env
```

### Configuration:

You should create an .env file inside your project root directory:

```
VUE_APP_NAME=Apsteroid!
VUE_APP_VERSION=1.0.1-beta
VUE_APP_NASA_API_ENDPOINT=https://api.nasa.gov/neo/rest/v1/feed
VUE_APP_NASA_API_KEY=DEMO_KEY
```

### Run development node server:

You can run frontend application development server using Vue-cli commands (ideal for dev environment):

```
$ yarn serve
```

Or compiling assets and running application through custom Node server:

```
$ yarn build
$ yarn dev
```

### References:

- VueCLI 3: https://cli.vuejs.org
- Nodejs/Express: https://expressjs.com
- BootstrapVue: https://bootstrap-vue.js.org
- NASA API Docs: https://api.nasa.gov/index.html
