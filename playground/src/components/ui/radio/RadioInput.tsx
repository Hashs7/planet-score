import { FunctionComponent } from 'react';
import styles from './RadioInput.module.scss';

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
  const classes = {
    container: styles['radio-input'],
    element: styles['radio-input__element'],
    label: styles['radio-input__label']
  };
  return (
    <label className={classes.container} {...props}>
      <input
        className={classes.element}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange?.(value)}
      />
      <span className={classes.label}>{label}</span>
    </label>
  );
};

export default RadioInput;
