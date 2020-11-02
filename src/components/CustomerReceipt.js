import React, { Component } from 'react'
import { Heading, Text, Select, Pane, Button, TextInput } from 'evergreen-ui'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const CustomerReceiptSchema = Yup.object().shape({
  businessName: Yup.string()
    .required('Please enter your business name'),
  projectedAnnualVolume: Yup.string()
    .required('Please enter project annual volume'),
});

export class CustomerReceipt extends Component {
  constructor(props){
    super(props);
    this.state = { nameAppearForCustomer: '' }
  }
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  };

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  };

  render () {
    const {merchantState} = this.props;
    return (
      <div className='signUpForm'>
        <Formik
          initialValues={{
            businessName: '',
            empIdentificationNo: '',
            projectedAnnualVolume: '',
          }}
          validationSchema={CustomerReceiptSchema}
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
            submitForm, 
          }) => (
            <form onSubmit={handleSubmit}>
              {/* Form Header  */}
              <div className='signUpHead'>
                <Heading textAlign='center' fontWeight='400' size={700} is='h2' marginTop='default' marginBottom='10px'>Tell us about your business</Heading>
              </div>

              {/* Form Body  */}
              <div className='signUpBody'>
                <Pane
                  className='row'
                  display='flex'
                  alignItems='center'
                  flexWrap='wrap'
                >
                  <div className={`col-12 ${merchantState.individual ? '' : 'hidden'}`}>
                    <Text size={300} lineHeight='23px' fontWeight='500'>What name would you like to appear on customer receipts?</Text>
                    <div className='customSelect'>
                      <Select 
                        width='100%'
                        height={40}
                        marginBottom={16}
                        onChange= { (e) => this.setState({ nameAppearForCustomer: e.target.value }) }
                      > 
                        <option value=''>Select name would you like...</option>
                        <option value='Clothing_And_Accessories_Retail'>Clothing And Accessories --- Retail</option>
                        <option value='Independent_Stylist_Barber_Beauty_And_Personal_Care'>Independent Stylist Barber --- Beauty And Personal Care</option>                 
                        <option value='Specialty_Shop_Retail'>Specialty Shop --- Retail</option>
                        <option value='Beauty_Salon_Retail'>Beauty Salon --- Retail</option>
                        <option value='Jewelry_And_Watches_Retail'>Jewelry And Watches --- Retail</option>
                        <option value='Art_Photo_And_Film_Retail'>Art Photo And Film --- Retail</option>
                        <option value='Consulting_Professional_Services'>Consulting --- Professional Services</option>
                        <option value='Outdoor_Markets_Retail'>Outdoor Markets --- Retail</option>
                        <option value='Hair_Salon_Barbershop_Beauty_And_Personal_Care'>Hair Salon Barbershop --- Beauty And Personal Care</option>
                        <option value='Furniture_Home_Goods_Retail'>Furniture Home Goods --- Retail</option>
                        <option value='Specialty_Shop_Food_And_Drink'>Specialty Shop --- Food And Drink</option>
                        <option value='Massage Therapist_Health Care And Fitness'>Massage Therapist --- Health Care And Fitness</option>
                        <option value='Design_Professional_Services'>Design --- Professional Services</option>
                        <option value='Massage_Therapist_Beauty_And_Personal_Care'>Massage Therapist --- Beauty And Personal Care</option>
                        <option value='Photography_Professional_Services'>Photography --- Professional Services</option>
                        <option value='Marketing_Advertising_Professional_Services'>Marketing Advertising --- Professional Services</option>
                        <option value='Events_Festivals_Leisure_And_Entertainment'>Events Festivals --- Leisure And Entertainment</option>
                        <option value='Outdoor_Markets_Food_And_Drink'>Outdoor Markets --- Food And Drink</option>
                        <option value='Spa_Beauty_And_Personal_Care'>Spa --- Beauty And Personal Care</option>
                        <option value='Events_Festivals_Casual_Use'>Events Festivals --- Casual Use</option>
                      </Select>
                    </div>
                  </div>
                </Pane>
                <div className={`${merchantState.individual ? 'hidden' : ''}`}>
                  <Pane className='row'>
                    <div className="col-12">
                      <TextInput
                        height={40}
                        width='100%'
                        name='businessName'
                        placeholder='Business Name'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.businessName}
                        tabIndex={0}
                        isInvalid={errors.businessName && touched.businessName ? true : false }
                      />
                      {errors.businessName && touched.businessName ? (
                        <span className="error_span">{errors.businessName}</span>
                      ) : null}
                    </div>
                  </Pane>
                  <br/>
                  <Pane className='row'>
                    <div className="col-12">
                      <TextInput
                        height={40}
                        width='100%'
                        name='empIdentificationNo'
                        placeholder='Employer Identification Number (Optional)'
                        type='text'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.empIdentificationNo}
                      />
                    </div>
                  </Pane>
                  <br/>
                  <Pane className='row'>
                    <div className="col-12">
                      <Select 
                        width='100%'
                        height={40}
                        name='projectedAnnualVolume'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.projectedAnnualVolume}
                        isInvalid={errors.projectedAnnualVolume && touched.projectedAnnualVolume ? true : false }
                      > 
                        <option value=''>Select Estimated revenue...</option>
                        <option value='0-10000'>$0 – $10,000</option>
                        <option value='10000-50000'>$10,000 – $50,000</option>
                        <option value='50000-100000'>$50,000 – $100,000</option>
                        <option value='100000-250000'>$100,000 – $250,000</option>
                        <option value='250000-500000'>$250,000 – $500,000</option>
                        <option value='500000-1000000'>$500,000 – $1M</option>
                        <option value='1000000-5000000'>$1M – $5M</option>
                        <option value='5000000-10000000'>$5M – $10M</option>
                        <option value='10000000-20000000'>$10M – $20M</option>
                        <option value='20000000+'>$20M and above</option>
                      </Select>  
                      {errors.projectedAnnualVolume && touched.projectedAnnualVolume ? (
                        <span className="error_span">{errors.projectedAnnualVolume}</span>
                      ) : null}
                    </div>
                  </Pane>
                </div>
              </div>

              {/* Form Footer  */}
              <div className='signUpFooter'>
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
                        disabled={merchantState.individual && this.state.nameAppearForCustomer.length == 0}
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
                            let childData = '';
                            if(this.state.nameAppearForCustomer){
                              childData = this.state.nameAppearForCustomer;
                            }else{
                              childData = values;
                            }
                            this.props.nextStep(childData);
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

export default CustomerReceipt
