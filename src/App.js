import React from "react";
import HeaderComponent from "./components/HeaderComponent";
import SearchComponent from "./components/SearchComponent";

import DataService from "./dataService";

function App() {
  const dataList = DataService();

  return (
    <div>
      <HeaderComponent />
      <SearchComponent optionsList={dataList}  />
    </div>
  );
}

export default App;
