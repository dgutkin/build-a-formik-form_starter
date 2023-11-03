import React from 'react';
import { useFormik } from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert('Login Successful');
    },
    validate: values => {
      let errors = {};
      const regex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!values.email) {
        errors.email = 'Field required';
      } else if(!regex.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    
    <div className="form-container">
    <h1>My Formik Form</h1>
    <form onSubmit={formik.handleSubmit}>

      <label htmlFor="email">Email Address</label>
      <input
        id="emailField"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div> : null}
      
      <label htmlFor="password">Password</label>
      <input
        id="pswField"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div> : null}

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default App;