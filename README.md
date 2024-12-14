# testautomation-assessment
Automation testing solution - Cypress

Overview
This repository contains an automation testing framework using Cypress with JavaScript for Web UI testing.

Technology used
Test framework: Cypress
Programming language: Javascript

Project structure
/cypress
  /e2e               # Test specifications (UI and API tests)
  /fixtures          # Test data files
  /support           # Custom commands and configurations
cypress.config.js    # Primary configuration file
README.md            # Project documentation
package-lock.json    # dependency locking
package.json         # Project dependencies and scripts


Test coverage
Web UI testing:
Application: https://www.saucedemo.com/
Tests covered: 4

Installation and setup

Prerequisites
Before you begin, ensure you have met the following requirements:
1. Node.js installed on your machine.
2. npm (Node package manager) installed

step1: Clone the repository
step2: Install dependencies <npm install cypress --save-dev>
step3: Open Cypress <npx cypress open>
step4: Create test file under e2e directory
step5: Open dashboard <npx cypress open>
step6: Run tests using cypress dashboard or run the tests in headless mode <npx cypress run>
