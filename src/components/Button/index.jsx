import { Children } from 'react';
import '../Header/LandingHeader.css';
import { combineClasses } from '../util/format';
export const CustomButton = (props) => {
  const classNames = {
    primary: 'getBtn',
    secondary: 'seeBtn',
    outline: 'btnLogin',
  };
  const className = classNames[props.type] || classNames.primary;
  const classes = combineClasses(className, props.className);
  return props.onClick ? (
    <button onClick={props.onClick} className={classes}>
      {props.children}
    </button>
  ) : (
    <a href='#' className={classes}>
      {props.children}
    </a>
  );
};
