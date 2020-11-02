import React, { Component } from 'react'
import axios from 'axios';

import businessType from '../utils/businessType'

import { TextInput, Pane, Text, Select, Button, Spinner } from 'evergreen-ui'

import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Datetime from 'react-datetime'

import ReactFlagsSelect from 'react-flags-select'
import 'react-flags-select/css/react-flags-select.css'
import Loader from './loader';

const phoneRegExp = /^\+(?:[0-9] ?){6,14}[0-9]$/
const UserMainInfoSchema = {
  individual: (
    Yup.object().shape({
      firstName: Yup.string()
        .required('Please enter first name'),
      lastName: Yup.string()
        .required('Please enter last name'),
      acceptCards: Yup.string()
        .required('Please select payment mode information'),
      taxID: Yup.string()
        .required('Please enter tax ID'),
      address1: Yup.string()
        .required('Please enter first address'),
      cityName: Yup.string()
        .required('Please enter city name'),
      postalCode: Yup.string()
        .required('Please enter postal code'),
      phoneNumber: Yup.string()
        .required('Please enter phone number')
        .matches(phoneRegExp, 'Phone number is not valid'),
      DOB: Yup.string()
        .required('Please select date of birth'),
      ssn: Yup.string()
        .min(4, 'You can not enter less than 4 char')
        .max(4., 'you can not enter more than 4 char')
        .required('Please enter postal code'),
    })
  ),
  business: (

    Yup.object().shape({
      firstName: Yup.string()
        .required('Please enter first name'),
      lastName: Yup.string()
        .required('Please enter last name'),
      businessType: Yup.string()
        .required('Please select type of the business'),
      businessCategories: Yup.string()
        .required('Please select category of the business'),
      acceptCards: Yup.string()
        .required('Please select payment mode information'),
      businessName: Yup.string()
        .required('Please enter business name'),
      taxID: Yup.string()
        .required('Please enter tax ID'),
      address1: Yup.string()
        .required('Please enter first address'),
      cityName: Yup.string()
        .required('Please enter city name'),
      postalCode: Yup.string()
        .required('Please enter postal code'),
      businessDescription: Yup.string()
        .required('Please enter business description'),
      phoneNumber: Yup.string()
        .required('Please enter phone number')
        .matches(phoneRegExp, 'Phone number is not valid'),
      DOB: Yup.string()
        .required('Please select date of birth'),
      ssn: Yup.string()
        .min(4, 'You can not enter less than 4 char')
        .max(4., 'you can not enter more than 4 char')
        .required('Please enter postal code'),
    })
  )
}

export class UserMainInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      loader: false
    }
  }
  back = e => {
    e.preventDefault()
    this.props.prevStep()
  };

  // generateTenants = () => {
  // let data = JSON.parse(localStorage.getItem('data'));
  // const user = {
  //   "apiKey": data['UserInfo']['email'],
  //   "apiSecret": data['UserInfo']['password']
  // };

  // const username = 'superadmin'
  // const password = 'Sup3r4dm1n@2020!'
  // const basicToken = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

  // const tenantsHeaders = {
  //   headers: { 'Authorization': `Basic ${basicToken}`, 'X-Killbill-CreatedBy': 'wso2-killbill' }
  // }

  // axios.post(`http://api.goeverpay.com:8080/1.0/kb/tenants`, user, tenantsHeaders)
  //   .then(res => {
  //     // this.saveSignUp();
  //   }).catch(function (error) {
  //     console.log('Error on Authentication');
  //   });
  // };

  doSignUp = (data) => {
    this.setState({
      loader: true
    })
    // axios.post(`http://localhost:3001/users/sign-up`, data)
    axios.post(`https://kwikpay-signup-api.herokuapp.com/users/sign-up`, data)
      .then(res => {
        this.setState({
          loader: true
        })

        if (res.data.error) {
          this.setState({ message: res.data.message })
        } else {
          window.location.href = 'https://upbeat-morse-c5a699.netlify.app/do-login'
        }
      })
      .catch(function (error) {
        this.setState({
          loader: true
        })
        console.log('Error on Authentication');
      });
  }

  // saveSignUp = () => {
  //   const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlpqUm1ZVE13TlRKak9XVTVNbUl6TWpnek5ESTNZMkl5TW1JeVkyRXpNamRoWmpWaU1qYzBaZz09In0.eyJhdWQiOiJodHRwOlwvXC9vcmcud3NvMi5hcGltZ3RcL2dhdGV3YXkiLCJzdWIiOiJhZG1pbkBjYXJib24uc3VwZXIiLCJhcHBsaWNhdGlvbiI6eyJvd25lciI6ImFkbWluIiwidGllciI6IlVubGltaXRlZCIsIm5hbWUiOiJEZWZhdWx0QXBwbGljYXRpb24iLCJpZCI6MSwidXVpZCI6bnVsbH0sInNjb3BlIjoiYW1fYXBwbGljYXRpb25fc2NvcGUgZGVmYXVsdCIsImlzcyI6Imh0dHBzOlwvXC9sb2NhbGhvc3Q6OTQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJzdG9wT25RdW90YVJlYWNoIjp0cnVlLCJzcGlrZUFycmVzdExpbWl0IjowLCJzcGlrZUFycmVzdFVuaXQiOm51bGx9fSwia2V5dHlwZSI6IlBST0RVQ1RJT04iLCJzdWJzY3JpYmVkQVBJcyI6W3sic3Vic2NyaWJlclRlbmFudERvbWFpbiI6ImNhcmJvbi5zdXBlciIsIm5hbWUiOiJLaWxsQmlsbCIsImNvbnRleHQiOiJcL2tpbGxiaWxsXC8xLjAiLCJwdWJsaXNoZXIiOiJhZG1pbiIsInZlcnNpb24iOiIxLjAiLCJzdWJzY3JpcHRpb25UaWVyIjoiVW5saW1pdGVkIn1dLCJjb25zdW1lcktleSI6ImpleGxVeVVvcmRqVGhqb0ZMazRSbEE2S0Jvb2EiLCJleHAiOjM3NDIzOTk0OTIsImlhdCI6MTU5NDkxNTg0NSwianRpIjoiM2U3YjVjYzQtMTIxZS00MGYzLWFhNmEtMTAxNDczOWUwYmQ5In0.ReaMROXD9GuvXsMFnaHNx2FUu9YRYUo-jXljSDCuzt_x2BVfHfhq0R5XAH1TwY_ipAYXdBWNG83FMEptQv4IRvgM_ZIh6gXOZLarqlKe6KrUdHG9heJQVedlCbMBXcqq8KFh9irj_ATa1hSQu0HzGYc12QRm3h84jufF-LPlGCUwtRdcaNWmYQmSeWuOVF_dJTSEISz4lrvLloqn66g5naY0QySs5oXT8s23ACnqw89aYYFWCcADriCiiVTggmLD1b2VsaqT6y6Ih_pMsarofEeQIuUF7HOTUymjXZoD1KBCZksFiJYJ8Jt7Fx0_DHPQ9aJx51IvyORhZT_R1K1GUg';
  //   const headers = {
  //     headers: {
  //       'Authorization': `Bearer ${token}`,
  //       'X-Killbill-ApiSecret': 'telecomUser',
  //       'X-Killbill-ApiKey': 'telecomUser007',
  //       'X-Killbill-CreatedBy': 'wso2-killbill',
  //       'Access-Control-Allow-Origin': '*',
  //       'Access-Control-Allow-Methods': 'POST'
  //     }
  //   }

  //   let data = JSON.parse(localStorage.getItem('data'));
  //   const mainData = {
  //     "name": data['userMainInfo']['firstName'] + ' ' + data['userMainInfo']['lastName'],
  //     "firstNameLength": data['userMainInfo']['firstName'].length,
  //     "email": data['UserInfo']['email'],
  //     "address1": data['userMainInfo']['address1'],
  //     "postalCode": data['userMainInfo']['postalCode'],
  //     "city": data['userMainInfo']['cityName'],
  //     "country": data['UserInfo']['country'],
  //     "phone": data['userMainInfo']['phoneNumber']
  //   }

  //   axios.post(`https://enki.goeverpay.com/1.0/kb/accounts`, mainData, headers)
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     }).catch(function (error) {
  //       console.log('Error on Authentication');
  //     });
  // }

  render() {
    const { isAuthenticated, login } = this.props.auth;
    const initialValues = {
      'individual': {
        firstName: '', lastName: '', acceptCards: '',
        taxID: '', address1: '', address2: '', cityName: '',
        postalCode: '', phoneNumber: '', websiteUrl: '',
        DOB: '', ssn: ''
      },
      'business': {
        firstName: '', lastName: '', businessType: '',
        businessCategories: '', acceptCards: '', businessName: '',
        taxID: '', address1: '', address2: '', cityName: '',
        postalCode: '', phoneNumber: '', websiteUrl: '', businessDescription: '',
        DOB: '', ssn: ''
      }
    }
    const { merchant: { businessType, individual } } = this.props.otherComponentData
    console.log('-----this.props--', this.props.otherComponentData, individual)

    return (
      <div className='signUpForm'>
        <Loader
          loading={this.state.loader} />
        <Formik
          initialValues={initialValues[businessType]}
          validationSchema={UserMainInfoSchema[businessType]}
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
                {/* Form Body  */}
                <div className='signUpBody'>
                  <Pane
                    className='row'
                    display='flex'
                    flexWrap='wrap'
                  >
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>First Name</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='firstName'
                        placeholder='First Name'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        isInvalid={errors.firstName && touched.firstName ? true : false}
                      />
                      {errors.firstName && touched.firstName ? (
                        <span className="error_span">{errors.firstName}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Last Name</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='lastName'
                        placeholder='Last Name'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        isInvalid={errors.lastName && touched.lastName ? true : false}
                      />
                      {errors.lastName && touched.lastName ? (
                        <span className="error_span">{errors.lastName}</span>
                      ) : null}
                    </div>
                    {!individual ? (

                      <div className='col-6'>
                        <Text size={300} lineHeight='23px' fontWeight='500'>Business Type</Text>
                        <div>
                          <Select
                            width='100%'
                            height={40}
                            name='businessType'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.businessType}
                            isInvalid={errors.businessType && touched.businessType ? true : false}
                          >
                            <option value=''>Select business type...</option>
                            {Object.keys(businessType).map((business, index) => {
                              return (
                                <option value={business} key={index}>{business}</option>
                              )
                            })}
                          </Select>
                          {errors.businessType && touched.businessType ? (
                            <span className="error_span">{errors.businessType}</span>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    {!individual ? (

                      <div className='col-6'>
                        <Text size={300} lineHeight='23px' fontWeight='500'>Business Categories</Text>
                        <div>
                          <Select
                            width='100%'
                            height={40}
                            name='businessCategories'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.businessCategories}
                            isInvalid={errors.businessCategories && touched.businessCategories ? true : false}
                          >
                            <option value=''>Select business category...</option>
                            {values.businessType && businessType[values.businessType].map((businessCategory, index) => {
                              return (
                                <option value={businessCategory} key={index}>{businessCategory}</option>
                              )
                            })}
                          </Select>
                          {errors.businessCategories && touched.businessCategories ? (
                            <span className="error_span">{errors.businessCategories}</span>
                          ) : null}
                        </div>
                      </div>
                    ) : null}
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Do you currently accept debit or credit?</Text>
                      <div>
                        <Select
                          width='100%'
                          height={40}
                          name='acceptCards'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.acceptCards}
                          isInvalid={errors.acceptCards && touched.acceptCards ? true : false}
                        >
                          <option value=''>Please select...</option>
                          <option value='Yes'>Yes, we accept credit cards</option>
                          <option value='No'>No, we do not accept credit cards</option>
                        </Select>
                        {errors.acceptCards && touched.acceptCards ? (
                          <span className="error_span">{errors.acceptCards}</span>
                        ) : null}
                      </div>
                    </div>
                    {!individual ? (

                      <div className='col-6'>
                        <Text size={300} lineHeight='23px' fontWeight='500'>Business Name</Text>
                        <TextInput
                          height={40}
                          width='100%'
                          name='businessName'
                          placeholder='Business Name'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.businessName}
                          isInvalid={errors.businessName && touched.businessName ? true : false}
                        />
                        {errors.businessName && touched.businessName ? (
                          <span className="error_span">{errors.businessName}</span>
                        ) : null}
                      </div>
                    ) : null}
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Tax ID</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='taxID'
                        placeholder='Tax ID'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.taxID}
                        isInvalid={errors.taxID && touched.taxID ? true : false}
                      />
                      {errors.taxID && touched.taxID ? (
                        <span className="error_span">{errors.taxID}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Address 1</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='address1'
                        placeholder='Address 1'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address1}
                        isInvalid={errors.address1 && touched.address1 ? true : false}
                      />
                      {errors.address1 && touched.address1 ? (
                        <span className="error_span">{errors.address1}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Address 2</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='address2'
                        placeholder='Address 2 (Optional)'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address2}
                      />
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>City</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='cityName'
                        placeholder='City'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cityName}
                        isInvalid={errors.cityName && touched.cityName ? true : false}
                      />
                      {errors.cityName && touched.cityName ? (
                        <span className="error_span">{errors.cityName}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Postal Code</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='postalCode'
                        placeholder='Postal Code'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.postalCode}
                        isInvalid={errors.postalCode && touched.postalCode ? true : false}
                      />
                      {errors.postalCode && touched.postalCode ? (
                        <span className="error_span">{errors.postalCode}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Phone Number</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='phoneNumber'
                        placeholder='Phone Number'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        isInvalid={errors.phoneNumber && touched.phoneNumber ? true : false}
                      />
                      {errors.phoneNumber && touched.phoneNumber ? (
                        <span className="error_span">{errors.phoneNumber}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Website</Text>
                      <TextInput
                        className='everGreenInput'
                        height={40}
                        width='100%'
                        name='websiteUrl'
                        placeholder='Website (Optional)'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.websiteUrl}
                      />
                    </div>
                    {!individual ? (

                      <div className='col-6'>
                        <Text size={300} lineHeight='23px' fontWeight='500'>Business Description</Text>
                        <TextInput
                          height={40}
                          width='100%'
                          name='businessDescription'
                          placeholder='Business Description'
                          type='text'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.businessDescription}
                          isInvalid={errors.businessDescription && touched.businessDescription ? true : false}
                        />
                        {errors.businessDescription && touched.businessDescription ? (
                          <span className="error_span">{errors.businessDescription}</span>
                        ) : null}
                      </div>
                    ) : null}
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Date of Birth</Text>
                      <Datetime
                        inputProps={{ className: 'everGreenDate flag-select', placeholder: ' MM/DD/YYYY', name: 'DOB' }}
                        dateFormat="MM/DD/YYYY"
                        timeFormat={false}
                        height={40}
                        width='100%'
                        onChange={(momentObj) => {
                          if (typeof momentObj === 'object') {
                            setFieldValue('DOB', momentObj.format("MM/DD/YYYY"));
                          } else {
                            setFieldValue('DOB', '');
                          }
                        }}
                        value={values.DOB}
                        isInvalid={errors.DOB && touched.DOB ? true : false}
                      />
                      {errors.DOB && touched.DOB ? (
                        <span className="error_span">{errors.DOB}</span>
                      ) : null}
                    </div>
                    <div className='col-6'>
                      <Text size={300} lineHeight='23px' fontWeight='500'>Last 4 digit of SSN or ITIN</Text>
                      <TextInput
                        height={40}
                        width='100%'
                        name='ssn'
                        placeholder='Last 4 digit of SSN or ITIN'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.ssn}
                        isInvalid={errors.ssn && touched.ssn ? true : false}
                      />
                      {errors.ssn && touched.ssn ? (
                        <span className="error_span">{errors.ssn}</span>
                      ) : null}
                    </div>
                  </Pane>
                </div>

                {/* Form Footer  */}
                <div className='signUpFooter'>
                  {this.state.message && (
                    <div className="text-center textn-danger">
                      {this.state.message}
                    </div>)
                  }
                  <Pane
                    className='row'
                    display='flex'
                    alignItems='center'
                    flexWrap='wrap'
                    justifyContent='space-between'
                  >
                    <div className='col-4'>
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
                            let data = this.props.otherComponentData
                            data['userMainInfo'] = values;
                            // localStorage.setItem("data", JSON.stringify(data));
                            this.doSignUp(data);
                          }
                        }}
                      >
                        Sign Up
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

export default UserMainInfo
