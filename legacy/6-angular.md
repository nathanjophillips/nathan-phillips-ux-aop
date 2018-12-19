---
title: 'Unit 6: AngularJS'
---

**[< Unit 5: Project Setup, Pt. II](../5-project-setup-2)**

# **Unit 6: AngularJS**
*You will now be utilizing the power of AngularJS to take your project from 'this is pretty cool' to 'THIS IS THE COOLEST THING IN THE WORLD!!'. Along with AngularJS, you will add additional dependencies to aid in connecting and interacting with a backend. Once your project is utilizing AngularJS and connected with the backend you'll take some time to explore AngularJS' possibilities on your own.*

## **6.1: Angularify Your App**

#### 6.1.0: Research
1. From [ngBook](https://drive.google.com/a/banno.com/uc?id=0B2ZfYb5gma2ER3gyUzhSR2FZU3M&export=download) read:
	- the Basics of AngularJS
	- Data Binding and Your First AngularJS Web Application
	- Modules
	- Scopes
2. From AngularJS' Developer Guide read:
	- [Data Binding](https://docs.angularjs.org/guide/databinding)
	- [Modules](https://docs.angularjs.org/guide/module) through section 'Creation versus Retrieval'
	- [Dependency Injection](https://docs.angularjs.org/guide/di)

#### 6.1.1: Include Angular Library
1. If you haven't already, install the [AngularJS library](https://www.npmjs.com/package/angular)
2. Include AngularJS in your project by creating an Angular application module
3. Add the `ng-app` parameter to your html tags in `index.html`
4. Also in your `index.html` add the following script tags:
  - one pointing to `angular.js` in `node_modules/angular`
  - one pointing to your module file

**Though you won't be able to see if Angular is working, you should be able to check out the developer tools in your browser and see that no errors have been thrown.**

#### 6.1.2: Include Dependencies
1. Install the [ui-router module](https://www.npmjs.com/package/angular-ui-router)
2. Install the [ngResource module](https://www.npmjs.com/package/angular-resource)
3. Include ui-router and ngResource modules in your project by injecting them as dependencies into your Angular application module and adding the appropriate script tags to your `index.html`
4. Create routes for the following and link each state to it's corresponding HTML partial:
	- Users list
	- User profile
	- Edit user profile
	- Add user profile
5. Update your `index.html` so that it will display your partials
6. Also in `index.html`, update the links in your navigation so that they utilize ui-router's `ui-sref`
7. Update your partials so that any duplicated HTML markup (project headers, navigation, etc.) is removed from each partial.


	*Your project should work and look as it did before you started using Angular. Ensure your partials are in fact partials, not separate HTML pages. If you've created everything properly, your HTML partials should just "plug in to" the tag of your `index.html` that includes the `ui-view` directive.*


**When you believe you have finished unit 6.1 create a pull request**

--------------------------------------------------------------------------------

## **6.2: Hookin' Up and Swappin' Data**

#### 6.2.0: Research
1. From [ngBook](https://drive.google.com/a/banno.com/uc?id=0B2ZfYb5gma2ER3gyUzhSR2FZU3M&export=download) read:
	- Essential AngularJS Extensions through section '$urlRouterProvider'
	- Controllers
	- Introduction to Directives
	- Built-In Directives
	- Directives Explained
	- Services
2. From AngularJS' Developer Guide read:
	- [$resource](https://docs.angularjs.org/api/ngResource/service/%24resource)
	- [Services](https://docs.angularjs.org/guide/services)
	- [Controllers](https://docs.angularjs.org/guide/controller)
	- [Directives](https://docs.angularjs.org/guide/directive)

#### 6.2.1: Create User Actions Service
1. Create an angular service that makes service calls to the server (via a `$resource` object) for the following user actions:
	- create
	- list (all users)
	- update (a specific user, by id)
	- delete (a specific user, by id)
2. Create an angular service that exposes the user actions from your `$resource` object
	- You will more than likely be working with `$promise` objects provided by the `$resouce` object. The `$promise` object can cause a great deal of confusion, so it would beneficial to read Angular's documentation on[`$promise`/`$q`](https://docs.angularjs.org/api/ng/service/$q)

#### 6.2.2: Create View Controllers
1. Create a controller for each view utilizing the service(s) you created to populate each of these views with information from the database.
	- Not all controllers will need every user action, so be sure you are using only what you need to use. With that said, each user action should be utilized in at very least one controller.
2. Add your controllers to their corresponding views
	- There are a number of ways to do this, make sure you choose to do **one** of these ways and stick with it. Otherwise, refactoring and general application modifications can become potentially troublesome down the road.
3. Edit your HTML partials so that you are able to use the functionality of your controllers

*At this point, you should be able to interact with the database using each user action. All data should be "live" and all dummy data should be removed if it hasn't been already.*

#### 6.2.3: Create User Directive
1. Create a directive for each view
	- Ensure that you'll be able to use each directive as if it was it's own HTML tag (i.e. `<user-list> </user-list>`)
2. Replace with your HTML markup or link to your HTML partial with the directives you just created.
 	- Your routes now have a way to use `template` rather than `templateUrl` when attaching your HTML partials. Remember, however, `template` uses HTML markup rather than a URL to your partial.

**When you believe you have finished unit 6.2 create a pull request**

--------------------------------------------------------------------------------

## **6.3: Building into `dist/`**

#### 6.3.0: Research
1. Look over the following gulp-plugins you may need to utilize:
	- [gulp-angular-templatecache](https://www.npmjs.com/package/gulp-angular-templatecache)
	- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
	-	[gulp-clean](https://www.npmjs.com/package/gulp-clean)

#### 6.3.1: Using Gulp to Build into `dist/`
1. Edit or create new gulp tasks so that your 'default' task does the following:
	1. Cleans `dist/` and `temp/`
		- You'll want to be sure your `dist/` folder isn't continually being added to. Rather, you'll want a 'fresh' `dist/` folder every time you rebuild your project
	2. Processes your SASS files into CSS and output to `dist/css/`
	3. Copy your `index.html` to `dist/`
		- You won't need to download a plugin for this as gulp can handle this itself
	4. Create a `temp/templates.js` that caches all your HTML partials
		- this will create the $templateCache service with all of your partials
		- Ensure the plugin uses the right header by defining `TEMPLATE_HEADER`
	5. Concatenates all JS files into `dist/js/app.js`
		- This should include all files from `dist/js` and `temp/`, as well as any of the dependencies you have in a script tag in your `index.html`
	6. Connect `dist/` to `localhost:1820`
	7. Watch for changes in your files
2. Modify your gulp tasks so that the tasks that need to be run synchronously will be run synchronously.
	- Gulp by default runs tasks asynchronously. For some of your tasks, this can cause problems. You can, however, [specify tasks to run only after the completion of others](https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-tasks-in-series.md).

--------------------------------------------------------------------------------

## **6.4: What Can You Do With AngularJS?**
Don't be afraid to take some time to explore all that AngularJS has to offer and spruce up your project. This unit covers the bare bones in how we utilize AngularJS here at Banno, but there's no fun in just doing the basics! Look through [AngularJS' API](https://docs.angularjs.org/api) to get a feel for the immense amounts of functionality it can bring to your project. Need inspiration? Check out [AngularJS' Case Studies](https://www.madewithangular.com/#/) for some examples and ideas.

**When you have explored and implemented all you care to, create a pull request. Be sure to describe what extras you added in the comments so your reviewer knows what to look for**

--------------------------------------------------------------------------------

**[Unit 7: Testing >](../7-testing)**
