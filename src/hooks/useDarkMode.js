import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const useDarkMode = () => {
  // Call `useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled.
  // this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
  const [darkMode, setDarkMode] = useLocalStorage("darkMode");
  // Manipulating DOM directly so need useEffect for side effect
  useEffect(() => {
    // Inside useEffect, check to see if the value from `useLocalStorage` is true or false.

    // If it's true, add the class `dark-mode` to the `body` element.
    if (localStorage.getItem("darkMode") === "true") {
      document.body.classList.add("dark-mode");
    } else document.body.classList.remove("dark-mode");
  }, [darkMode]);

  console.log("dark mode", darkMode);
  //console.log("local storage", localStorage)
  //console.log(localStorage.getItem)

  // Finally, we need to return something out of here so we can use this in our app. Need to know if dark mode is enabled.
  // need a setter function to toggle dark mode. Forward the value and the setter that were returned out of the `useLocalStorage` call in an array.

  return [darkMode, setDarkMode];
};

export default useDarkMode;
