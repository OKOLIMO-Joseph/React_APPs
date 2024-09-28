import { React, useState, useEffect } from "react";
import { HandleFetch } from "./Api";
import "./App.css";
import { Button, Typography } from "@mui/material";

function Product({ toshow }) {
  const [pro, setPro] = useState([]);
  //  new state for cart
  const [cart, addToCart] = useState([]);

  const [value, setValue] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const getList = async () => {
      try {
        await HandleFetch().then((data) => {
          setPro(data);
          setFiltered(data)
        });
      } catch (err) {
        console.log(err);
      }
    };
    getList();
  }, []);

  const handleSearchResults = () => {
    if (value !== "") {
      return pro.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    } else if (value === "" && pro !== []) {
      return pro;
    }
  };

  useEffect(() => {
    // Search for food
    let filtered = handleSearchResults();
    setFiltered(filtered);
  }, [value]);


  return (
    <div className="pizza">
      <div className="search">
        <input
        className="input"
        placeholder="Search For Your Restaurant"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          
        />
        <Button variant="contained">Search</Button>
      </div>
      <Typography variant="h3" style={{color: "black", marginLeft: 0}}>Recommended For You!!!</Typography>
      <div className="food-grid">
        
        {filtered &&
          filtered.map((item) => {
            return (
              // added an onclick event to each pizza item
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="pizza1"
              >
                <h3>{item.name}</h3>
                <p className="p">{item.decription}</p>
                <p className="p">{item.amount}$</p>
                <button
                  className="btn"
                  onClick={() => {
                    // added a function to add the pizza to the cart
                    alert(`${item.name} has been added to cart`);
                    // spread previous values and append new one
                    addToCart([...cart, item]);
                    console.log(cart);
                  }}
                >
                  Add to Cart
                </button>
              </div>

              
            );
          })}
          
      </div>
      {/* cart window */}
      {/* if show is true */}
      {toshow ? (
        <div className=" cart-cont">
          <div className="cart-list">
            <h1>Cart</h1>
            {/* cart items */}
            {cart && cart.map((item, index) => {
              return (
                <div
                  style={{ backgroundImage: `url(${item.image})` }}
                  className="cart"
                  key={index}
                >
                  <h3>{item.name}</h3>
                  <p>{item.amount}$</p>
                  <button className="btn" onClick={(e)=>{
                    // remove item from cart
                    cart.splice(index, 1);
                    let x = cart;
                    addToCart([...x]);
                  }} >Remove Item</button>
                </div>
              );
            })}
          </div>
          <div className="total">
            <h1>Total</h1>
            <p>{cart.reduce((a, b) => a + b.amount, 0)}$</p>
            <button>Check out</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Product;