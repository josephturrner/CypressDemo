# Cypress Testing - DemoQA

This repository contains **Cypress** tests for [DemoQA](https://demoqa.com/). 

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
  - [Landing Page Tests](#landing-page)
- [License](#license)

---

## Introduction

This project contains end-to-end (E2E) tests for the DemoQA website using **Cypress** for skill development purposes

## Installation

To get started, clone the repository and install the necessary dependencies:

```
git clone https://github.com/josephturrner/CypressDemo.git
cd cypressDemo
npm install
```

---

## Running Tests

After the dependencies are installed, open Cypress to start running the tests:

```
npx cypress open
```

Select the **E2E tests** and choose the browser in which you'd like to run the tests.

---

## Test Coverage

### Landing Page:

These are the key elements and actions being tested on the landing page of [DemoQA](https://demoqa.com/):

- **Header**:
  - Verify that the `<header>` element exists.
  - Ensure the `<header>` element contains a child `<img>` element with the correct `src` attribute.
  - Check that the `<header>` element contains a child `<a>` element with the correct `href` attribute.
    - Confirm that the `<a>` element is clickable.
    - Verify that the `<a>` link functions correctly by ensuring the new page's URL matches the `href` attribute.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
