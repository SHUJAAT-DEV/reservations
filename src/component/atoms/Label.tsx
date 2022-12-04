import { FC } from 'react';

type LabelProperties = {
  label: string
}

const Label: FC<LabelProperties> = ({ label }) =>
(
  <label htmlFor={label} className="block mb-2 text-sm font-medium text-white dark:text-white">Select {label}</label>
);

export default Label