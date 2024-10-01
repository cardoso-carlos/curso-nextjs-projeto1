import P from 'prop-types';

import React from 'react';
import './styles.css';

export const TextInput = ({ actionFn, inputValue }) => {
  return <input className="text-input" type="text" onChange={actionFn} value={inputValue} placeholder="Type your search" />;
};

TextInput.propTypes = {
  inputValue: P.string.isRequired,
  actionFn: P.func.isRequired,
};
