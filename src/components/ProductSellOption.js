import React, { Component } from 'react'
import { Heading, Pane, Button} from 'evergreen-ui'

import mortar from '../img/mortar.svg'
import cart from '../img/cart.svg'
import computer from '../img/computer.svg'
import event from '../img/event.svg'
import invoice from '../img/invoice.svg'

export class ProductSellOption extends Component {

  constructor(props){
    super(props);
    this.state = { paymentType: [], buttonDisable: true }
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep(this.state.paymentType);
  };

  back = e => {
    e.preventDefault()
    this.props.prevStep()
  };

  setPaymentType = (e) => {
    let paymentTypeArray = [...this.state.paymentType, e.target.id]
    let result = paymentTypeArray.filter(function (value) {
      return paymentTypeArray.indexOf(value) === paymentTypeArray.lastIndexOf(value);
    });
    this.setState({paymentType: result})
  }

  render () {
    return (
      <div className='signUpForm'>

        {/* Form Header  */}
        <div className='signUpHead'>
          <Heading textAlign='center' fontWeight='400' size={700} is='h2' marginTop='default' marginBottom='10px'>Where will you sell and take payments?</Heading>
        </div>

        {/* Form Body  */}
        <div className='signUpBody'>
          <Pane
            className='row'
          >
            <div className='col-12'>
              <div className='customInput checkGroup'>
                <input
                  type='checkbox'
                  id='location'
                  name='payment-type'
                  onChange = {this.setPaymentType}
                />
                <label for='location'>
                  <div className='radioGroup'>
                    <div className='rGLeft'>
                      <img src={mortar} alt='' />
                    </div>
                    <div className='rGright'>
                      <Heading fontWeight='600' size={500} is='h4'>Brick-and-mortar location</Heading>
                    </div>
                  </div>
                </label>
              </div>
              <div className='customInput checkGroup'>
                <input 
                  type='checkbox'
                  id='event'
                  name='payment-type'
                  onChange = {this.setPaymentType}
                />
                <label for='event'>
                  <div className='radioGroup'>
                    <div className='rGLeft'>
                      <img src={event} alt='' />
                    </div>
                    <div className='rGright'>
                      <Heading fontWeight='600' size={500} is='h4'>On-the-go or at an event</Heading>
                    </div>
                  </div>
                </label>
              </div>
              <div className='customInput checkGroup'>
                <input
                  type='checkbox'
                  id='computer'
                  name='payment-type'
                  onChange = {this.setPaymentType}
                />
                <label for='computer'>
                  <div className='radioGroup'>
                    <div className='rGLeft'>
                      <img src={computer} alt='' />
                    </div>
                    <div className='rGright'>
                      <Heading fontWeight='600' size={500} is='h4'>Enter on a computer</Heading>
                    </div>
                  </div>
                </label>
              </div>
              <div className='customInput checkGroup'>
                <input
                  type='checkbox'
                  id='store'
                  name='payment-type'
                  onChange = {this.setPaymentType}
                />
                <label for='store'>
                  <div className='radioGroup'>
                    <div className='rGLeft'>
                      <img src={cart} alt='' />
                    </div>
                    <div className='rGright'>
                      <Heading fontWeight='600' size={500} is='h4'>Online store</Heading>
                    </div>
                  </div>
                </label>
              </div>
              <div className='customInput checkGroup'>
                <input
                  type='checkbox'
                  id='invoice'
                  name='payment-type'
                  onChange = {this.setPaymentType}
                />
                <label for='invoice'>
                  <div className='radioGroup'>
                    <div className='rGLeft'>
                      <img src={invoice} alt='' />
                    </div>
                    <div className='rGright'>
                      <Heading fontWeight='600' size={500} is='h4'>Invoices</Heading>
                    </div>
                  </div>
                </label>
              </div>
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
                disabled={this.state.paymentType.length == 0}
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

export default ProductSellOption
