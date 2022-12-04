import { useEffect } from 'react';
import { useTable, useSortBy, useGlobalFilter, useFilters } from 'react-table';
import { Reservation } from '../../modal/Reservations';
import TableFilterheader from './TableFilterheader';


type TableProps = {
  data: Reservation[]
  columns: any[]
  handleFilterClickEvent: () => void,
  filter: any,
  resetFilter: boolean
}

function Table({ columns, data, handleFilterClickEvent, filter, resetFilter }: TableProps) {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
    setAllFilters,
    state,
    setGlobalFilter
  } = useTable({ columns, data }, useFilters, useGlobalFilter, useSortBy)
  const { globalFilter } = state;


  useEffect(() => {
    if (filter !== undefined && filter.type !== undefined) {
      setFilter(filter.type, filter.value)
    }
  }, [filter, setFilter])

  useEffect(() => {
    if (resetFilter) {
      setAllFilters([])
    }
  }, [resetFilter, setAllFilters])

  return (
    <>
      <TableFilterheader
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        handleFilterClickEvent={handleFilterClickEvent}
      />
      <table {...getTableProps()} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="py-3 px-6"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ?
                        <button>▼</button>
                        :
                        <button>▲</button>
                      : null
                    }
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default Table;