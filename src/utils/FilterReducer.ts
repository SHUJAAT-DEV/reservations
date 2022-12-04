import moment from "moment";

const filterReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INPUT TEXT":
      return {
        ...state,
        [action.field]: action.payload,
      }
    case "DATE":
      return {
        ...state,
        [action.field]: moment(action.payload).format('yyyy-MM-DD'),
      }
    default:
      return state
  }
}

export default filterReducer;