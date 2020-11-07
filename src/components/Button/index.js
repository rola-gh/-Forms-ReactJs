import React from "react";

export default function Button(props) {
    const {type , value} = props;
    return(
        <>
            <div>
                <input
                    type={type}
                    value={value}
                />
            </div>
        </>
    )
}
