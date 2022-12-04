import React, { useMemo, useState } from 'react';
import { COLUMNS } from '../../constants/Columns';
import Table from '../fundations/Table';
import MOCK_USER_DATA from "../../mockupdata/serverResponse.json"
import { Reservation } from '../../modal/Reservations';
import Drawer from '../fundations/FilterDrawer';
import Select from '../atoms/Select';
import { areas, shifts, status } from '../../constants/Constant';
import moment from 'moment';
/**
 * I have created constant array for  status , area and shift. 
 * 
 * @returns 
 * 
 */
function User() {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [isResetFilter, setIsResetFilter] = useState(false);
  const [filterValue, setFilterValue] = useState({});
  const [startDate, setStartDate] = useState("");
  const [endDate, setendDate] = useState("");

  const columns = useMemo(() => COLUMNS, [])
  const reservations = useMemo((): Reservation[] => MOCK_USER_DATA, [])

  function handleFilters(type: string, event: any) {
    setFilterValue({ type: type, value: event.target.value })
    setIsResetFilter(false);
  }
  function handleStartDate(type: string, event: any) {
    const date = moment(event.target.value).format('yyyy-MM-DD')
    if (type === "start") {
      setStartDate(date)
    } else {
      setendDate(date)
    }
    setFilterValue({ type: type, value: date })
    setIsResetFilter(false);
  }

  return (
    <>
      <Table
        columns={columns}
        data={reservations}
        filter={filterValue}
        handleFilterClickEvent={() => setIsFilterVisible(true)}
        resetFilter={isResetFilter}
      />

      {
        isFilterVisible &&
        <Drawer
          isOpen={isFilterVisible}
          setIsOpen={(isOpen) => setIsFilterVisible(isOpen)}
          title="Filter Reservations"
          handleReset={(isReset) => setIsResetFilter(isReset)}
        >
          <Select
            label='status'
            options={status}
            handleOnChnange={(e) => handleFilters("status", e)}
          />
          <Select
            label='area'
            options={areas}
            handleOnChnange={(e) => handleFilters("area", e)}
          />
          <Select
            label='shift'
            options={shifts}
            handleOnChnange={(e) => handleFilters("shift", e)}
          />


          <label htmlFor="shift" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date range</label>
          <div className="flex items-center">
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input name="start" value={startDate} onChange={(e) => handleStartDate("start", e)} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
            </div>
            <span className="mx-4 text-white">to</span>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
              </div>
              <input name="end" value={endDate} onChange={(e) => handleStartDate("end", e)} type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end" />
            </div>
          </div>

        </Drawer>
      }

    </>
  );
}

export default User;