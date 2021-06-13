import React from 'react'
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';


const Signup = () => {

    const [checked, setChecked] = React.useState(true);


    const validate = Yup.object({
        companyName: Yup.string()
            .max(50, 'Maximum 50 characters or less')
            .min(5, 'Minimum 5 characters')
            .required('Min 5 and Max 50 is Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 charaters')
            .required('Password is required'),
        checkbox: Yup.bool()
            .oneOf([true], 'Accept Terms & Conditions is required')

    })





    return (
        <div className="d-flex justify-content-center">
            <center>
                <div>

                    <p className='signup-logo'>Omega</p>



                    <div className='card Rectangle'>

                        <p className='form-signup-text1'>Sign up</p>
                        <p className='form-signup-text2'>No credit card required</p>



                        {/* fomik form */}
                        <Formik
                            initialValues={{
                                companyName: '',
                                email: '',
                                password: '',
                                checkbox: false
                            }}
                            validationSchema={validate}
                            onSubmit={values => {
                                console.log(values)
                            }}
                        >

                            <div >

                                <Form>
                                    <div class="form-group">
                                        <TextField className='input-signup' placeholder="Email" name="email" type="email" />
                                    </div>
                                    <div class="form-group">
                                        <TextField className='input-signup' placeholder="Company" name="companyName" type="text" />
                                    </div>
                                    <div class="form-group">
                                        <TextField className='input-signup' placeholder="Password" name="password" type="password" />
                                    </div>
                                    <div class="form-group">

                                        <TextField className='checkbox-signup' name="checkbox" type="checkbox" />


                                        <span className='checkbox-lable1 '>&nbsp;&nbsp;I agree to the <span style={{ color: '#5454d4' }}>Term & Condition</span> </span>
                                    </div>



                                    <button class="btn btn-danger btn-form" type="submit"><span className='btn-form-text'>Get Started</span></button>

                                    <center>
                                        <span className='checkbox-lable2'>&nbsp;&nbsp;Alrady have an Account ? <span style={{ color: '#5454d4' }}>Sign In</span> </span><br></br>
                                    </center>



                                </Form>
                            </div>


                        </Formik>


                    </div>
                </div>

            </center>
        </div>
    )
}

export default Signup