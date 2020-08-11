import React from 'react';

import { TextAreaProps } from './types';
import './styles.css';

const TextArea: React.FC<TextAreaProps> = ({ label, name, ...rest }) => (
  <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...rest} />
  </div>
);

export default TextArea;
