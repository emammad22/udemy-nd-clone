import { useState } from "react";

import css from "./LanguageChangeCard.module.css";

import closeIcon from "/icons/close.png";

const LanguageChangeCard = (props) => {
  const { setModal } = props;
  const [active, setActive] = useState("English");

  const langs = [
    { lang: "English", code: "en" },
    { lang: "Azerbaijan", code: "az" },
    { lang: "Russia", code: "ru" },
    { lang: "Turkey", code: "tr" },
    { lang: "United States", code: "us" },
    { lang: "Canada", code: "cn" },
    { lang: "Brazilia", code: "br" },
    { lang: "Argentina", code: "ar" },
    { lang: "France", code: "fr" },
    { lang: "Poland", code: "pln" },
    { lang: "Portugal", code: "pr" },
    { lang: "Arabia", code: "aa" },
    { lang: "Greece", code: "gr" },
    { lang: "Georgia", code: "ge" },
    { lang: "Germany", code: "de" },
    { lang: "China", code: "ch" },
    { lang: "India", code: "in" },
    { lang: "Bangladesh", code: "ban" },
    { lang: "Spain", code: "sp" },
  ];

  let changeHandler = (e) => {
    setActive(e.target.innerText || "");
  };

  return (
    <div className={css.modalBC}>
      <div className={css.modal}>
        <div className={css.ttl}>
          <span>Choose a language</span>
          <img
            src={closeIcon}
            alt="close icon"
            className={css.icon}
            onClick={() => setModal(false)}
          />
        </div>
        <div className={css.modalBdy}>
          {langs?.map((lang, id) => {
            return (
              <div
                key={id}
                className={css.langTxt}
                style={
                  active === lang.lang
                    ? {
                        outline: "1px solid var(--gray)",
                        outlineOffset: "0.5rem",
                      }
                    : {}
                }
                onClick={changeHandler}
              >
                {lang.lang}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LanguageChangeCard;
