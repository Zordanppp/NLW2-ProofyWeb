import React from 'react';

import whatsappIcon from 'assets/images/icons/whatsapp.svg';

import api from 'services/api';

import { TeacherItemProps } from './types';

import './styles.css';

const TeacherItem: React.FC<TeacherItemProps> = ({
  id,
  name,
  avatar,
  bio,
  cost,
  subject,
  whatsapp,
}) => {
  async function createNewConnection(): Promise<void> {
    await api.post('connections', {
      user_id: id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio} </p>

      <footer>
        <p>
          Preço/hora
          <strong>
            R$
            {cost}
          </strong>
        </p>
        <a onClick={createNewConnection} href={`https://wa.me/${whatsapp}`}>
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
