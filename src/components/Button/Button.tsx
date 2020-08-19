import React from 'react';
import './Button.css';

interface ButtonProps {
  handleClick: () => void;
}

const Button:React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button className="Button" onClick={props.handleClick}>See more</button>
  );
}

export default Button;
