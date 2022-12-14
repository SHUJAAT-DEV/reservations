import Input from '../atoms/Input';

type SearchType = {
  filter: string,
  setFilter: Function
}

function Search({ filter, setFilter }: SearchType) {
  return (
    <div className="pb-4 pt-4 bg-white ">
      <label htmlFor="table-search" className="sr-only">Search</label>
      <div className="relative mt-1">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <Input
          value={filter}
          setValue={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;