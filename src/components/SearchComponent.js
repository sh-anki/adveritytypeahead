import React, { useState } from "react";

import Select from "react-select";
import "./SearchComponent.css";

const SearchComponent = props => {
  const [selectedOption, setSelectedOption] = useState();

  const options = { ...props };

  return (
    <div className="search-wrapper">
      <div className="search-label">
        <label>Choose channel or campaign:</label>
      </div>
      <div className="search-input">
        <Select
          value={selectedOption}
          onChange={value => {
            setSelectedOption(value);
          }}
          options={options.optionsList}
          placeholder={false}
        />
      </div>

      <div className="results-wrapper">
        <div className="click-wrapper">
          <span className="click-label">Clicks:</span>
          <span id="click-val">
            {selectedOption ? selectedOption.clicks : 0}
          </span>
        </div>
        <div className="imp-wrapper">
          <span className="imp-label">Impressions:</span>
          <span id="imp-val">
            {selectedOption ? selectedOption.impressions : 0}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
