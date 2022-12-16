import React from "react";

export const Home = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (localStorage.getItem("value")) {
      setValue(+localStorage.getItem("value"));
    }
  }, []);

  const addPuzaCoin = () => {
    setValue(value + 1);
    localStorage.setItem("value", value + 1);
  };

  const clearResult = () => {
    localStorage.clear("value");
    window.location.reload();
  };

  return (
    <div>
      <div onClick={addPuzaCoin} className="circle">
        PuzaCoin
      </div>
      <h1>У Вас {value} PuzaCoin!</h1>
      <button onClick={clearResult}>Очистить результат</button>
    </div>
  );
};
