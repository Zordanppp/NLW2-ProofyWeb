import React from 'react';

import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import { PageHeaderProps } from './types';

import './styles.css';

const PageHeader: React.FC<PageHeaderProps> = ({ title, ...rest }) => (
  <header className="page-header">
    <div className="top-bar-container">
      <Link to="/">
        <img src={backIcon} alt="Voltar" />
      </Link>
      <img src={logoImg} alt="Proffy" />
    </div>

    <div className="header-content">
      <strong>{title}</strong>
      {rest.children}
      {rest.description && <p>{rest.description}</p>}
    </div>
  </header>
);

export default PageHeader;
