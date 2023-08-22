import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import Home from "./Components/Home/Home";
import SharedLayout from "./Components/Shared/SharedLayout";
import Login from "./Components/Login/Login";
import { useContextUpdate } from "./Components/StateProvider/StateProvider";
import { useEffect } from "react";
import { auth } from "./Constants/firebase";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Components/Footer/Footer";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(process.env.REACT_APP_PUBLIC_KEY);

function App() {
  const { addUser } = useContextUpdate();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        addUser(authUser);
      }else {
        addUser(null)
      }
    });
  }, [addUser]);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Elements stripe={promise}><Payment /></Elements>} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
