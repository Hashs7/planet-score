import { FunctionComponent } from 'react';
import './RadioInput.scss';

interface RadioInputProps {
  label: string;
  value: string;
  name: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const RadioInput: FunctionComponent<RadioInputProps> = ({
  label,
  value,
  name,
  checked = false,
  onChange,
  ...props
}) => {
  return (
    <label className="radio-input" {...props}>
      <input
        className="radio-input__element"
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <span className="radio-input__label">{label}</span>
    </label>
  );
};

export default RadioInput;
