import React from 'react';

import { SelectProps } from './types';
import './styles.css';

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => (
  <div className="select-block">
    <label htmlFor={name}>{label}</label>
    <select value="" id={name} {...rest}>
      <option value="" disabled hidden>
        Selecione uma opção
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
