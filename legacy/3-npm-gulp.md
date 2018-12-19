---
title: 'Unit 2: npm & Gulk'
---

**[< Unit 2: HTML5 and CSS](../2-html-css)**

# **Unit 3: npm & Gulp**

## 3.1: npm

#### 3.1.0: Research
1. Watch npm's videos:
	- [What is npm?](https://docs.npmjs.com/getting-started/what-is-npm)
	- [Installing Node.js and updating npm](https://docs.npmjs.com/getting-started/installing-node)
	- [Installing npm packages locally](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
	- [Semantic Versioning and npm](https://docs.npmjs.com/getting-started/semantic-versioning)
2. Read:
	- [.gitignore](http://git-scm.com/docs/gitignore)

#### 3.1.1: Set up npm
1. Download and install the [NodeJS platform](https://nodejs.org/en/download/)
2. Ensure npm has been properly installed by running the command `npm` in the command line
	- npm's usage statement as well as a list of npm commands should shortly follow
3. Create the file `package.json`	in the root directory of your project
4. Add `name` and `version` parameters to your `package.json`

#### 3.1.2: Downloading your first node packages
1. From the command line, install the following package as a **dependency** using npm:
	- [AngularJS](https://www.npmjs.com/package/angular)

*Your project should now contain a `node_modules` directory housing the AngularJS library you just installed. As well, your `package.json` should have created and updated the `dependencies` object with AngularJS' package name and version*

#### 3.1.3: Ignoring your node_modules
1. In the root directory of your project, create the file `.gitignore`
2. Add the `node_modules` directory to your `.gitignore`
	- *Your* repository should only contain *your* code. Though your project depends on other projects/modules/libraries, **it's not your code and should not be apart of your repository**. Anyone using your project can easily get all your project's dependencies utilizing your `project.json`.

**When you believe you have finished unit 3.1 create a pull request**

--------------------------------------------------------------------------------

## **3.2: Gulp**
#### 3.2.0: Research
1. Read:
	- [Gulp: Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
2. Watch:
	- [Gulp - The Basics](https://www.youtube.com/watch?v=dwSLFai8ovQ)

#### 3.2.1: Setting up Gulp
1. Install Gulp globally
2. Download and add Gulp as a dev-dependency to your project
	-	 You should now have two different dependency objects in your `package.json`: `dependencies` and `devDependencies`
3. Create `gulpfile.js` in the your project's root directory and require Gulp in this file
	-	For simplicity sake, we don't have you dive too deep into NodeJS. However, this is one of the few places you *will* be using NodeJS flavored javascript. For your project and this Gulp file, **all** you will need to understand is how NodeJS [loads modules](http://openmymind.net/2012/2/3/Node-Require-and-Exports/) with `var some-module = require(some-module)`. Everything else (including exporting modules) is unnecessary for your project.

#### 3.2.2: Hosting your HTML templates
1. Download the [gulp-connect plugin](https://www.npmjs.com/package/gulp-connect) and save it as a **dev-dependency**
2. Create a "connect" task to host your HTML pages on `http://localhost:1820`
	- Be sure to set `livereload` to `true`. With a "connect" task utilizing [livereload](https://www.npmjs.com/package/gulp-connect#livereload), you eventually will be able to see changes in the browser simply by adding, modifying, and deleting source files. You won't have to restart your server or reload your browser page, that will all happen automatically for you.
3. Create a "reload" task that reloads the server from your "connect" task.
	- Though this task utilizes gulp-connect functionality and works hand-in-hand with your "connect" task, it **needs** to be it's own task. You will need to be able to reload the server without re-running your "connect" task.
4. Create a "watch" task that watches all files in your `src/` directory. When a file is created or modified, your watch task should run the "reload" task you just created.
5. Create a "default" gulp task that runs your connect and watch tasks
	- If no "default" grunt task is defined, you would have to explicitly state which of your tasks you wish to run (i.e. `gulp connect` then `gulp watch` as individual commands). With a "default" task, you can simply run `gulp` and all tasks you've included in the "default" task will run.

*At this point, when you run the command `gulp` in your local repository, your gulp file should be able to pick up any changes made in `src/` and automatically display those changes in the browser.*

**When you believe you have finished unit 3.2 create a pull request**

--------------------------------------------------------------------------------
## 3.3: Gulp-Help

#### 3.3.0: Research
1. Read [gulp-help](https://www.npmjs.com/package/gulp-help)

#### 3.3.1: Setting up Gulp-Help
1. Download and save [Gulp-Help](https://www.npmjs.com/package/gulp-help) as a **dev-dependency**
2. Add `gulp-help` to your original gulp instance
	- The setup to use `gulp-help` is different than it was for `gulp-connect` and `gulp-watch`. Ensure you properly require `gulp-help` **with** `gulp`.
3. Add help text for your gulp tasks
4. Ensure `gulp-help` is properly working by running `gulp help`

**When you believe you have finished unit 3.3 move onto 3.4**

--------------------------------------------------------------------------------

## 3.4: Sass

#### 3.4.0: Research
1. Read:
	-	[SASS Documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) (through 'Syntax')
	- [SASS Guide](http://sass-lang.com/guide)

#### 3.4.1: Setting up SASS
1. Download and save [Gulp-SASS](https://www.npmjs.com/package/gulp-sass) as a **dev-dependency**
2. Create a `.scss` or `.sass` file that utilizes the power of SASS
	- Do not create a SASS file that merely houses regular CSS. You should show you understand how to utilize SASS features regular CSS does not have.
3. Create a gulp task that processes your SASS files into CSS files
	-	Ensure that the task's source will account for both `.sass` and `.scss` files. Though they are both types of SASS files, they are different. Using `.../*.scss` won't pick up `.sass` files, and using `.../*.sass` won't pick up `.scss` files. You may decide to use only one file format, but you should still account for both file types.
4. In your watch task, add a separate call to `gulp.watch()` that watches your SASS files and runs the SASS task you just created if modified
5. Still in your watch task, modify your original call to `gulp.watch()` so that it also watches the directory where your SASS task outputs `.css` files
	- Now, your watch task should modify or create `.css` files when `.scss` or `.sass` files are created or modified. As well, it should pick up the changes made to your `.css` files and run your "reload" task to reload the server with the changes you've made.
6. Ensure the output `.css` files are linked to your HTML pages

**When you believe you have finished unit 3.3 and 3.4 create a pull request**

--------------------------------------------------------------------------------

**[Unit 4: Basic Javascript >](../4-basic-js)**
