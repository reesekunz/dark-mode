import React { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"



const useDarkMode = (key, initialValue) => {
// Call `useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled. 
// this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);
// Manipulating DOM directly so need useEffect for side effect 
useEffect(() => {
let body = document.querySelector(".body");
// Inside useEffect, check to see if the value from `useLocalStorage` is true or false.

// If it's true, add the class `dark-mode` to the `body` element.

if (useLocalStorage === true) {
    return (
     body.classList.add("dark-mode");
    );
  } 
  // If it's false, remove the class from the `body` element.
  else {
    return (
    body.classList.add("dark-mode");

    ); [storedValue]);}


export default useDarkMode;




