# Cypress Testing - DemoQA

This repository contains **Cypress** tests for [DemoQA](https://demoqa.com/). 

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Running Tests](#running-tests)
- [Test Coverage](#test-coverage)
  - [Landing Page](#landing-page)
  - [Book Store](#book-store)
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
  - Header exists
    - Header contains a child image element
      - Correct `src` attribute
      - Has fallback `alt` attribute
    - Header contains link
      - Correct `href` attribute
      - Is clickable
      - Link is followed on click: URL matches correct `href`

- **Banner**:
  - Selenium home banner exists
    - Image exists
      - Correct `src` attribute
      - Has fallback `alt` attribute
    - Link exists
      - Correct `href` attribute
      - Correct `target="_blank"` attribute to open new tab
      - Is clickable
      - Redirect to correct URL by intercepting GET request

- **Cards**:
  - FOR EACH card element that SHOULD exist
    - Card exists
    - `svg` element exists
    - Card body exists
      - Text matches the name of the card
    - Is clickable
      - Redirect to correct URL `baseurl/clickedCard`

### Book Store:
COMING SOON
   
---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
