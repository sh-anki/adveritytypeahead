import React from "react";

import Select from "react-select";

const SearchComponent = props => {
  return (
    <div>
      <div>
        <label>Choose channel or campaign:</label>
      </div>
      <div>
        <Select />
      </div>
    </div>
  );
};

export default SearchComponent;
