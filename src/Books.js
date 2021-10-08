import React from "react";
import { connect } from "react-redux";
// import BookContext from "./bookContext";
import ThemeContext from "./themeContext";
import styled from "styled-components";
import Button from "./Button";

const Input = styled.input`
  padding: 5px;
  border-radius: 2px;
  outline: none;
  border: 1px solid ${props => props.theme};
  background-color: ${props => props.theme};
  color: white;
`;

const B = styled.div`
  color: ${props => props.theme};
  margin: 0.5rem 0;
  font-family: Georgia;
`;

const Books = ({ books }) => {
  return (
    <div>
      {books.map((book, idx) => (
        <Book key={idx} book={book} />
      ))}
      <AddBook />
    </div>
  );
};

const BookUI = ({ book, theme }) => <B theme={theme}>{book}</B>;
const Book = connect(
  ({ theme }) => ({ theme }),
  null,
  null,
  { context: ThemeContext }
)(BookUI);

class AddBookUI extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { theme } = this.props;
    return (
      <div style={{ marginTop: ".5rem" }}>
        <Input
          ref={r => {
            this.input = r;
          }}
          theme={theme}
        />
        <Button
          onClick={() => {
            this.props.dispatch({
              type: "ADD_BOOK",
              book: this.input.value
            });
          }}
          theme={theme}
        >
          add book
        </Button>
      </div>
    );
  }
}

const AddBook = connect(
  ({ theme }) => ({ theme }),
  null,
  null,
  { context: ThemeContext }
)(connect()(AddBookUI));

export default connect(({ books }) => ({ books }))(Books);
