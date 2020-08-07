import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import { TeacherItemProps } from "./types";

import "./styles.css";

const TeacherItem: React.FC<TeacherItemProps> = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu9uP_2n0dZPhhx4rjPx0CICXQrfLldBXwqYN0C0=s83-c-mo"
          alt="Daniel Zordan"
        />
        <div>
          <strong>Daniel Zordan</strong>
          <span>ReactJS</span>
        </div>
      </header>

      <p>
        Esse aqui é o primeiro parágrafo e é isso ai mesmo.
        <br /> <br />
        Esse aqui é o segundo parágrado e ele precisa ser maior porque é a
        descrição do card com muitas coisas sobre o cara que da no card.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
