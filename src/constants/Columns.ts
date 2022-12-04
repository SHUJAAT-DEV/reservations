import moment from "moment"

export const COLUMNS = [
  {
    Header: "Id",
    accessor: "id",
    disableSortBy: true,
    disableFilters: true
  },
  {
    Header: "First Name",
    accessor: "customer.firstName",
    disableFilters: true
  },
  {
    Header: "Last Name",
    accessor: "customer.lastName",
    disableFilters: true
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Shift",
    accessor: "shift",
  },
  {
    Header: "Start Date",
    accessor: "start",
    Cell: (props: any) => {
      return moment(props.value).format('DD/MM/yyyy')
    },
    filter: (rows: any, id: number, filterValue: any) => {
      return rows.filter(
        (row: { values: any[]; }) => {
          return filterValue.length <= 0 ||
            !filterValue || filterValue.includes(moment(row.values[id]).format('yyyy-MM-DD'))
        }
      );
    }
  },
  {
    Header: "End Date",
    accessor: "end",
    Cell: (props: any) => {
      return moment(props.value).format('DD/MM/yyyy')
    },
    filter: (rows: any, id: number, filterValue: any) => {
      return rows.filter(
        (row: { values: any[]; }) => {
          return filterValue.length <= 0 ||
            !filterValue || filterValue.includes(moment(row.values[id]).format('yyyy-MM-DD'))
        }
      );
    }
  },
  {
    Header: "Quantity",
    accessor: "quantity",
    disableFilters: true
  },
  {
    Header: "Area",
    accessor: "area",
  },
  {
    Header: "Guest Notes",
    accessor: "guestNotes",
    disableFilters: true
  },
  {
    Header: "Business Date",
    accessor: "businessDate",
    disableFilters: true,
    Cell: (props: any) => {
      return moment(props.value).format('dd/MM/yyyy')
    }
  }
]

