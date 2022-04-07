## Simple firebase authentication

 #### Steps to use firebase:
 * 1. Create a project on console.firebase.google.com.
 * 2. npm install firebase on project
 * 3. Register web app in firebase setting.
 * 4. copy firebase init with config from firebase project settings into a file firebase.init.js
 * 5. export default app from firebase.init.js file.
 * 6. import {getAuth} from "firebase/auth" and create const auth = getAuth(app) in App.js
 * 7. import app  firebase init.js into your app.js.
 * 8. Turn on google authentication (firebase >authentication > enable google sign-in)
 * 9. create google provider.
 * 10. use signInWithPopup and pass auth and provider.
 * 11. handle .then(if success) and catch(if error).


#### solved (ReactDOM.render) warning.
step:1 Replace
* import ReactDom from 'react-dom';  ===>  import {createRoot} from "react-dom/client"

step:2 Replace
* ReactDom.render(.......detElementById('root'))  ===>

 const container=document.getElementById('root');
 const root=createRoot(container);
 root.render(<React.StrictMode>
  = Here input App Route
 </React.StrictMode>);
