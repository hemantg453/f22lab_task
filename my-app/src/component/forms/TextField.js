import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (


    <>
      <input
        className={` ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />



      <ErrorMessage component="div" name={field.name} className="error" style={{ color: 'red' }} />

    </>
  )
}