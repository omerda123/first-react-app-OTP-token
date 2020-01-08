import React, { Component } from 'react'
import Title from './Components/Title'
import Form from './Components/Form'
import Banner from './Components/Banner'
import Button from './Components/Button'
import Finish from './Components/Finish'

import './App.css'


export default class App extends Component {

  state = {
    userPassword: "",
    pageIndex: 0,
    password: "1234",
    isValid: false,
    texts: [
      {
        header: "Waiting for the OTP",
        bannerText: "Didnt recive OTP?",
        shopAgain: "Shop again",
      },
      {
        header: "Payment Succesfully done",
        icon:"faCheckCircle",
        iconClass: "check-circle"
      },
      {
        header: "Payment failed",
        icon: "faTimesCircle",
        iconClass: "fail-circle"
      },
    ]
  }

  componentDidUpdate(){
    if(this.state.userPassword.length >= 4)
      this.validatePassword()

  }
  setUserPassword(e) {
    // this.state.userPassword += e.target.value;
    this.setState ({ userPassword : this.state.userPassword +  e.target.value});
  }
  validatePassword() {
    console.log(this.state.userPassword, this.state.password)
    if (this.state.userPassword === this.state.password) {

      this.setState({ userPassword :0 ,isValid: true, pageIndex: 1 })

    }
    else {
      this.setState({ userPassword :0, pageIndex: 2 })
    }

  }

  render() {
    return (
      <div className="wrapper">

        <Title header={this.state.texts[this.state.pageIndex].header}> </Title>
        <div className="center">
        {
          this.state.pageIndex === 0 ?
            <>
              <Form setUserPassword={(e) => this.setUserPassword(e)} validatePassword={() => this.validatePassword()}></Form>
              <Banner text={this.state.texts[this.state.pageIndex].bannerText}></Banner>
            </> :
            <Finish icon={this.state.texts[this.state.pageIndex].icon} class={this.state.texts[this.state.pageIndex].iconClass}></Finish>
        }
        </div>
        <div className="footer">
        <Button value={this.state.texts[0].shopAgain} click={()=> window.location.reload()} class="big"></Button>
        </div>
      </div>

    )
  }
}
