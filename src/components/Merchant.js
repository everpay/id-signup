import React, { Component } from 'react'
import { Heading, Text, TextInput, Pane, Button, Radio } from 'evergreen-ui'
import user from '../img/user.svg'
import building from '../img/building.svg'

export class Merchant extends Component {

  constructor(props){
    super(props);
    this.state = { individual: false, buttonDisable: true, businessType: '', businessName: '' };
  }

  continue = e => {
    e.preventDefault()
    this.props.nextStep(this.state)
  };

  // back = e => {
  //   e.preventDefault()
  //   this.props.prevStep()
  // };

  render () {
    return (
      <div className='signUpForm'>

        {/* Form Header  */}
        <div className='signUpHead'>
          <Heading textAlign='center' fontWeight='400' size={700} is='h2' marginTop='default' marginBottom='10px'>Which business type best describes you?</Heading>
        </div>

        {/* Form Body  */}
        <div className='signUpBody'>
          <Pane
            className='row'
          >
            <div className='col-12'>
              <div className='customInput'>
                <input 
                  type='radio'
                  id='individual'
                  name='select-business-type'
                  onClick={() => {
                    this.setState({ individual: true, buttonDisable: true, businessType: 'individual'});
                  }}
                />
                <label for='individual'>
                  <div className='radioGroup'>
                    <div className='rGLeft'>
                      <img src={user} alt='' />
                    </div>
                    <div className='rGright'>
                      <Heading color='#2996cc' fontWeight='600' size={500} is='h4'>Individual</Heading>
                      <Text size={400} color='#5f6a7d'>One-Person Business, Sole Proprietor, Side Project or Casual Use</Text>
                    </div>
                  </div>
                </label>
              </div>
              <div className='customInput'>
                <input 
                  type='radio'
                  id='business'
                  name='select-business-type'
                  onClick={() => {
                    this.setState({ individual: false, buttonDisable: false, businessType: 'business', businessName: ''});
                  }}
                  />
                <label for='business'>
                  <div className='radioGroup'>
                    <div className='rGLeft'>
                      <img src={building} alt='' />
                    </div>
                    <div className='rGright'>
                      <Heading color='#2996cc' fontWeight='600' size={500} is='h4'>Business</Heading>
                      <Text size={400} color='#5f6a7d'>LLC, Corporation, Partnership, Charity or Religious Organization</Text>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </Pane>
          <Pane
            className='row'
            display='flex'
            alignItems='center'
            flexWrap='wrap'
          >
            <div className={`col-12 ${this.state.individual ? '' : 'hidden' }`}>
              <Text size={300} lineHeight='23px' fontWeight='500'>What name would you like to appear on customer receipts?</Text>
              <TextInput
                description='This is a description.'
                className='everGreenInput'
                height={40}
                width='100%'
                name='business-name'
                placeholder='Enter name'
                type='text'
                autoComplete="false"
                value = {this.state.businessName}
                onChange={(e) => {
                  this.setState({ buttonDisable: false, businessName: e.target.value })
                }}
              />
            </div>
          </Pane>
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
            <div className='col-4 textAlign'>
              {/* <Button className='btnMain' width='100%' height={40} justifyContent='center' appearance='primary' textTransform='uppercase' onClick={this.back}>Back</Button> */}
            </div>
            <div className='col-4'>
              <Button
                className='btnMain'
                width='100%'
                height={40}
                disabled = {this.state.buttonDisable}
                justifyContent='center'
                appearance='primary'
                textTransform='uppercase'
                onClick={this.continue}>
                  Continue
              </Button>
            </div>
          </Pane>
        </div>
      </div>
    )
  }
}

export default Merchant
