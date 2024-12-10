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

Run tests in terminal (headless mode) with or without reporter
```
npm run test
```
```
npm run test:noreporter
```

**OR**

Open Cypress GUI for testing
```
npm run gui
```

**THEN**

When the runs are done, you will see screenshots in `cypress/screenshots`, and reports in `cypress/reports`
You can delete those files after a run using
```
npm run clean
```

---

## Test Coverage

### Landing Page:

These are the test cases for the [DemoQA Landing Page](https://demoqa.com/):

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
Simply for documentation purposes. I am practicing ensuring all test cases are checked.

These are the test cases for the [DemoQA BookStore](https://demoqa.com/books):

**Pre-Login**:

- Book Store Application collapsing bar
  - Exists
  - Is open by checking for class `show`
  - Book Store option is selected: contains `active` class
  - Can be toggled by clicking collapsing bar: `show` toggles on and off
  - Contains all expected buttons for login, book store, profile, and book store api
    - Button redirects as expected
    - Click button toggles `active`
      - Only selected button contains class `active`

- Book store display
  - Exists
  - All books displayed
  - No duplicates
  - Search bar
    - Exists
    - Allows typing
    - Rows updated on character input
    - Only matching books are displayed
      - Matches any substring of any length
      - Matches title, author, and publisher fields
    - Rows empty if string matches none
  - Rows specification
    - Exists
    - Allows changing
    - All provided row options work
    - 'Next' navigates to next
      - Disabled when page is max
    - 'Prev' navigates to previous
      - Disabled when page is min

**Create-User**:
In a development/testing environment, we could disable Captcha for this.
- Any empty values fail
- Password not matching requirements fails
- Does not allow duplicate username
- HTTP request success on valid user creation
  - API response with token

**Login**:
- Invalid user fails
  - With valid password for different user
- Invalid password fails
  - With valid user and without valid user
- Upon login, API responds with token
- User, userID, token, expiration stored in cookies

**Post-Login**:
- Username displayed on page
- Profile button redirects correctly
  - Profile displays no books in collection
  - Profile displays correct number of rows
  - Rows can be changed, display reflects changes
- Login button directs to say you are already logged in
- Logout button
  - Exists
  - Upon click, logs out, clears cookies

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
