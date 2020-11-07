import React from 'react';
import {Link ,withRouter} from "react-router-dom";

function Back(props) {
    const {} = props;
    return(
        <>
            {/*<Link to='/'> <span>&#60;</span>Back</Link>*/}
            <div  onClick={() => props.history.goBack()}>
                <span>&#60;</span>Back
            </div>
        </>
    )
}
export default withRouter(Back);
