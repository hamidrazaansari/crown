import React, { createContext, useState } from 'react';
import { ToastContainer , toast} from 'react-toastify';

// Create the context
export const CounterContext = createContext();

// Create a provider component
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

    // Functions to modify data
    const addData = (newData) => {
      // Check for duplicates by comparing `_id`
      const isDuplicate = data.some(item => item._id === newData._id);
      if (isDuplicate) {
        toast.error('This item is already in the cart!');
        return;
      }
      
      // Increment count and add new data if it's not a duplicate
      setCount(count + 1);
      setData([...data, newData]);
    };

  // Function to clear checked data
  const clearCheckedData = () => {
    const checkedCount = data.filter(item => item.checked).length;
    setData(prevData => prevData.filter(item => !item.checked));
    setCount(prevCount => Math.max(prevCount - checkedCount, 0)); // Decrement count by checked items
  };

  // Function to toggle item checked state
  const toggleItemChecked = (id) => {
    setData(prevData =>
      prevData.map(item =>
        item._id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  // Function to remove an item by its id and decrement count
  const removeItemById = (id) => {
    setData(prevData => prevData.filter(item => item._id !== id));
    setCount(prevCount => Math.max(prevCount - 1, 0)); // Decrement count by 1, ensuring it doesn't go below 0
  };

  return (
    <>
    <ToastContainer/>
        <CounterContext.Provider value={{ count, data, addData, clearCheckedData, toggleItemChecked, removeItemById }}>
      {children}
    </CounterContext.Provider>
    </>

  );
};
