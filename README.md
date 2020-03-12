# Journi Web App
[![CircleCI](https://circleci.com/gh/cambiahealth/journi-web-app.svg?style=svg&circle-token=3d545b442db183ccf241d9c3fd1f7db93bdc5f17)](https://circleci.com/gh/cambiahealth/journi-web-app)

## Setup

```bash
yarn install
yarn start
```

## Technology Stack

-   Templating: React
-   State: Apollo
-   Routing: React Router
-   Networking: Axios
-   Styles: Custom SCSS
-   Testing: Cucumber
-   Build: Webpack

## Architecture Decisions

-   Mobile-first layout
-   Multi-language support
-   Accessibility/ 508 compliance
-   Regression/ integration testing
-   Care Guide support view
-   Brandable colors/ logo
-   Support IE11+

## Priorities

1.  **Accessibility** – Usability for all our customers
2.  **Security** – Ensure customer trust with health data
3.  **Developer experience** – Faster product lifecycles
4.  **User experience** – Beautiful, branded experience
5.  **Performance** – Dont' leave people waiting

## Deploy

-   [ ] Setup Github repository
-   [ ] Setup CircleCI builds
-   [ ] Setup Janus S3 static website
-   [ ] Setup Janus environments w/promotion strategy
-   [ ] Setup DNS routing
    -   [ ] dev.journi.com
    -   [ ] uat.journi.com
    -   [ ] app.journi.com

## TODO

-   [ ] Router
-   [x] SVG Icons w/build system
-   [ ] Port RN Elements library
-   [ ] Apollo setup
-   [ ] GraphQL setup
-   [ ] Cucumber tests
-   [ ] Error handling
-   [ ] Form validation library
-   [ ] Tealium tagging
-   [ ] Pager chat integration
-   [ ] CMS for i18n
-   [ ] Dynamic header titles
-   [ ] Favicon
-   [ ] Admin/Support view
-   [ ] Code scanning (Vericode, Dependabot)

## Terminology

-   **Element**: Lorem ipsum
-   **Component**: Lorem ipsum
-   **Scene**: Lorem ipsum
-   **Route**: Lorem ipsum
-   **Chrome**: Lorem ipsum
-   **State**: Lorem ipsum
-   **Reducer**: Lorem ipsum
-   **Saga**: Lorem ipsum
-   **Action**: Lorem ipsum
-   **Feature**: Lorem ipsum
-   **Responsive**: Lorem ipsum
-   **Adaptive**: Lorem ipsum
-   **Behavior**: Lorem ipsum

## Rules of thumb

-   Write clean, but not clever code.
-   Write comments for a junior developer to understand.
-   Avoid DRY patterns if it obfuscates code purpose or introduces "prop hell".
-   Avoid premature optimization.
