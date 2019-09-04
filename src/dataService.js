import { useState, useEffect } from "react";

import axios from "axios";
import _ from "lodash";

const DataService = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5cd93aeb300000b721c014b0")
      .then(response => {
        return response.data;
      })
      .then(transformData);

    function transformData(str) {
      let data = str.split("\n").map(i => i.split(","));
      let headers = data.shift();
      const [dimension1, dimension2] = [...headers];

      let output = data.map(item => {
        let obj = {};
        headers.map((h, i) => (obj[headers[i]] = item[i]));
        return obj;
      });
      /* utility to convert clicks and impressions values to integer */
      _.each(output, item => {
        item.clicks = parseInt(item.clicks);
        item.impressions = parseInt(item.impressions);
      });

      let finalDataList = _.concat(
        groupAndSumData(output, dimension1),
        groupAndSumData(output, dimension2)
      );
      setResults(finalDataList);
    }

    /* helper function to group and aggregate data */

    function groupAndSumData(data, key) {
      let aggregatedData = _(data)
        .groupBy(key)
        .map((key, id) => ({
          label: id,
          value: id,
          clicks: _.sumBy(key, "clicks"),
          impressions: _.sumBy(key, "impressions")
        }))
        .value();

      return aggregatedData;
    }
  }, []);

  return results;
};

export default DataService;
