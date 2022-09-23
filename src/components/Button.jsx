import React from 'react';

const Button = (props) => {
  const { children, operation } = props;
  return <button onClick={operation}>{children}</button>;
};

export default Button;
