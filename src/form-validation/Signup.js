import React, {useState}  from 'react'
import * as yup from "yup";
import { useFormik } from 'formik';


const Signup = () => {

    const formik = useFormik({
        initialValues : {
            name : '',
            email : '',
            password : ''
        },
        onSubmit: (values,{resetForm})=> {
            console.log(values);
            resetForm({values : ""});
        },
        validattionSchema: yup.object({
            name: yup.string().min(2, "name must atlest 3 characters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "password must have at least 6 characters").required(),
        }),
    })

    console.error(formik.error);
    
  return (
    <div>
        <h2>User signup</h2>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name}/>
                {formik.errors.name && <span>{formik.errors.name}</span>}
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
                {formik.errors.email && <span>{formik.errors.email}</span>}
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type='text' id='password' name='password' onChange={formik.handleChange} value={formik.values.password}/>
                {formik.errors.password && <span>{formik.errors.password}</span>}
            </div>
            <button type="submit">signup</button>
        </form>
    </div>
  )
}

export default Signup