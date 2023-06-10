import styles from './RadioInput.module.scss';

const RadioInput = ({ label, value, name, checked = false, onChange, ...props }) => {
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
