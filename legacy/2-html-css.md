---
title: 'Unit 2: HTML5 & CSS'
---

**[< Unit 1: Project Setup, Pt. I](../1-project-setup-1)**

# **Unit 2: Basic HTML & CSS**
*You will be creating the bare bones foundation of your project with HTML5 and CSS. In the proceeding units you will continue to use what you create in this unit to build your entire application. Once you have completed this unit, you should be able to formulate and visualize what your finial project will look and function like.*

## 2.1: HTML5 & CSS

#### 2.1.0: Research
1. From [Clean Code](https://drive.google.com/a/banno.com/file/d/0Bwz8B78G4U8BLVltUDV4R0VPdTg/view) read:
	- Chapter 1: Clean Code
	- Chapter 4: Comments
2. Read [Dive Into HTML5](http://diveintohtml5.info/semantics.html)
3. From Chad Killingsworth's Tech Talks watch:
	- [HTML5 as a Semantic Language](https://plus.google.com/u/0/events/c3pi7rcdnip7iab4cgcc7uuukpg)
	- [CSS - Quirks of the Box Model](https://www.youtube.com/watch?v=sQY7ZLXCZlk&index=2&list=PLCoQ3TMLaKeRUoi_7iMhxtclAJjX25Apg)

#### 2.1.1: Create HTML Pages
*Don't forget to create and work on a new branch for each sub-unit*

*Ensure the structure of each page utilizes the new semantics of HTML5. When in doubt, figure something other than `<div> ... </div>` out.*

1. Create a HTML page with a **user profile**
	- This should display all properties of the [user data model](https://github.com/Banno/ux_onboarding#user). Seeing as you are not connected to a database, hardcode your user profile with dummy data.
2. Create a HTML page with a **users list**
	- This will eventually display a condensed version of each user in the database. Seeing as you are still not connected to a database, hardcode the user list with dummy data.
3. Create a HTML page with a **create new user form**
	- This should allow users to input each property of the user model. As well, you should have some element that will allow you to send this information to the serve once you are connected
4. Create a HTML page with an **edit user form**
	- Though functionally different, this should look very similar to your create new user form. Email address, however, will not be able to be modified.
5. Modify your existing HTML pages by adding a means of navigation between them
	- Each page's navigation should be identical to any other page's.
	- The navigation is not expected to be functional at this point. For now, visual representation is all that is needed.
6. Style each of your pages with some basic CSS
	- You do not need to make your project look incredibly fancy at this point. You will, in a later unit, style your project much more extensively with a CSS library called [SASS](http://sass-lang.com/). This step is only to show you know how to style your HTML pages, not that you are the world's greatest web-page stylist.

**When you believe you have finished unit 2 create a pull request**

--------------------------------------------------------------------------------

**[Unit 3: npm and Gulp >](../3-npm-gulp)**
