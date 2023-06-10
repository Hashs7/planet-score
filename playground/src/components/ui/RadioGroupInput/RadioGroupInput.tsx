import styles from './RadioGroupInput.module.scss';
import cn from 'classnames';

const RadioGroupInput = ({ label, children, className, horizontal, ...props }) => {
  const classes = {
    container: cn(styles['radio-group-input'], className, {
      [styles['--horizontal']]: horizontal
    })
  };

  return (
    <fieldset {...props} className={classes.container}>
      <legend>{label}</legend>
      {children}
    </fieldset>
  );
};

export default RadioGroupInput;
