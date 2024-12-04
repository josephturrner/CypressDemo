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
  - Verify that the header exists
    - Ensure the header contains a child image element with the correct `src` attribute.
    - Check that the header contains a link element with the correct `href` attribute.
      - Confirm that the link is clickable.
      - Verify that the link functions correctly by ensuring the new page's URL matches the `href` attribute.

- **Banner**:
  - Verify the Selenium home banner exists.
    - Check that the link child element exists
      - Ensure `href` attribute is correct
      - Ensure `target="_blank"` to open new window on click
    - Verify link is clickable
      - Validate url is followed on click by intercepting GET request

- **Cards**:
  - FOR EACH card element that SHOULD exist
    - Verify card exists
    - Verify `svg` element is present
    - Verify card body exists
      - Verify text matches the name of the card
    - Verify card is clickable
      - Verify redirect to correct url `baseurl/clickedCard`

### Book Store:
COMING SOON
   
---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
