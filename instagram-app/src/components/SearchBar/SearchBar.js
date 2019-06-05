import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <input
        name="search"
        onChange={this.props.searchFilter}
        placeholder="search..."
        type="text"
        // value={this.props.newSearch}
      />
    );
  }
}

export default SearchBar;

// import React, { Component } from "react";

// export class SearchBar extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" placeholder="Search.." />
//       </div>
//     );
//   }
// }

// export default SearchBar;
