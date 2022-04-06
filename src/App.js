import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { useState } from 'react';

const auth = getAuth(app)

function App() {

  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }

  return (
    <div className="App">
      <h2>Simple firebase Authentication</h2>
      {/* {condition ? true : false} */}
      {
        user.email ? <button onClick={handleGoogleSignOut}>Sign out</button>
          :
          <button onClick={handleGoogleSignIn}>Google Sign In</button>

      }

      <h3>User Name: {user.displayName}</h3>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
