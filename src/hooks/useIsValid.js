import { useState, useCallback } from 'react';

// If there is no validation callback return true.
const useIsValid = (validationFn = () => true) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  // A really basic validation check for SQL Injections
  const basicSqlInjProtect = ['--', ';'].some((value) =>
    enteredValue.includes(value)
  );
  const isValid = validationFn(enteredValue) && !basicSqlInjProtect;
  const hasError = !isValid && isTouched;

  const valueChangedHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const touchedHandler = () => {
    setIsTouched(true);
  };

  const reset = useCallback(() => {
    setEnteredValue('');
    setIsTouched(false);
  }, []);

  return {
    value: enteredValue,
    isValid,
    hasError,
    valueChangedHandler,
    touchedHandler,
    reset,
  };
};

export default useIsValid;
