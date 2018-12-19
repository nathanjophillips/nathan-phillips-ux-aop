# Intern Project Glossary

# Unit 1

## Basics

### [Command Line](https://www.codecademy.com/articles/command-line-commands)

A text-based tool that allows a user to interact with a computer. Used for many purposes in programming.

## Git

Git has its own [glossary](https://git-scm.com/docs/gitglossary), too!

### [2FA]()

**Stands for:** _Two-Factor Authentication_

2FA is an extra layer of security used to make sure that people trying to gain access to an online account are who they say they are. It is usually implemented with a verification code sent to a second device to be entered into the primary device which is attempting authentication.

### [Git](https://git-scm.com/about)

The source control management software used at Banno. Used for managing changes to source code.

### [Repository](https://git-scm.com/docs/gitglossary#gitglossary-aiddefrepositoryarepository)

An object database and a collection of references that tracks and manages a body of code as a single project.

### [Branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)

A Git feature that allows a user to make changes to a repository without affecting work done elsewhere.

### [Clone](https://git-scm.com/docs/git-clone)

A git feature that copies a remote repository to your computer.

### [Commit](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)

A single record of changes made to a branch. Git repositories are tracked entirely by commits.

### [Directory]()

In a file system, a listing of files and subdirectories. Also known as a folder.

### [Merge](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)

An operation to update one branch with the changes made in another.

### [Gitignore](https://git-scm.com/docs/gitignore)

A file used by Git to determine which files in a repository to omit from tracking/ignore.

## [GitHub](https://help.github.com/articles/github-glossary/)

### [PR](https://help.github.com/articles/about-pull-requests/)

**Stands for:** _Pull Request_

A summation of changes to be merged from a feature branch into another branch (typically `master`).
A request for review on a Git branch, typically adding a single feature or fix. Usually intended to merge into the master branch, but can be merged into any branch.

### [SSH](https://www.ssh.com/ssh/protocol/)

**Stands for:** _Secure SHell_

A protocol for securing communications between computers. Often used to remotely access servers (such as GitHub's).

## Node

### [Node.js](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)

The JavaScript engine that runs on the command line to power web apps.

## npm/Yarn

### [npm](https://docs.npmjs.com/getting-started/what-is-npm)

**Stands for:** _Node Package Manager_

A software utility that manages code dependencies for projects. May also refer to the npm registry.

### [npm Registry](https://docs.npmjs.com/misc/registry)

The online database of packages that can be installed via NPM.

### [npm Scripts](https://docs.npmjs.com/cli/run-script)

Pre-written command-line scripts that are run via npm in order to speed up development.

### [Dependency]()

Any asset that a project relies on to run correctly. Usually refers to code dependencies listed in a `package.json` file.

### [Dev Dependency]()

Any dependency that is required by the developer but not needed in production. Normal dependencies and dev dependencies are stored separately in `package.json` files.

### [`package.json`](https://docs.npmjs.com/files/package.json)

A descriptive file that holds the code dependencies for Yarn/npm to install as well as project metadata.

### [Yarn](https://alligator.io/js/yarn-package-manager-quick-intro/)

A package manager similar to npm with a few differences. It also uses the npm registry.

### [Lockfile]()

**May refer to:** `package.lock.json` _or_ `yarn.lock`

A metadata file that ensures dependencies are downloaded for maximum compatibility.

# Unit 2

## Misc

### [Polymer](https://www.polymer-project.org/3.0/docs/devguide/feature-overview)

A JavaScript library that enhances the Web Components API and allows developers to create custom HTML elements.

### [Web Components API]()

A browser API that allows for the creation of reusable, interoperable custom elements with more flexible functionality than regular HTML elements.

### [UX](https://www.nngroup.com/articles/definition-user-experience/)

**Stands for:** _User Experience_

The usability an accessibility of an application, including the context in which it is used.

### [Webpack](https://webpack.js.org/concepts/)

A Node.js library that bundles JavaScript modules together for efficient deployment.

## HTML

### [Markup]()

The type of language HTML is. Refers to the declarative/descriptive nature of the language.

### [Persistent Navigation](https://www.clicktale.com/resources/blog/the-3-golden-rules-of-sticky-navigation/)

**Also known as:** _Fixed Navigation_ or _Sticky Navigation_

A type of menu that remains clickable and accessible on the page regardless of where the user scrolls or where the user navigates in a given site or app.

### [Semantic](https://html.com/semantic-markup/)

A type of HTML paradigm that uses descriptive element names to separate content into meaningful, machine-readable sections. This improves search engine optimization (SEO) and accessibility.

### [Static]()

### [Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

**Also known as:** _a11y_

The practice of making web applications usable for people of differing ability. A lot of this practice is done through HTML (but not all of it).

### [Element](https://developer.mozilla.org/en-US/docs/Glossary/Element)

A basic unit of HTML represented as content within a browser.

### [Tag](https://developer.mozilla.org/en-US/docs/Glossary/Tag)

**Usage: HTML tag, opening tag, closing tag**

The markup language/plaintext markers denoting an HTML element. An opening tag might be `<p>` while its closing tag would be `</p>`.

### [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

In HTML, a singular HTML object/element of any kind. It can contain and be contained by nodes. HTML objects are usually considered to be nodes in the context of JavaScript and the DOM.

## CSS

### [Stylesheet]()

A document that determines styles for an HTML page.

### [Styles]()

A set of rules that alter the visual representation of HTML elements.

### [Ruleset]()

A series of properties and their settings encapsulated by a selector.

### [Property]()

The smallest unit in CSS, an individual setting for the visual representation of an element. Example: `color: blue;`

### [Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)

The pattern used to determine which elements will have a ruleset applied to them. Example: `nav .sidebar { ... }`

### [Class Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)

A selector that targets an element by a class.

## JavaScript

### [Dummy Data]()

Data that does not have any real-world origin. Made-up data for the purpose of testing.

### [Vanilla]()

**Usage: Vanilla JavaScript**

Code written in the base language of JavaScript, with no dependency on frameworks, libraries, or syntax processors.

### [Method](https://developer.mozilla.org/en-US/docs/Glossary/Method)

In object-oriented/prototypal programming, a function that is attached to an instance of an object and can be called upon via that object (e.g., `myObject.remove()`)

### [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

**Stands for: Immediately Invoked Function Expression**

A function that is run automatically when it is evaluated instead of being called by another function.

### [Module](https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules)

A JavaScript structure that encapsulates code so that it may be easily imported and used elsewhere.

## Unit 3

### [Linter]()

### [Bundling]()

### [Source Code]()

### [Project Metadata]()

### [Build Code]()

### [Global Installation]()

## Other

### [API](https://www.youtube.com/watch?v=s7wmiS2mSXY)

**Stands for:** Application Programming Interface

A broad term for a layer of public-facing functions or endpoints that allows people or other software to interact with a program in a uniform way.

### [CRUD operations](https://www.codecademy.com/articles/what-is-crud)

**Stands for:** `CREATE`, `READ`, `UPDATE`, `DELETE` operations

Conventional operations typically provided by databases but used as a model in many areas of computing.

### [REST](https://www.codecademy.com/articles/what-is-rest)

**Stands for:** Represenational State Transfer

An architectural style that defines a set of constraints to be used for creating web service.

Typically, a RESTful system is defined by having independently operating server(s) and client(s).
