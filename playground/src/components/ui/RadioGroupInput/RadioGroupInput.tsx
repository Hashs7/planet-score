import cn from 'classnames';
import { FunctionComponent, ReactNode } from 'react';
import './RadioGroupInput.scss';

interface RadioGroupInputProps {
  label: string;
  children: ReactNode;
  percentage?: number;
  className?: string;
  horizontal?: boolean;
}

const RadioGroupInput: FunctionComponent<RadioGroupInputProps> = ({
  label,
  children,
  className,
  percentage,
  horizontal,
  ...props
}) => {
  const classes = {
    container: cn('radio-group-input', className, {
      ['--horizontal']: horizontal
    })
  };
  console.log(percentage);

  const translateDirection = horizontal ? 'X' : 'Y';

  return (
    <fieldset className={classes.container} {...props}>
      <legend>{label}</legend>
      <span className="radio-group-input__container">
        {children}
        {percentage !== undefined ? (
          <span
            className="radio-group-input__background"
            style={{
              transform: `translate${translateDirection}(${percentage}%)`,
              backgroundPosition: `${percentage}% center`
            }}
          ></span>
        ) : null}
      </span>
    </fieldset>
  );
};

export default RadioGroupInput;
