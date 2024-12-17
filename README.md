# POS Challenge

A simple Point-of-Sale system and dashboard built with React and TypeScript

## Table of Contents

- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Basic Usage](#running-the-app)
- [Approach](#features)
  - [Boilerplate](#boilerplate)
  - [Folder structure](#folder-structure)
  - [CSS](#css)
  - [State management](#state-management)
  - [Semantics & Accessibility](#semantics--accessibility)
  - [Workflow and CI/CD](#workflow)
  - [Conventional Commits](#conventional-commits)
- [Conclusion](#next-steps)

## Getting Started

### Installation

```
yarn
```

### Running the app

To serve the app at `http://localhost:3000`

```
yarn start
```

### Running the Unit tests

```
yarn test
```

Used React Testing Library, with the compatible Jest syntax. Admittedly, coverage is quite low as I ran out of time.

### Running the E2E tests

```
yarn run e2e
```

I have used Cypress for a very simple e2e test suite using `cypress-cucumber` and the Gherkin language inside the `.feature` file. There is only one, but everything is setup, going forward will just be about imporving coverage.

## Approach

### Boilerplate

Given the timeframe and size of the project, I have used Create-React-App to spin up a new app for simplicity.

### Folder structure

- **Interfaces:** reside with the component for which they are associated. I like to "program for deletability". More generic interfaces might be moved into their own files
- **Components:** I have made a separation between types of components. Page/Route components are in the `pages` folder, and smaller components are in the components
- **State Management:** React `Contexts` and any other state/storage related code would be in the `store` folder
- **Data:** Sample/Mock JSON data is in the `data` folder
- **E2E:** Everything e2e related is in the `Cypress` folder - as one would expect in a non-monorepo setup

### CSS

Given MUI was used here, I decided on the CSS Module approach, scoping the CSS using id's for page components - there will never be duplicate id's in the rendered markup.

### State management

The only state I managed was the currently selected Cashier, for which I used the Context API and the `useContext` hook. It is the `App` level, but for larger apps, I keep the `useContext` hook as low down the component tree as possible.

### Semantics & Accessibility

I typically have a strong focus on meaningful (semantic) markup which covers a significant portion of making the web accessibly. I feel that MUI does make that more difficult, given that _most_ of what it renders out is `divs`, but it does, of course, depend on the project

### Conventional Commits

I always strive to keep a clean git history and I find conventional commits do a good job on larger teams. https://www.conventionalcommits.org/en/v1.0.0/

## Next Steps

Areas for improvement:

- Unit test coverage
- E2E test coverage
- Code splitting (into smaller components)
- Abstracting localStorage methods - perhaps to some kind of utility/class/service
