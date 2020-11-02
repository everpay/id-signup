import React, { Component } from 'react'
import Merchant from './Merchant'
import UserInfo from './UserInfo'
import CustomerReceipt from './CustomerReceipt'
import ProductSellOption from './ProductSellOption';
import UserMainInfo from './UserMainInfo';

export class UserForm extends Component {
    state = {
      step: 1,
      data: {},
    };

    // Proceed to next step
    nextStep = (childData) => {
      const { step, data } = this.state;
      if(data){
        if(step == 1){
          data['merchant'] = childData;
          this.setState({data});
        } else if(step==2){
          data['UserInfo'] = childData;
          this.setState({data});
        // } else if(step==3){
        //   data['customerReceipt'] = childData;
        //   this.setState({data});
        // } else if(step==4){
        //   data['productSellOption'] = childData;
        //   this.setState({data});
        }
      }
      this.setState({
        step: step + 1
      })

    };

    // Go back to prev step
    prevStep = () => {
      const { step } = this.state
      this.setState({
        step: step - 1
      })
    };

    render () {
      const { step, data } = this.state;
      switch (step) {
        case 1:
          return (
            <Merchant
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          )
        case 2:
          return (
            <UserInfo
              prevStep={this.prevStep}

              nextStep={this.nextStep}/>
          )
        // case 3:
        //   return (
        //     <CustomerReceipt
        //       nextStep={this.nextStep}
        //       prevStep={this.prevStep}
        //       merchantState={this.state.data.merchant}
        //     />
        //   )
        // case 4:
        //   return (
        //     <ProductSellOption
        //       nextStep={this.nextStep}
        //       prevStep={this.prevStep}
        //     />
        //   )
        // case 5:
        case 3:
          return (
            <UserMainInfo
              auth={this.props.auth}
              otherComponentData={this.state.data}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />
          )
        default:
          console.log('I am blank');
      }
    }
}

export default UserForm
