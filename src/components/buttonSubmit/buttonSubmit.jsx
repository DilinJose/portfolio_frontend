import React from 'react'

const ButtonSubmit = () => {
    const style = {
        backgroundColor: "black",
        width:'150px',
        height:'50px',
        borderRadius:'10px',
        color:'white'
    }
    return (
        <button style={style} type='submit'>Submit</button>
    )
}

export default ButtonSubmit