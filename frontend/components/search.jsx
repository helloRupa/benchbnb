import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';
import FilterForm from './filter_form';

const Search = ({ fetchBenches, benches, updateBounds, updateSeating, benchesObj, filters }) => (
  <div className="search">
    <BenchMap benches={benches} updateBounds={updateBounds} benchesObj={benchesObj} />
    <div className="bench-results">
      <FilterForm updateSeating={updateSeating} />
      <BenchIndex fetchBenches={fetchBenches} benches={benches} filters={filters} />
    </div>
  </div>
);

export default Search;