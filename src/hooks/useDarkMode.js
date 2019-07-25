import React { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"



const useDarkMode = (key, initialValue) => {
// Call `useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled. 
// this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
  const [storedValue, setStoredValue] = useLocalStorage(key, initialValue);
// Manipulating DOM directly so need useEffect for side effect 
useEffect(() => {
// create var to match body html element 
let body = document.querySelector("body");
// Inside useEffect, check to see if the value from `useLocalStorage` is true or false.
console.log(body);
console.log(useLocalStorage);
// If it's true, add the class `dark-mode` to the `body` element.

if (useLocalStorage === true) {
        return (
     body.classList.add("dark-mode");
    );
  } 
  // If it's false, remove the class from the `body` element.
  else {
    return (
    body.classList.add("dark-mode"); )

}, [storedValue]);

// Finally, we need to return something out of here so we can use this in our app. Need to know if dark mode is enabled. 
// need a setter function to toggle dark mode. Forward the value and the setter that were returned out of the `useLocalStorage` call in an array. 
return [storedValue, setStoredValue];

export default useDarkMode;




