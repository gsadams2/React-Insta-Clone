import React, { Component } from "react";
import styled from "styled-components";
import "./SearchBar.css";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoHeader = styled.div`
  display: flex;
  align-items: center;
`;

const InstagramH1 = styled.h1`
  padding-left: 10%;
  font-size: 1rem;
`;

const Search = styled.div`
  padding-left: 5%;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

class SearchBar extends Component {
  render() {
    return (
      <Header>
        <LogoHeader>
          <i class="fab fa-instagram" />

          <InstagramH1>Instagram</InstagramH1>
        </LogoHeader>

        <Search>
          <i className="fas fa-search" />
          <input
            name="search"
            onChange={this.props.searchFilter}
            placeholder="search..."
            type="text"
            // value={this.props.newSearch}
          />
        </Search>

        <TopRight>
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <i className="far fa-user" />
        </TopRight>
      </Header>
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
