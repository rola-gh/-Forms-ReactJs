import React, { Component } from "react";
import Grid from 'react-css-grid';
import {Link ,withRouter } from "react-router-dom";
import * as yup from 'yup'

import Input from '../../components/Input'
import {ReactComponent as Vector } from '../../img/Vector.svg';
import {ReactComponent as EyeSlash} from '../../img/eyeSlash.svg';
import google from '../../img/google.png';
import twitter from '../../img/twitter.png';
import linkedIn from '../../img/linkedIn.png';
import github from '../../img/github.png';

class Form extends Component{
    state = {
        email: "",
        password: "",
        isPassShow:false,
        errors:{
            email:'',
            password:''
        }
    };

    handleInputChange = e => {
        const target = e.target;
        const value =  target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    };

    handleSubmit = event => {
        event.preventDefault();
        const {email , password } = this.state;

        //Validation
        const loginSchema = yup.object().shape({
            email: yup.string().email().required('Please Enter Your Email !'),
            password:yup.string().required('Please Enter Your Password !'),
        });

        loginSchema.validate( {email , password } , {abortEarly:false})
            .then(()=>{
                console.log('is valid')
            }).catch((err)=>{
                const errors = {};
                err.inner.forEach(({message, params })=>{
                    errors[params.path] = message;
                })
            this.setState({errors})
        })
    };

    passwordVisibility =()=>{
        const {isPassShow} = this.state;
        this.setState({isPassShow : !isPassShow})
    };


    render() {
        const {isPassShow} = this.state;
        return (
            <>
                <h2 className={'text-center mainHeader'}>Join the game!</h2>
                <p className={'text-center subHeader'}>Go inside the best gamers social network!</p>
                <Grid width={20}>
                    <div className={'socialWrapper'}>
                        <div className="socialIcon">
                            <img src={google} alt=""/>
                        </div>
                        <div className="socialIcon">
                            <img src={twitter} alt=""/>
                        </div>
                        <div className="socialIcon">
                            <img src={linkedIn} alt=""/>
                        </div>
                        <div className="socialIcon">
                            <img src={github} alt=""/>
                        </div>
                    </div>
                </Grid>
                <p className={'divider'}>Or</p>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        className='mb'
                        value ={this.state.email}
                        handleInputChange={this.handleInputChange}
                        placeholder='Write your email'
                        labelText='Your email'
                        name='email'
                        type='email'
                        error={this.state.errors.email}
                    />
                    <br/>
                    <div>
                    <Input labelText='Enter your password'
                           placeholder={'•••••••••'}
                           type={(isPassShow) ? "text" : "password"}
                           name ='password'
                           value={this.state.password}
                           handleInputChange={this.handleInputChange}
                           error={this.state.errors.password}

                    />
                    {isPassShow ? <EyeSlash onClick ={this.passwordVisibility} className={'showPass'}/>
                        : <Vector onClick ={this.passwordVisibility} className={'showPass'}/>}

                    </div>

                    <div className={'formGroup--custom'}>
                        <input type="submit" value="Login"/>
                    </div>
                    <p className={'text-center last-p'}>Don't  have an account? <Link  to='/signup' >Sign Up For free</Link></p>
                </form>
            </>
        )}
}

export default Form;

