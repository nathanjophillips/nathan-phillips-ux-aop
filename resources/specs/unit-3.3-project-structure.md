## Unit 3.3: Webpack Setup File Structure

When Webpack is fully set up, your project files should be structured like this:

(Note: only the required files are shown here. Feel free to have other files throughout your project.)

```
  project-root/
  ├── node_modules
  ├── tools
  │   └── jha-design-components-loader.js
  ├── src
  │   ├── assets
  │   │   ├── css
  │   │   │   └── global.css
  │   ├── components
  │   │   ├── intern-app.html
  │   │   ├── starter-component
  │   │   │   ├── starter-component.html
  │   │   │   └── starter-component.css
  │   │   └── ...
  │   ├── index.ejs
  │   ├── index.js
  │   └── ...
  ├── .gitignore
  ├── user-list.html
  ├── new-user.html
  ├── user-profile.html
  ├── edit-user.html
  ├── package.json
  ├── webpack.config.js   
  ├── yarn.lock
  └── ...
```