import React from "react";
import { Paper, TextField } from "@material-ui/core";
import "../App.css";
class SearchBar extends React.Component {
  state = {
    term: "",
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onFormSubmit } = this.props;
    const { term } = this.state;
    onFormSubmit(term);
  };

  render() {
    return (
      <div>
        <Paper elevation={6} style={{ padding: "15px" }}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="What are you searching for?"
              fullWidth
              onChange={this.handleChange}
              value={this.state.term}
            />
          </form>
        </Paper>
      </div>
    );
  }
}

export default SearchBar;


