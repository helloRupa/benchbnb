import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';
import FilterForm from './filter_form';
import LoadingContainer from './loading_container';

const Search = ({ fetchBenches, benches, updateBounds, updateSeating, benchesObj, filters, isFirst }) => (
  <div className="search">
    {isFirst.current ? <LoadingContainer /> : null}
    <BenchMap benches={benches} updateBounds={updateBounds} benchesObj={benchesObj} />
    <div className="bench-results">
      <FilterForm updateSeating={updateSeating} />
      <BenchIndex fetchBenches={fetchBenches} benches={benches} filters={filters} isFirst={isFirst} />
    </div>
  </div>
);

export default Search;