type InputProperties = {
  value: string,
  setValue: (e: any) => void
}

function Input({ value, setValue }: InputProperties) {
  return (
    <input
      type="text"
      id="table-search"
      className="block p-2 pl-10 w-80 text-sm
           text-gray-900 bg-gray-50 rounded-lg border
           border-gray-300 focus:ring-blue-500
           focus:border-blue-500 dark:bg-gray-700
           dark:border-gray-600 dark:placeholder-gray-400
           dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search for name"
      value={value || ''}
      onChange={setValue}
    />
  );
}

export default Input