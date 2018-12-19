---
title: 'Unit 1: Project Setup'
---

# Unit 1: Project Setup, Pt. I
*To start off the module, you will need to get a few things in order to make the rest of your process go smoothly. Utilizing git and Github will allow you to experiment without penalty, keep a running record of modifications (and the ability to revert these modifications), and allow for others to get a copy of your project in the easiest way possible.*

## 1.1: Version Control, Git, and Github

#### 1.1.0: Research
1. From the [Pro Git book](https://progit2.s3.amazonaws.com/en/2015-07-14-1d425/progit-en.584.pdf) read:
	1. [Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
	  - 1.1 [About Version Control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control)
	  - 1.3 [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
	  - 1.4 [The Command Line](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line)
	  - 1.5 [Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
	  - 1.6 [First-Time Git Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)
	  - 1.7 [Getting Help](https://git-scm.com/book/en/v2/Getting-Started-Getting-Help)
  2. [Git Basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
	  - 2.1 [Getting a Git Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)
	  - 2.2 [Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
	  - 2.3 [Viewing the Commit History](https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History)
	  - 2.4 [Undoing Things](https://git-scm.com/book/en/v2/Git-Basics-Undoing-Things)
	  - 2.5 [Working with Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)
  3. [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
	  - 3.1 [Branches in a Nutshell](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell)
	  - 3.2 [Basic Branching and Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)
2. From Code School and GitHub go through the git tutorial [tryGit](https://try.github.io/levels/1/challenges/1)

#### 1.1.1: Creating Your Project Repository
1. [Download git](https://git-scm.com/downloads)
2. [Create a Github account](https://github.com/join)
3. Follow [GitHub Help's Generating SSH keys](https://help.github.com/articles/generating-an-ssh-key/) article to set up your account's SSH keys
	- "SSH keys are a way to identify trusted computers, without involving passwords" and make interacting with GitHub much more convenient.
4. Set up [Two-Factor Authentication](https://help.github.com/articles/about-two-factor-authentication/) for your GitHub account
	- It does not matter whether you authenticate via a TOTP mobile app or via text message, it just comes down to personal preference.
5. On Github, [create a new repository](https://github.com/new) for your project.
	- Name your repository something along the lines of "firstName-lastName-js-iop"
	- Check the box next to "Initialize this repository with a README.md"
6. From your newly created repository, navigate to settings and add your supervisor as a collaborator
	- The settings button looks like a wrench and screw-driver forming a 'X' on the right side of the page
	- You will likely add more collaborators over the corse of your project. This doesn't mean they'll actually be contributing code (though they would be able to), it just allows them to review and merge your pull request.
7. Create a local version of your repository by cloning it
	- Though the command line may be the most reliable way to work with git, [Atlassian's SourceTree](https://www.sourcetreeapp.com/) provides a visual component to git the command line lacks. It all comes down to preference (JS team members use both the command line and SourceTree), though it may be useful to be familiar with both.

#### 1.1.2: Editing and Saving Changes to Your Repository
1. Create and checkout a new branch. Name the branch "repo-setup".
2. Open your project in a text editor
	- If you have not found a text editor that you like, see the resources page for a list of recommendations
3. Edit your README.md to contain the sections: **title**, **description**, **how to use**, and **dependencies**.
	- As you progress through the project, please update your README to reflect changes in your project. **Strive to have a through, well organized, and concise README for your project at all times.**
	- Use this [mark down (.md) cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to help format and organize your README file if you are unfamiliar with [markdown](http://daringfireball.net/projects/markdown/).
4. Stage, commit, and push your changes to your README to git.

> ##### Now that you can stage, commit, and push your changes it should be noted that you should NEVER commit (and consequently push) sensitive data to your repository. Anyone can see your repository, therefore, anyone could get to your sensitive information.

#### 1.1.3: Creating Pull Requests, Merging Into Master, Pulling Changes
1. Open your repository on Github and switch to your `repo-setup` branch
2. To create a pull request, click the button to the right of the branch dropdown
3. Base should be `master` and comparing should be `repo-setup`
4. Take some time to check over the changes you've made.
	- Although the changes you have made to your README are somewhat trivial, you will absolutely want to look over and inspect changes in proceeding pull request. **The last thing you want to do is merge a broken branch into your `master` branch.**
5. Click the green "Create pull request" button.
6. Add comments as needed
7. Assign someone to your pull request
	- Click the 'Assignee' options to assign people to your pull request. If you are unsure who they are, just ask in the UX Interns room who will be checking pull requests.
8. GitHub will notify reviewers when you request a review. If you want, you can also post a link to the PR in the JS Interns Slack channel.
9. Once the reviewer has checked over your pull request, they will either leave a comment about modifications that need to be made or merge your `repo-setup` branch into your `master` branch.
10. On the command line, navigate to your project repository
11. Checkout the `master` branch and pull it's newest version from the git server

**Your `master` branch should now reflect the changes you made in your `repo-setup` branch**

--------------------------------------------------------------------------------

**[Unit 2: HTML5 and CSS >](../2-html-css)**
