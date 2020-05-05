# Journi Web App

[![CircleCI](https://circleci.com/gh/cambiahealth/journi-web-app.svg?style=svg&circle-token=3d545b442db183ccf241d9c3fd1f7db93bdc5f17)](https://circleci.com/gh/cambiahealth/journi-web-app)

## Setup

Create an `.npmrc` file in root directory of the project as described in [docs](https://confluence.cambiahealth.com/confluence/display/CCSE/Artifactory+-+Getting+Started)

```bash
npm install
npm start
```

## Component Library

Implementations of all the [components](https://github.com/cambiahealth/journi-web-app/tree/implement-storybook/src/components) in the design system are catalogued using [Storybook](https://storybook.js.org/).

-   Locally: run `npm run storybook` to see the catalogue at [`localhost:9009`](https://github.com/cambiahealth/journi-web-app/blob/implement-storybook/package.json#L12)
-   In deployed environments: https://journi-web-app-styleguide.dev.janusplatform.io/

## Technology Stack

-   **Templating**: [React](https://reactjs.org/docs/getting-started.html)
-   **State**: [Apollo](https://www.apollographql.com/docs/react/)
-   **Routing**: [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
-   **Networking**: [Axios](https://github.com/axios/axios)
-   **Styles**: Custom [SCSS](https://sass-lang.com/documentation/syntax)
-   **Testing**: [Cucumber](https://cucumber.io/docs/cucumber/) + [Puppeteer](https://github.com/puppeteer/puppeteer)
-   **Build**: [CRA/ Webpack](https://create-react-app.dev/docs/getting-started)

## Architecture Decisions

-   Single page application
-   Hosted as S3 static website
-   Mobile-first layout
-   Multi-language support
-   Accessibility/ 508 compliance
-   GraphQL API support
-   Regression/ integration testing
-   Care Guide support view
-   Support IE11+

## Priorities

1.  **Accessibility** – Usability for all our customers
2.  **Security** – Ensure customer trust with health data
3.  **Developer experience** – Faster product lifecycles
4.  **User experience** – Beautiful, branded experience
5.  **Performance** – Dont' leave people waiting

## TODO

#### Deploy

-   [x] Setup Github repository
-   [x] Setup CircleCI builds
-   [x] Setup Janus S3 static website
-   [ ] Setup Janus environments w/promotion strategy
-   [ ] Setup DNS routing
    -   [ ] dev.journi.com
    -   [ ] uat.journi.com
    -   [ ] app.journi.com

#### Tooling

-   [x] Router
-   [x] SVG Icons w/build system
-   [x] Component Library patterns
-   [x] Apollo setup
-   [x] Cucumber tests
-   [ ] Error handling (Datadog)
-   [ ] Form validation library
-   [ ] Tealium tagging
-   [ ] Pager chat integration
-   [x] i18n string library
-   [x] Dynamic header titles
-   [x] Favicon
-   [ ] Admin/Support view

## Developer Rules Of Thumb

-   Write clean, but not clever code.
-   Write comments for a junior-level developer to understand.
-   Avoid DRY patterns if it obfuscates code purpose or introduces "prop hell".
-   Avoid premature optimization.

## Helpful VS Code Extensions

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)
-   [Cucumber (Gherkin) Syntax and Snippets](https://marketplace.visualstudio.com/items?itemName=stevejpurves.cucumber)
-   [Styled Components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
