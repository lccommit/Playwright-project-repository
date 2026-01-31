# Playwright-project-repository

# IT3040 Assignment 1 — Playwright Automation Test Suite | Singlish to Sinhala Translator

Registration No: IT23583764
Name: CHANDRASIRI S.D.L.B
Group: 1.1

## Project Description

Test scenarios were designed based on the assignment requirements and executed using Playwright automation. The observed system outputs were recorded in the provided Excel test case template along with pass/fail status and justifications.

https://www.swifttranslator.com/

The objective of this test suite is to validate:

- Correct [Singlish → Sinhala] conversion behavior
- Handling of different sentence structures
- Mixed language inputs
- Formatting and punctuation handling
- Robustness under unusual inputs
- UI behavior

## Setup Instructions

Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

## Run Tests

npx playwright test

## View HTML Report

npx playwright show-report

## Test Coverage

- 24 Positive functional tests
- 10 Negative functional tests
- 1 UI behavior test

Coverage includes:

- Simple / compound / complex sentences
- Questions and commands
- Positive and negative forms
- Greetings and requests
- Slang and informal phrases
- Mixed Singlish + English terms
- Numbers, currency, dates, time
- Formatting and spacing variations
- Joined word stress cases

## UI Test

- 1 UI behavior test verifying:
  - Real-time output generation
  - Output area is not manually editable
