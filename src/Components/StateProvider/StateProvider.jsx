import React, { useContext, useState } from "react";

const StateContext = React.createContext();
const StateUpdateContext = React.createContext();
const StateRemoveContext = React.createContext();

export function useContextNew() {
  return useContext(StateContext);
}
export function useContextUpdate() {
  return useContext(StateUpdateContext);
}
export function useContextRemove() {
  return useContext(StateRemoveContext);
}

export function StateProvider({ children }) {
  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState(null);

  function addToBasket(basketItem) {
    // console.log(basketItem)
    setBasket((prevBasket) => [...prevBasket, basketItem]);
  }

  // if (basket.length > 1) {
  //   let quantityCount = {};
  //   basket.map((item)=>item.id).forEach(val=>quantityCount[val] = (quantityCount[val] || 0) + 1);
  //   // basket.findIndex((item)=>item.id === current.id)

  //   const result = basket.reduce((finalArray, current) => {
  //     let obj = finalArray.find((item) => (
  //       item.id === current.id
  //     ));
  //     if (obj) {
  //       // console.log(current)
  //       return finalArray;
  //     }
  //     return finalArray.concat([current]);
  //   }, []);
  //   // console.log(result);

  // }

  function addUser(user) {
    setUser(user);
  }

  function removeFromBasket(basketItem) {
    let index = basketItem.index;
    let newBasket = [...basket];
    if (index >= 0) {
      newBasket.splice(index, 1);
    } else {
      console.warn(
        `Cant remove product (id: ${basketItem.id}) as its not in basket!`
      );
    }
    setBasket([...newBasket]);
  }

  function emptyBasket() {
    setBasket([]);
  }

  return (
    <StateContext.Provider value={{ basket, user }}>
      <StateUpdateContext.Provider
        value={{ addToBasket, addUser, emptyBasket }}
      >
        <StateRemoveContext.Provider value={removeFromBasket}>
          {children}
        </StateRemoveContext.Provider>
      </StateUpdateContext.Provider>
    </StateContext.Provider>
  );
}
