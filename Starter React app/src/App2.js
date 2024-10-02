import React from "react";
import { Link } from 'react-router-dom';
import "./components/DropDown.css";



function App() {


  return (
    <div>
              <div id="container">
            <h2>KFC</h2>
            <div id="menu-bar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a>
                        <div id="subs">
                            <div id="sub1">
                                <ul>
                                    <li>Orders</li>
                                    <li>Reservations</li>
                                    <li><a href="https://www.bing.com/ck/a?!&&p=052ab8bdeff3820cJmltdHM9MTcwMDAwNjQwMCZpZ3VpZD0yNWZmM2U1Ni0wYTg5LTY4NzMtMzA2Yi0yZDdiMGIwYjY5ZTAmaW5zaWQ9NTE4Mg&ptn=3&ver=2&hsh=3&fclid=25ff3e56-0a89-6873-306b-2d7b0b0b69e0&psq=themealdb&u=a1aHR0cHM6Ly90aGVtZWFsZGIuY29tLw&ntb=1">Recipe Instructions</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">About</a>
                        <div id="subs">
                            <div id="sub2">
                                <ul>
                                    <li>Mission</li>
                                    <li>Vision</li>
                                    <li>Background</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Contact</a>
                        <div id="subs">
                            <div id="sub3">
                                <ul>
                                    <li><a href="mailto:okolimofficial@gmail.com">Email</a></li>
                                    <li><a href="https://wa.link/lq8txw">Whatsapp</a></li>
                                    <li><a href="https://twitter.com/OkolimoJoseph">Twitter</a></li>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li id="signup"><a href="#">Sign Up / Login</a>
                        <div id="subs">
                            <div id="sub4">
                                <ul>
                                    <li>Sign UP</li>
                                    <li><a href="Login">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div id="footer">
        <footer>The True Definition Of Taste</footer>
        </div>
    </div>
  );
}

export default App;