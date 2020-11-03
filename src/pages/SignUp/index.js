import React from "react";
import Grid from 'react-css-grid'

import {ReactComponent as Vec} from '../../img/Vec.svg';
import {ReactComponent as Logo} from '../../img/logo.svg';
import Form from "./Form";
import Qoutes from "../../components/Qoutes";

import './Style2.css'

function SingUp() {
    return (
        <>
            <Grid width={320} grid-gab={10}>
                <aside className='left-side'>
                    <Logo className='logo' />
                    <Qoutes className='quot'/>
                    <Vec className={'right-img'}/>
                </aside>
                <section>
                    <Form/>
                </section>
            </Grid>
        </>
    );
}

export default SingUp;