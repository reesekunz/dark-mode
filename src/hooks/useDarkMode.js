import React { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"



const useDarkMode = (key, initialValue) => {
// Call `useLocalStorage` and pass in the key you want to use to store whether or not dark mode is enabled. 
// this hook returns an array with a value and a setter in an array, exactly like the state hook, so make sure to capture those values in a `const` - `const [someValue, setSomeValue] = useLocalStorage('your key here')`
  const [value, setValue] = useLocalStorage(key, initialValue);

useEffect(() => {

}
)

//   const handleChanges = updatedValue => {
//     setValue(updatedValue);
//   };
//   return [value, setValue, handleChanges];
// };

// const useLocalStorage = (key, initialValue) => {
//   const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//     return item ? JSON.parse(item) : initialValue;
//   });
//   const setValue = value => {
//     setStoredValue(value);
//     window.localStorage.setItem(key, JSON.stringify(value));
//   };
//   return [storedValue, setValue];
// };



export default useDarkMode;




