# UX Onboarding Project
**By: Nathan Phillips**

## Description
This app allows you to create and edit user profiles. Each profile has an ID, Name, Number, Email Address, and Department.
Users are by default displayed as collapsed cards that can be expanded to show the user's information.

## How to Start
  Run `$ npm install` to add dependencies.
  Run `$ yarn start` to fire up the server
  Open `---` in your browser.

## How to Use

### Create User
- Clicking the add new user button at the top of user list expands the new user form.

- To cancel a new entry, click the same button you clicked to expand the user card. It will collapse it and clear the form.

- Appropriate warnings will notify the end user of improper email or phone formats.

  _Improper format will disable the save button._

### Edit/Delete User
- In case missing the obvious is one of your favorite hobbies, clicking the edit button on an expanded user card will allow you to in fact edit that user. Just as obvious is the fact that clicking the save button will save those changes.

- If you already have an edit in process, all edit and save buttons in other cards will be disabled.

- The save button in the current card will remain disabled while any fields are empty or formatted improperly.

### Sort Users
- Users can be sorted by Last Name, First Name and Department.
- Sort is prioritized by Last Name, First Name and Department, which is also the default.
  _So sorting by Department sorts Department, Last Name within Department, then by First Name Within Matching Last Names_
- Sort can also be done in alphabetical or reverse alphabetical order for each category


