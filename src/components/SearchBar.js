import React from "react";
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
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="What are you searching for?"
              aria-describedby="button-addon1"
              className="form-control border-0 bg-light"
              onChange={this.handleChange}
              value={this.state.term}
            />
            <button
              id="button-addon1"
              type="submit"
              className="btn btn-link text-primary"
            >
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
