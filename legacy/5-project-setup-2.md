---
title: 'Unit 5: Project Setup Part II'
---

**[< Unit 4: Basic Javascript](../4-basic-js)**

# Unit 5: Project Setup, Pt. II
*Now that you've got the beginnings of your project created, you'll need to set up some file scaffolding to properly prepare you for AngularJS and the bulk of your project. You will also be creating an editor configuration file that unifies coding conventions between text-editors and IDEs. The chances of running into problems with different text-editors and IDEs are slim on this project, but projects with multiple contributors each using their own means of coding can create a mess, hence the need for an universal editor configuration.*

## 5.1: File Organization

#### 5.1.0: Research
1. From the wiki/ux repository read:
	- [JS Project Practices: Project Setup](../../ProjectPractices#file-organization)
	- [Onboarding-Project File Organization](../file-organization)

You will notice that both of these organizations are similar, though the former is somewhat more intricate than the latter. It is this way because your project does not utilize all components of a 'typical' front-end application created at Banno. The onboarding project's file structure is similar enough it should, however, prepare and ease you into using and understanding the organizational pattern. If used correctly, the structure should also guide you to seeing how you can properly modularize your project. Though the structure may be of little use and significance to you now, setting your project up in such a way will become clear shortly after this unit.

#### 5.1.1: Re-Set Your Project Up
1. Create the appropriate **directories** following Onboarding-Project File Organization
	- Some directories will remain empty until much later in the project.
2. Move your current files into the appropriate directories
3. Edit the following to accommodate for the changes you just made:
	- `gulpfile.js`
	- link tags to css files
	- script tags to javascript files
	- links in your navigation

**When you believe you have finished unit 5.1 create a pull request**

--------------------------------------------------------------------------------

## 5.2: EditorConfig

#### 5.2.0: Research
1. Read:
	- Trey Hunner's (co-creator of EditorConfig) short blog post [Maintaining Consistent Coding Conventions With EditorConfig](http://treyhunner.com/2012/02/editorconfig/)
	- Hong Xu's (co-creator of EditorConfig) short blog post [Use EditorConfig to Maintain Consistent Coding Styles Between Different Editors and IDEs](https://www.topbug.net/blog/2012/03/14/use-editorconfig-to-maintain-consistent-coding-styles-between-different-editors-and-ides/)
	- [EditorConfig Website](http://editorconfig.org/) (through File Format Details)

#### 5.2.1: .editorconfig Setup
1. Download and install the [EditorConfig plugin](http://editorconfig.org/#download) for your text editor or IDE
2. Create an `.editorconfig` file in the appropriate directory
3. Following the [Code Style Guide](../../CodeStyle#file-format), create configurations in your `.editorconfig` file for:
	- All files in your project
	- All files in `src/`

**When you believe you have finished unit 5.2 create a pull request**

--------------------------------------------------------------------------------

**[Unit 6: AngularJS >](../6-angular)**
