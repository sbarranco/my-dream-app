# My Dream App

## Project Structure and Setup

### Setup

1. **Install Dependencies**: Run the following command to install the necessary dependencies for the project.

```bash
npm install
```

### Project Structure

```
my-dream-app/
├── projects/
│   ├── shell/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── home/
│   │   │   │   ├── menu/
│   │   │   │   ├── card/
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.module.ts
│   │   │   │   ├── app.routes.ts
│   │   │   ├── assets/
│   │   │   ├── index.html
│   │   ├── webpack.config.js
│   ├── auth/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── login/
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.module.ts
│   │   │   ├── assets/
│   │   │   ├── index.html
│   │   ├── webpack.config.js
│   ├── dreams/
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── dreams-form/
│   │   │   │   ├── dreams-list/
│   │   │   │   ├── dreams.service.ts
│   │   │   │   ├── app.component.ts
│   │   │   │   ├── app.module.ts
│   │   │   ├── assets/
│   │   │   ├── index.html
│   │   ├── webpack.config.js
├── angular.json
├── package.json
```

### Module Federation configuration and micro frontend launch instructions.

Module Federation Configuration
Each micro frontend (shell, auth, dreams) is configured with Module Federation to enable dynamic loading of modules at runtime.

Shell Webpack Configuration

```javascript
const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'shell',
  remotes: {
    auth: 'auth@http://localhost:3001/remoteEntry.js',
    dreams: 'dreams@http://localhost:3002/remoteEntry.js',
  },
  exposes: {
    './Component': './projects/shell/src/app/app.component.ts',
  },
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
});
```

### Micro Frontend Launch Instructions

Run the Shell Application:

```
cd projects/shell
ng serve --port 4200
```

Run the Auth Application:

```
cd ../auth
ng serve --port 4201
```

Run the Dreams Application:

```
cd ../auth
ng serve --port 4201
```

### Description of Implemented Functions

#### Shell Application

HomeComponent: Displays the home page with a welcome message and options based on user authentication.
MenuComponent: Displays the navigation menu with dynamic items based on user authentication.
CardComponent: Reusable component to display card information.

#### Auth Application

LoginComponent: Handles user login and updates the authentication status.
AuthService: Manages user authentication and notifies other services about authentication changes.

#### Dreams Application

DreamsFormComponent: Provides a form for users to submit their dreams.
DreamsListComponent: Displays a list of submitted dreams.
DreamsService: Manages the storage and retrieval of dreams.

### Full Instructions for Building and Running the Application

1. Install Dependencies: Run the following command to install the necessary dependencies for the project.
   ```npm install ````
2. Build the Applications:

```
cd projects/shell
ng build

cd ../auth
ng build

cd ../dreams
ng build
```

3. Run the Applications:

```
cd projects/shell
ng serve --port 4200

cd ../auth
ng serve --port 4201

cd ../dreams
ng serve --port 4202
```

4. Access the Applications:

Shell Application: http://localhost:3000

Auth Application: http://localhost:3001

Dreams Application: http://localhost:3002
