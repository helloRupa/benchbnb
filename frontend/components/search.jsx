import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

const Search = ({ fetchBenches, benches }) => (
  <div className="search">
    <BenchMap benches={benches} />
    <BenchIndex fetchBenches={fetchBenches} benches={benches} />
  </div>
);

export default Search;