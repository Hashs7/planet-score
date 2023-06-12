import { FunctionComponent, ReactNode } from 'react';
import cn from 'classnames';
import styles from './RadioGroupInput.module.scss';

interface RadioGroupInputProps {
  label: string;
  children: ReactNode;
  className?: string;
  horizontal?: boolean;
}

const RadioGroupInput: FunctionComponent<RadioGroupInputProps> = ({
  label,
  children,
  className,
  horizontal,
  ...props
}) => {
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
