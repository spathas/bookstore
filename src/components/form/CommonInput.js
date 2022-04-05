import { useEffect, useCallback } from 'react';

//HOOKS
import useIsValid from '../../hooks/useIsValid';

//MUI COMPONENTS
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

//STYLES
import Grow from '@mui/material/Grow';

const CommonInput = ({
  name,
  type = 'string',
  isRequired,
  validationFn,
  getValues,
}) => {
  //State
  const {
    value: enteredValue,
    isValid,
    hasError,
    valueChangedHandler,
    touchedHandler,
    reset,
  } = useIsValid(validationFn);

  // Parse Values /////////////////////
  const returnValues = useCallback(() => {
    return getValues({
      value: enteredValue,
      isValid: isValid,
      reset: reset,
    });
  }, [enteredValue, getValues, isValid, reset]);

  useEffect(() => {
    returnValues();
  }, [returnValues]);

  //Render
  return (
    <Grow in timeout={500}>
      <FormControl fullWidth margin='dense'>
        <InputLabel htmlFor={`${name}-input`} required={isRequired}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </InputLabel>
        <Input
          id={`${name}-input`}
          placeholder={`Enter the ${name} of this book...`}
          onChange={valueChangedHandler}
          onBlur={touchedHandler}
          error={hasError}
          value={enteredValue}
          type={type}
        />
      </FormControl>
    </Grow>
  );
};

export default CommonInput;
