import React from 'react'
import { Button } from 'react-bootstrap'

const Btn = ({ getUser, handleClick }) => {
    handleClick = () => {
        getUser()
    }
    return (
        <Button onClick={handleClick} className="btn btn-success">RANDOM</Button>

    )
}

export default Btn