import { useMemo, useReducer, useState } from 'react';
import { COLUMNS } from '../../constants/Columns';
import Table from '../fundations/Table';
import MOCK_USER_DATA from "../../mockupdata/serverResponse.json"
import { Reservation } from '../../modal/Reservations';
import Drawer from '../fundations/FilterDrawer';
import Select from '../atoms/Select';
import { areas, shifts, statusList } from '../../constants/Constant';
import DateRange from '../atoms/DateRange';

/**
 * I have created constant array for  status , area and shift. 
 *  
 */
interface FiltergState {
  status: string;
  area: string;
  shift: string;
  startDate: string;
  endDate: string;
}

const initialValues: FiltergState = {
  status: '',
  area: '',
  shift: '',
  startDate: '',
  endDate: ''
}

function User() {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  const [isResetFilter, setIsResetFilter] = useState(false);
  const [filterValues, dispatch] = useReducer(
    (currentValues: any, newValues: any) => ({ ...currentValues, ...newValues }),
    initialValues
  );

  const columns = useMemo(() => COLUMNS, [])
  const reservations = useMemo((): Reservation[] => MOCK_USER_DATA, [])

  function handleFilters(event: any) {
    const { name, value } = event.target;
    dispatch(
      {
        type: "INPUT TEXT",
        field: name,
        payload: value
      })

    setIsResetFilter(false);
  }

  const { status, shift, area, startDate, endDate } = filterValues;

  return (
    <>
      <Table
        columns={columns}
        data={reservations}
        filter={filterValues}
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
            options={statusList}
            handleOnChnange={handleFilters}
            value={status}
          />
          <Select
            label='area'
            options={areas}
            handleOnChnange={handleFilters}
            value={area}
          />
          <Select
            label='shift'
            options={shifts}
            handleOnChnange={handleFilters}
            value={shift}
          />
          <DateRange
            startDate={startDate}
            endDate={endDate}
            handleFilters={handleFilters}
          />
        </Drawer>
      }

    </>
  );
}

export default User;