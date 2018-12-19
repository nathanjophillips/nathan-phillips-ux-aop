---
title: 'Unit 7: Testing'
---

**[< Unit 6: AnuglarJS](../6-angular)**

# Unit 7: Testing

## 7.1: Unit Testing

#### 7.1.0: Research
1. From ngBook read:
	- Testing (skip "End-to-End Introduction", "Protractor", and any sub-sections dealing with end-to-end testing)
2. From the Angular Docs read:
	- [Developer Guide: Unit Testing](https://docs.angularjs.org/guide/unit-testing)
	- [$httpBackend](https://docs.angularjs.org/api/ngMock/service/$httpBackend)
3. From the Karma Config Docs read:
	- [Configuration File](http://karma-runner.github.io/0.13/config/configuration-file.html)
	- [Files](http://karma-runner.github.io/0.13/config/files.html)
	- [Browsers](http://karma-runner.github.io/0.13/config/browsers.html)
	- [Preprocessors](http://karma-runner.github.io/0.13/config/preprocessors.html)
	- [Plugins](http://karma-runner.github.io/0.13/config/plugins.html)
4. From the Jasmine Docs read:
	- [Introduction.js](http://jasmine.github.io/2.3/introduction.html)

#### 7.1.1: Setting Up Karma (with Jasmine)
1. Install and save [Karma](https://www.npmjs.com/package/karma), [Karma-Jasmine](https://www.npmjs.com/package/karma-jasmine), and [Karma-PhantomJS-Launcher](https://www.npmjs.com/package/karma-phantomjs-launcher) as **devDependencies**
2. Create a `karma.conf.js` file to configure Karma to your project
	- Ensure your config uses "jasmine" as it's framework and "PhantomJS" as it's browser
	- You can run `karma init` in your repository to have Karma step you through each field of the config
3. Use [gulp to run Karma](https://github.com/karma-runner/gulp-karma/blob/master/gulpfile.js) by creating a "unit-test" gulp task
	- As Karma already is a NodeJS package, you won't need to download a gulp plugin for Karma. This is one of the finer features of Gulp.
	- It may also be helpful to know what [__dirname](https://nodejs.org/docs/latest/api/globals.html#globals_dirname) is as you will more than likely need to use it to point to your `karma.conf.js` file

#### 7.1.2: Writing unit tests
*As you create your unit test, remember you are only testing your application. Your dependencies should already be tested by those who created them.*

1. Create unit tests for your each of your services
	- You will absolutely need $httpBackend to accomplish this
2. Create unit tests for your directives
3. Create unit tests for your controllers

--------------------------------------------------------------------------------

## 7.2: End-to-End (e2e) Testing

#### 7.2.0: Research
1. From the Testing chapter of [ngBook](https://drive.google.com/a/banno.com/uc?id=0B2ZfYb5gma2ER3gyUzhSR2FZU3M&export=download) read:
	- End-To-End Introduction
	- Testing an App
	- Testing Events
	- Protractor

2. From [Protractor](http://angular.github.io/protractor/#/toc) read:
	- [Home Page](https://angular.github.io/protractor/#/)
	- [Setting Up Protractor](http://www.protractortest.org/#/protractor-setup)
	- [Tutorial](http://www.protractortest.org/#/tutorial)

	*For more on Protractor, visit the official [Proftractor Github Repo](https://github.com/angular/protractor)*


4. Read Angular's Documentation for [ngMockE2E](https://docs.angularjs.org/api/ngMockE2E)

#### 7.2.1: Protractor
1. Setup:
	- Use npm to install Protractor globally:
		- 'npm install -g protractor'
			- This will install both protractor and webdriver-manager
			- Run 'protractor --version' to make sure it's working

	- webdriver-manager is a helper tool to easily get an instance of a Selenium Server running
		- To make sure webdriver-manager is up-to-date run 'webdriver-manager update'
		- Start the server by running 'webdriver-manager start'
			- Your Protractor tests will send requests to this server to control a local browser

	***NOTE***: You will need to have the [Java Development Kit (JDK)](http://www.oracle.com/technetwork/java/javase/downloads/index.html) installed for Selenium, and may be prompted by an error to do so. Check for the SDK by running 'java -version' from the command line.

2. Protractor.config.js File:
	- Create a config file that uses a Selenium Address and gets your Spec.js page
		- Look back at the Configuration section on the Protractor home page
3. Now you're ready to write e2e tests!

#### 7.2.2: Writing e2e tests
1. You will need to create 2 files for these tests:
	- e2eSpec.js
		- This file will contain all tests that are actually being ran

	- e2eMocks.js
		- This file will contain everything you need to mock your tests

***NOTE*** *Mocking is used to simulate RESTful API requests(GET, POST, etc.) to avoid manipulating the real database. Therefore no real objects should be manipulated during testing if you have correctly setup mocks*

2. Running the tests:
	- MAKE SURE you're running "webdriver-manager start" in a separate terminal window
	- Run "protractor protractor.conf.js" to start the testing(Will open a browser window and simulate user actions)...it's that simple!

***NOTE*** *Expect the browser window to run the tests VERY fast. If you want to slow down the tests for debugging purposes, refer to this [Stack Overflow page](http://stackoverflow.com/questions/24960290/can-protractor-be-made-to-run-slowly)*
