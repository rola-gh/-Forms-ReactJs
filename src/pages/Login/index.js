import React from "react";
import Grid from 'react-css-grid'

import {ReactComponent as Scene} from '../../img/scene.svg';
import {ReactComponent as Logo} from '../../img/logo.svg';
import Form from "./Form";
import Qoutes from "../../components/Qoutes";

import './Style.css'

function SingUp(props) {
    return (
        <>
            <Grid width={320} grid-gab={0}>
                <aside>
                    <Logo className='logo' />
                    <Qoutes className='quot'/>
                    <Scene className={'right-img'}/>
                </aside>
                <section>
                    <Form {...props}/>
                </section>
            </Grid>
        </>
    );
}

export default SingUp;