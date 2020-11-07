import React, { Component } from "react";
import Grid from 'react-css-grid';
import {Link ,withRouter } from "react-router-dom";
import axios  from 'axios'
import loginSchema , {fieldSchema} from './loginValidate'
import Input from '../../components/Input'
import Button from '../../components/Button'
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
        },
        error:""
    };

    handleInputChange = e => {
        const target = e.target;
        const value =  target.value;
        const name = target.name;

        this.setState({[name]: value},
            ()=> {
            fieldSchema(name)
                .validate(value)
                .then(()=>{
                    this.setState(prevState =>{
                        const {errors} = prevState;
                        return {errors : {...errors , [name]:""}};
                    });
                })
                .catch((err)=>{

                this.setState(prevState =>{
                    const {errors} = prevState;
                    return {errors : {...errors , [name]:err.message}};
                });
            });
            } //implement this logic after state finished
            );
    };

    validateForm = (data)=>{
        loginSchema.validate(data , {abortEarly:false})
            .then(()=>{
                console.log('is valid');
                this.setState({ errors:{} , error:''})

            }).catch((err)=>{
            const errors = {};
            err.inner.forEach(({message, params })=>{
                errors[params.path] = message;
            });
            this.setState({errors , error:'check the fields '})
        })};

    handleSubmit = event => {
        event.preventDefault();
        const {email , password , error } = this.state;
        this.validateForm( {email , password });

        //axios  (send request to api )
        if (!error){
            //post data to api
            axios.post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup",
                {email, password})
                .then(res => {
                    const user=res.data;
                    console.log(user);
            })
                .catch(err => {
                    let error = err.response.data.error;
                    if (error.includes('duplicate')){
                        error = "Email is exist"
                    }
                    this.setState({error})

            })
        }
    };

    passwordVisibility =()=> {
        const {isPassShow} = this.state;
        this.setState({isPassShow : !isPassShow})
    };

    render() {
        const {isPassShow , error} = this.state;
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
                        {error&&<span>{error}</span>}
                    </div>
                    {/*<Button className={'formGroup--custom'}*/}
                    {/*        type="submit" value="Login"*/}
                    {/*/>*/}
                    <p className={'text-center last-p'}>Don't  have an account?
                        <Link  to='/signup' >Sign Up For free</Link>
                    </p>
                </form>
            </>
        )}
}

export default Form;

