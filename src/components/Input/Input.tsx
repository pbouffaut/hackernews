import React from 'react';
import './Input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface InputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InputProps> = (props: InputProps) => {
  return (
    <div className="Input-wrapper">
      <FontAwesomeIcon className="Input__icon" icon={faSearch} />
      <input className="Input" type="text" onChange={props.handleChange} placeholder="Type to search" data-testid="input-search"/>
    </div>
  );
}

export default Input;
