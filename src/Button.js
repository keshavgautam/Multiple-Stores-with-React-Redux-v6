import React from "react";
import styled from "styled-components";

const Button = styled.button`
  margin-left: 5px;
  box-shadow: ${props => props.theme} 2px 2px 0 0;
  color: ${props => props.theme};
  outline: none;
  padding: 5px;
  border: 1px solid ${props => props.theme};
  border-radius: 2px;
  background: white;
`;

export default Button;
