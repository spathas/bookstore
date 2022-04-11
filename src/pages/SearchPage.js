import { Profiler } from 'react';

//CUSTOM COMPONENTS
import SearchBar from '../components/search/SearchBar';
import BookCardList from '../components/books/BookCardList';

function SearchPage() {
  const logProfiler = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) =>
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });

  return (
    <Profiler id='search page' onRender={logProfiler}>
      <SearchBar />
      <BookCardList />
    </Profiler>
  );
}

export default SearchPage;
