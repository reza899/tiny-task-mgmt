import React from "react";

const useLocalStorage = <T>(key: string) => {
  const [value, setValue] = React.useState<T>(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  });

  const setLocalStorage = (newVal: T) => {
    localStorage.setItem(key, JSON.stringify(newVal));
    setValue(value);
  };

  return { value, setLocalStorage };
};

export default useLocalStorage;
