import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';
import FilterForm from './filter_form';

const Search = ({ fetchBenches, benches, updateBounds, updateSeating, benchesObj, filters, showBench }) => (
  <div className="search">
    <BenchMap benches={benches} updateBounds={updateBounds} benchesObj={benchesObj} />
    <FilterForm updateSeating={updateSeating} />
    <BenchIndex fetchBenches={fetchBenches} benches={benches} filters={filters} showBench={showBench} />
  </div>
);

export default Search;