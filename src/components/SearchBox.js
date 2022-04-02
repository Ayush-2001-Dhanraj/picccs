import React from "react";

class SearchBox extends React.Component {
  render() {
    return (
      <div
        className="ui segment "
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        <form className="ui form">
          <div class="ui icon input">
            <input type="text" placeholder="Image Search..." />
            <i class="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBox;
