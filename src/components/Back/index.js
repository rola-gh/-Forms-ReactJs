import React from 'react';
import {Link} from "react-router-dom";

export default function Back(props) {
    const {} = props;
    return(
        <>
            <Link to='/'> <span>&#60;</span>Back</Link>
        </>
    )
}