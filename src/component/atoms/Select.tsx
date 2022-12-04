
type SelectProperties = {
  options: any[],
  label: string,
  handleOnChnange: (e: any) => void
}

function Select({ options, label, handleOnChnange }: SelectProperties) {
  return (
    <>
      <label htmlFor={label} className="block mb-2 text-sm font-medium text-white dark:text-white">Select {label}</label>
      <select id={label}
        onChange={handleOnChnange}
        className="block w-full p-2 mb-6 text-sm text-white border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a {label}</option>
        {
          options && options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))
        }
      </select>
    </>
  );
}

export default Select;