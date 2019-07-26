import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({ fetchBenches, benches, updateBounds }) => (
  <div className="search">
    <BenchMap benches={benches} updateBounds={updateBounds} />
    <BenchIndex fetchBenches={fetchBenches} benches={benches} />
  </div>
);

export default Search;