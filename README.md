# greenspark-frontend-task

## Project Setup
The project has been set up using `npm create vue@latest` with `npm 8.15.0`  and `node v16.17.0`.
Also checked  with `lts` versions `npm 10.2.4` and `node v20.11.1`. 
```sh
npm  install
```
### Compile and Hot-Reload for Development
```sh
npm  run  dev
```
### Type-Check, Compile and Minify for Production
```sh
npm  run  build
```
### Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm  run  test:unit
```
### Run E2e Tests with [Playwright](https://playwright.dev/)
```sh
npm  run  test:e2e
```
### Run Component Tests [Storybook](https://storybook.js.org/)
```sh
npm  run  storybook
```
### Lint with [ESLint](https://eslint.org/)
```sh
npm  run  lint
```
- I assume that the API will never return a list of widget_products with more than one active state.
- I am not satisfied with the formatting of Tailwind classes. Normally i handle it with prettier `"printWidth": 100` but for some reson this does not work.
- Tested on Google Chrome 105.0.5195.125 and Mozilla Firefox 123.0