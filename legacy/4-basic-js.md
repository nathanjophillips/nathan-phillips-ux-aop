---
title: 'Unit 4: Basic JavaScript'
---

**[< Unit 3: npm and Gulp](../3-npm-gulp)**

# **Unit 4: Basic JavaScript**

## 4.1: Basic Minimizing/Expanding Functionality

#### 4.1.0: Research
1. From [Clean Code](https://drive.google.com/a/banno.com/file/d/0Bwz8B78G4U8BLVltUDV4R0VPdTg/view) read:
	- Chapter 2: Meaningful Names
	- Chapter 3: Functions
	- Chapter 5: Formatting
2. From 'You Don't Know JS' read:
	- [Up & Going (Chapter 2): Intro to JS](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20&%20going/ch2.md)
3. From Chad Killingsworth's Tech Talks watch:
	- [Intro to Javascript Types](https://www.youtube.com/watch?v=VLeD9fS3y1U&index=3&list=PLCoQ3TMLaKeRUoi_7iMhxtclAJjX25Apg)
	- [Javascript Scopes](https://www.youtube.com/watch?v=NA3LqD_gSrk&index=6&list=PLCoQ3TMLaKeRUoi_7iMhxtclAJjX25Apg)

#### 4.1.1: Adding Buttons
1. Add a button(s) to your user profile page that will initiate minimizing and expanding functionality
	- Using two buttons (one button for minimizing, one for expanding) is absolutely fine. If you are able or feel up to the challenge, create one button that will minimize the profile when it's fully expanded as well as expand the profile when it's minimized.
2. Style your button(s) to reflect the functionality to be implemented
	- Even though people won't actually be using your application, it's still important to give as many contextual clues as possible when dealing with the functionality of an object. The correct html element, verbiage, colors, size, and placement all play vital roles in how users perceive and expect an object to behave. Just because *you* understand what *you've* created does not mean *everyone else will*.

#### 4.1.2: Giving Buttons Functionality
1. Create a function that minimizes the profile view
	- The definition of 'minimized' is left to your desecration. Some information should clearly be hidden from view (i.e. phone and email) while some information continues to be shown (i.e. first inital and last name)
2. Create a function that expands the profile view
  - The expanded profile view should show all variables of the user data model.

**When you believe you have finished unit 4.1 create a pull request**

--------------------------------------------------------------------------------

## 4.2: JSHint

#### 4.2.0: Research
1. [About JSHint](http://jshint.com/about/)

#### 4.2.1: Create a JSHint gulp task
1. Download and add [Gulp-JSHint](https://www.npmjs.com/package/gulp-jshint) as a **dev-dependency**
2. Create a `.jshintrc` file to configure JSHint for your project
	- [Banno's Sample .jshintrc](https://github.com/Banno/generator-banno/blob/master/app/templates/_jshintrc) is a great starting point. You can modify the template to make your configuration slightly more project specific, but you shouldn't have to delete or modify anything you use from the sample file.
3. Require Gulp-JSHint in your `gulpfile.js` and create a gulp task that runs JSHint over all your javascript
	- You can (and should) use reporters other than `default`. [JSHint-stylish](https://www.npmjs.com/package/jshint-stylish) is a decent reporter that color codes and discern the difference between errors and warnings where the `default` reporter does not.
4. Add your JSHint task to your default task
5. In your watch task, add a separate call to `gulp.watch()` that watches your javascript files and runs the JSHint task if modified.
6. Run gulp to see JSHint in action. Modify your javascript files so that JSHint finds no errors and warnings.
	- There will be some cases where JSHint will throw warnings that aren't helpful. Though you shouldn't just add to your `.jshintrc` file every time you are unsure how to resolve a warning, there are times when you will need to. For instance, global variables that are not explicitly defined in your javascript files will throw warnings (i.e. `'document' is not defined`) even though they're defined *somewhere* beyond the scope of your files. This would be a good instance in which you *would* want to modify your `.jshintrc` file.

**When you believe you have finished unit 4.2 create a pull request**

--------------------------------------------------------------------------------

**[Unit 5: Project Setup, Pt. II >](../5-project-setup-2)**
