import React, { Component } from 'react'
import { Heading, Text, TextInput, Pane, Checkbox, Button, toaster } from 'evergreen-ui'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'

import basics from '../img/basics.svg'
import noCredit from '../img/no-credit.svg'
import reader from '../img/reader.svg'

const UserInfoSchema = Yup.object().shape({
  email: Yup.string()
    .email('The email address you entered does not appear to be valid')
    .required('Enter the email address you want to use to create your new account'),
  emailConfirmation: Yup.string()
    .required('Enter your email address twice to confirm it’s correct')
    .oneOf([Yup.ref('email')], 'The email addresses you entered do not match'),
  password: Yup.string()
    .min(8, 'Your password must be at least 8 characters')
    .required('Create a password so you can login to your new account'),
  acceptTerms: Yup.boolean()
    .oneOf([true], 'Must Accept Terms and Conditions'),
});

export class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = { checked: false, countryCode: 'US' };
    this.userInfoForm = React.createRef();
  }

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  };

  render() {
    return (
      <div className='signUpForm'>
        {/* Form Header  */}
        <div className='signUpHead'>
          <Heading textAlign='center' fontWeight='400' size={700} is='h2' marginTop='default' marginBottom='10px'>User Info Let’s create your account.</Heading>
          <Text className='customSubHeading' display='block' textAlign='center' size={400} color='#5f6a7d'>The quick brown fox jumps over the lazy dog Signing up for Kwikpay  is fast and free — no commitments or long-term contracts.</Text>

          <Pane
            paddingTop='40px'
            className='row'
            display='flex'
            flexWrap='wrap'
            justifyContent='space-between'
          >
            <div className='col-3'>
              <div className='signBox'>
                <img src={basics} alt='' />
                <Heading textAlign='center' fontWeight='600' size={500} is='h3' marginTop='10px' marginBottom='10px'>Just the basics</Heading>
                <Text display='block' textAlign='center' size={400} color='#5f6a7d'>Tell us about your business so we can serve you better.</Text>
              </div>
            </div>
            <div className='col-3'>
              <div className='signBox'>
                <img src={noCredit} alt='' />
                <Heading textAlign='center' fontWeight='600' size={500} is='h3' marginTop='10px' marginBottom='10px'>No credit checks</Heading>
                <Text display='block' textAlign='center' size={400} color='#5f6a7d'>We’ll need the last four numbers of your SSN to verify your identity.</Text>
              </div>
            </div>
            <div className='col-3'>
              <div className='signBox'>
                <img src={reader} alt='' />
                <Heading textAlign='center' fontWeight='600' size={500} is='h3' marginTop='10px' marginBottom='10px'>Get your free magstripe reader</Heading>
                <Text display='block' textAlign='center' size={400} color='#5f6a7d'>When you’re done, we’ll drop your free Kwikpay Reader for magstripe in the mail.</Text>
              </div>
            </div>
          </Pane>
        </div>

        {/* Form Body  */}
        <Formik
          initialValues={{ email: '', emailConfirmation: '', password: '', country: 'US', acceptTerms: false }}
          validationSchema={UserInfoSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
            submitForm,
          }) => (
              <form
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <div className='signUpBody'>
                  <Pane
                    className='row'
                    display='flex'
                    flexWrap='wrap'
                  >
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Enter your email</Text>
                      <TextInput
                        isInvalid={errors.email && touched.email ? true : false}
                        label='Enter your email'
                        description='This is a description.'
                        className=''
                        height={40}
                        width='100%'
                        name='email'
                        placeholder='you@example.com'
                        type='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}

                      />
                      {errors.email && touched.email ? (
                        <span className="error_span">{errors.email}</span>
                      ) : null}
                    </div>

                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Confirm your email</Text>
                      <TextInput
                        isInvalid={errors.emailConfirmation && touched.emailConfirmation ? true : false}
                        label='Enter your email'
                        description='This is a description.'
                        height={40}
                        width='100%'
                        name='emailConfirmation'
                        placeholder='you@example.com'
                        type='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.emailConfirmation}
                      />
                      {errors.emailConfirmation && touched.emailConfirmation ? (
                        <span className="error_span">{errors.emailConfirmation}</span>
                      ) : null}
                    </div>

                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Create a password</Text>
                      <TextInput
                        isInvalid={errors.password && touched.password ? true : false}
                        height={40}
                        width='100%'
                        name='password'
                        placeholder='Password'
                        type='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      {errors.password && touched.password ? (
                        <span className="error_span">{errors.password}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Country</Text>
                      <ReactFlagsSelect
                        name='country'
                        onSelect={(selectedCountryCode) => {
                          setFieldValue('country', selectedCountryCode)
                        }}
                        defaultCountry='US'
                        value={values.country}
                      />
                    </div>
                    <div className='col-12'>
                      <div className=''>
                        <Field
                          type="checkbox"
                          name="acceptTerms"
                          className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')}
                        />
                        <label className='disclaimer'>I agree to Kwikspay’s <a target='' href=''>Terms</a>, <a href=''>Privacy Policy</a>, and <a href=''>E-Sign Consent</a>.
                        </label>
                      </div>
                    </div>
                  </Pane>
                </div>
                <div className='signUpFooter'>
                  <Pane
                    className='row'
                    display='flex'
                    alignItems='center'
                    flexWrap='wrap'
                  >
                    <div className='col-6 textAlign'>
                      <Text size={400} lineHeight='23px' fontWeight='400'>Already have a Kwikpay account?
                        <a className='signIn' href=''> Sign in.</a>
                      </Text>
                    </div>
                  </Pane>
                  <Pane
                    className='row'
                    display='flex'
                    alignItems='center'
                    flexWrap='wrap'
                    justifyContent='space-between'
                  >
                      <div className='col-4 textAlign'>
                        <Button className='btnMain' width='100%' height={40} justifyContent='center' appearance='primary' textTransform='uppercase' onClick={this.back}>Back</Button>
                      </div>

                      <div className='col-4'>
                        <Button
                          className='btnMain'
                          width='100%'
                          height={40}
                          justifyContent='center'
                          appearance='primary'
                          textTransform='uppercase'
                          onClick={(e) => {
                            e.preventDefault();
                            submitForm();
                            if (Object.entries(errors).length == 0) {
                              this.props.nextStep(values);
                            } else {
                              toaster.danger(
                                'We need you to complete all of the required fields before we can continue',
                                { id: 'forbidden-action' }
                              )
                            }
                          }}
                        >
                          Continue
                      </Button>
                      </div>
                  </Pane>
                </div>
              </form>
            )}
        </Formik>
      </div>
    )
  }
}

export default UserInfo
