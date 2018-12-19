# localStorage API Specification

## localStorage
[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) is used by the browser to persist data beyond a page session. In other words, data inputted will continue to be available from the browser after refreshes, restores, new tabs, and new windows.

For us, it's a super easy way to create a **"**database**"** when you don't want to go through the hassle of creating an actual database. But `localStorage` has plenty of real world uses, too, and isn't _just_ a shortcut for the lazy. The UX team, for instance, relies on it as a failsafe to malfunctioning data services (i.e. endpoints, servers).

Because `localStorage` will be used as a **"**database**"**, the [API](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs) built around it should employ [CRUD operations](https://developer.mozilla.org/en-US/docs/Glossary/CRUD).

### CRUD, REST, and APIs
[CRUD](https://developer.mozilla.org/en-US/docs/Glossary/CRUD) is an acronym for `CREATE`, `READ`, `UPDATE`, `DELETE`. These are basic operations that are commonly used when interacting with a database's API. The UX team, however, generally doesn't work with CRUD operations as we generally don't work directly with databases. Most of our data comes from HTTP requests provided by a RESTful API constructed around some URL.

[REST](https://developer.mozilla.org/en-US/docs/Glossary/REST) is an acronym for [RE]presentational [S]tate [T]ransfer and a fancy name for "a [specific] group of design constraints". These design constraints are commonly used to create [RESTful APIs](https://www.restapitutorial.com/) which commonly communicate via [HTTP requests](https://developer.mozilla.org/en-US/docs/Web/HTTP). This is what we generally work with on the UX team.

At this point in time, onboarding projects will utilize CRUD operations for the `localStorage` API as the project directly interfaces with `localStorage` (much like a database). Furthermore, a RESTful API would be overkill for the scope and size of the project.

## The User Model
Stored User objects should match this format:
  ```json
  {
    [_id: String,]
    firstName: String,
    lastName: String,
    phone: String,
    email: String
  }
  ```
*`[]` indicates a property is a hidden field not shown in the user profile.*

## CRUD Operations

### Create
#### `createUser(user)`
Takes one argument, an object.

Adds a single object to storage, regardless of content.

Every object is required to have the property `_id`. If an object is added to storage without this property, it will create an `_id`. If the provided `_id` already exists in storage, it will fail to add the object.

If successful, returns the newly created object (including the `_id`). If failed, returns a string along the lines of `'insert attempt failed.'`
```js
storage.createUser({
  name: 'Name',
});
// Adds an object to storage with the property 'name' and returns the newly created object.
```

### Read
#### `getUser(id)`
Takes one argument: a user ID string to search on.

Returns the first matching result in its entirety. If there are no matching results, returns an empty object.
```js
storage.getUser('59825');
// Returns the first object to match the query (_id value of '59825')
```

#### `getUsers()`
Takes no arguments. Returns the full user list.
```js
storage.getUsers();
// Returns the users list
```

### Update
#### `updateUser(id, newUserData)`
Takes two arguments:
- User ID string to find a user
- object data to update

Updates the first matching object in storage with the provided data. If a value has already been set and is not overwritten by the new data, it will remain intact. If a key has not already been defined, it will now be defined.

Returns the newly updated object in its entirety. If no object could be found, an empty object is returned.
```js
storage.updateUser(
  '59825',
  { department: 'HR' }
)
// Updates the first object to match the query (id value of '59825')
// with the values provided (department: 'HR').
// If the value has not already been set, it is assigned.
// The newly updated object is returned.
```

#### Optional
#### `replaceUser(id, newUser)`
Takes two arguments:
- User ID string
- object data to replace old object with

Removes all object data except User ID and replaces it with the new object data.

Returns the newly defined object.
```js
storage.replaceOne(
  '59825' ,
  { department: 'HR' }
);
// Very similar to updateOne() except that any fields not provided in
// the argument are removed from existing user object.
```

### Delete
#### `deleteUser(id)`
Takes one argument. Can either be a filter on which to search or an `_id` string.

Removes the first matching object from storage. If there is no matching object, none will be removed.

Returns the newly deleted object. If nothing is deleted, an empty object is returned.
```js
storage.deleteUser('59825');
// Deletes the first object to match the query
// and returns the just-deleted object
```

#### `deleteUsers()`
Takes no arguments. Deletes all objects from the users list and returns the users list.
```js
storage.deleteUsers();
// Deletes all entries in the users list
// and returns the users list
```

## Private API Operations
*These operations do not directly work with `localStorage`, nor are they to be called outside the API.*

### `generateId()`
Generates a unique ID value to assign to an object.
Returns the generated ID string.

### `validateUser(user)`
A private function that takes one argument, a User object.
Returns a boolean. `true` if the input matches the user model criteria,
`false` if it does not.
