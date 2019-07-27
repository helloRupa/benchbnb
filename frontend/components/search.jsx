import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({ fetchBenches, benches, updateBounds, benchesObj, filters }) => (
  <div className="search">
    <BenchMap benches={benches} updateBounds={updateBounds} benchesObj={benchesObj} />
    <BenchIndex fetchBenches={fetchBenches} benches={benches} filters={filters} />
  </div>
);

export default Search;