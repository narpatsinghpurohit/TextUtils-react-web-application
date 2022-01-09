import React from 'react'

function Alert(props) {
    return (
        <div className='container my-2'>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert
