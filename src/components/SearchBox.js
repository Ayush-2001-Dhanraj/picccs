import React from "react";

class SearchBox extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment " style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui icon input container">
            <input
              type="text"
              tabIndex="1"
              placeholder="Image Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
