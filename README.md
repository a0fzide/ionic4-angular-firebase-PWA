# ionic4-angular-firebase-PWA
A PWA (Progressive Web App) with Ionic 4, Anuglar, firebase
This project uses @angular/fire for all firebase functions

The project includes the following
- Home Page ( public or anyone can access)
- Login
- SignUp
- Protected Page ( only users who authenticated can access)
- A simple SEO service that sets the Meta tags for each Page, like title, description, etc.

To use first clone the project to your wanted location or dir from your terminal or console
```
git clone https://github.com/paduchurikowsik/ionic4-angular-firebase-PWA.git ionic4PWA
```
Next move into the project folder from your terminal or console
```
cd ./ionic4PWA
```
Next install all the needed packages for the project from your terminal or console
```
npm install --save
```
Next update your firebase config with your respected values in `\src\environments\environment.ts` and `\src\environments\environment.prod.ts` of your project root folder

```
export const environment = {
  ...
  // Fill with your own keys
  firebase: {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
};
```
Next run the following command to run the project from your terminal or console
```
ionic serve
```
This will run your project at `http://localhost:8100/` in your browser
To build the project run 
```
ionic build --prod
```
This will create a production build of the project at `\www` folder in your root of the project.
You can upload or serve the content in the `\www` to the server
