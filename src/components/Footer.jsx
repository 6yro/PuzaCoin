import React from "react";
import { clearResult } from "../redux/puzaCoinSlice";
import { useDispatch } from "react-redux";

export const Footer = () => {
  const dispatch = useDispatch();

  const clearResultClick = () => {
    if (window.confirm("Вы уверены, что хотите очистить результат?")) {
      dispatch(clearResult());
    }
  };

  return (
    <footer className="footer">
      <button onClick={clearResultClick} className="footer__clearResultBtn">
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
