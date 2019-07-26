import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({ fetchBenches, benches, updateBounds, bounds, benchesObj }) => (
  <div className="search">
    <BenchMap benches={benches} updateBounds={updateBounds} benchesObj={benchesObj} />
    <BenchIndex fetchBenches={fetchBenches} benches={benches} bounds={bounds} />
  </div>
);

export default Search;