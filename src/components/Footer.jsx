import React from "react";
import { clearLocalStorage, saveLocalStorage } from "../redux/slice";
import { useDispatch } from "react-redux";

export const Footer = () => {
  const dispatch = useDispatch();

  const handleClearResult = () => {
    if (window.confirm("Вы уверены, что хотите очистить результат?")) {
      dispatch(clearLocalStorage());
    }
  };

  const handleSaveResult = () => {
    dispatch(saveLocalStorage());
  };

  return (
    <footer className="footer">
      <button onClick={handleSaveResult} className="footer__clearResultBtn">
        Сохранить результат
      </button>
      <button onClick={handleClearResult} className="footer__clearResultBtn">
        Очистить результат
      </button>
      <a
        href="https://vk.com/somenmbrs"
        target="_blank"
        rel="noreferrer"
        className="footer__donate"
      >
        Поддержать разработчика: <span>5536 9140 5405 6043</span>
      </a>
    </footer>
  );
};
