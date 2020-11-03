import React, { Component } from "react";

import {Link ,withRouter } from "react-router-dom";
import Input from '../../components/Input'
import Back from '../../components/Back'
import google from '../../img/google.png';

class Form extends Component{
    state = {
        email: "",
        password: "",
        isPassShow:false,

        // redirectToReferrer: false
    };

    handleInputChange = e => {
        const {value , name} = e.target;
        this.setState({
            [name]: value
        });

    };

    handleSubmit = event => {
        event.preventDefault();
        // this.props.history.push('/welcome')

    };

    render() {
        return (
            <>
                <Back/>
                <h2 className={'text-center mainHeader'}>Register Individual Account!</h2>
                <p className={'text-center subHeader'}>For the purpose of gamers regulation, your details are required.</p>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        className='mb'
                        value ={this.state.email}
                        handleInputChange={this.handleInputChange}
                        placeholder='Write email address'
                        labelText='Email address'
                        name='email'
                        type='email'
                    />
                    <br/>
                        <Input labelText='Enter your password'
                               placeholder={'Password'}
                               type="password"
                               name ='password'
                               value={this.state.password}
                               handleInputChange={this.handleInputChange}
                        />
                    <br/>
                    <Input labelText='Repeat password'
                           placeholder={'Repeat password'}
                           type= "password"
                           name ='password'
                           value={this.state.password}
                           handleInputChange={this.handleInputChange}
                    />

                    <div className={'formGroup--custom'}>
                        <input type="submit" value="Register Account"/>
                    </div>
                    <div className={'text-center'}>
                        <button>
                            <img src={google} alt=''/>
                            Login
                        </button>
                    </div>
                </form>
            </>
        )}
}

export default Form;

