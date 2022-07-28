import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmitTerm(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      header: {
        Authorization: "Client-ID z55rjx9e_03DI0cPbCFPdwj7kdaKGSEg1WmPllFRxUE",
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submit={this.onSearchSubmitTerm} />
      </div>
    );
  }
}

export default App;
