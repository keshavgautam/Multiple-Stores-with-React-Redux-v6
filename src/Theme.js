import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import themeContext from "./themeContext";
import Button from "./Button";

const Title = styled.p`
  color: ${props => props.theme};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.span`
  border-bottom: 1px dashed ${props => props.theme};
`;

const App = ({ theme, children, dispatch }) => {
  return (
    <div className="App">
      <Title theme={theme}>
        <Text theme={theme}>my mood is feeling {theme}</Text>
        <Button
          onClick={() => {
            dispatch({
              type: "CHANGE_THEME",
              theme:
                "#" +
                [1, 2, 3, 4, 5, 6]
                  .map(_ => "0123456789abcdef"[Math.floor(Math.random() * 16)])
                  .join("")
            });
          }}
          theme={theme}
        >
          change color
        </Button>
      </Title>

      {children}
    </div>
  );
};

export default connect(({ theme }) => ({ theme }))(App);
