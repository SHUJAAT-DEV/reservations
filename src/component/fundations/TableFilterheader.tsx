import { FaFilter } from 'react-icons/fa';
import Search from './Search';

type TableFilterProperties = {
  handleFilterClickEvent: () => void,
  globalFilter: string,
  setGlobalFilter: (filterValue: any) => void
}

function TableFilterheader({ handleFilterClickEvent, globalFilter, setGlobalFilter }: TableFilterProperties) {
  return (
    <div className='flex flex-row grow space-x-2'>
      <Search
        filter={globalFilter}
        setFilter={setGlobalFilter}
      />
      <div className="text-center flex-auto place-self-center">
        <FaFilter onClick={handleFilterClickEvent} />
      </div>
    </div>
  );
}

export default TableFilterheader;