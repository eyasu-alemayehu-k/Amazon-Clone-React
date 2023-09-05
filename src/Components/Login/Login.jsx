import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useState } from "react";
import { auth } from "../../Constants/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // console.log(password)
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));
    setEmail("");
    setPassword("");
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((error) => alert(error.message));

    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <div className="login__image">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="amazon logo dark"
          />
        </Link>
      </div>
      <div className="login__container">
        <div className="login__title">
          <p>Sign in</p>
        </div>
        <form action="">
          <div className="login__input">
            <p htmlFor="email">Email</p>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <p htmlFor="password">Password</p>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
          <p className="login__conditions">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
          <button
            type="submit"
            className="btn--create_account"
            onClick={register}
          >
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
