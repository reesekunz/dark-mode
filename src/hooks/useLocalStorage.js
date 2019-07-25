import { useState } from "react";

// to set something to localStorage, we need a key (must be a string) and a value (can be anything)
// to retrieve something from localStorage, we need the key. To update something in localStorage, you use the same method as adding something new, and it will just replace the old key/value pair in localStorage.
const useLocalStorage = (key, initialValue) => {
  // set up state property called storedValue
  const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue - this is a ternary operator (if/else)
    //(need to use JSON to pass in arrays or objects, but use regular JS to retrieve it)

    return item ? JSON.parse(item) : initialValue;
  });

  // In `setValue`, set the `value` to localStorage using the `key` that was passed into the hook itself
  // Also, update the state of `storedValue` with `value` as well

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  // return `storedValue` and 'setValue'(above functions) from this hook in an array:
  return [storedValue, setValue];
};

export default useLocalStorage;
