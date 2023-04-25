import React from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const TopButton = () => {
    return (
        <div style={{ textAlign: "center" }} className="Top">
            <a href="#home">
                <Button style={{margin:"1rem 0", padding: "1rem", borderRadius: "50%" }} variant="primary"><ArrowCircleUpIcon style={{ color: "black" }} /></Button>
            </a>
            <span style={{ color: "red", marginRight:"1rem", fontSize: "20px" }}>بازگشت به بالا
            </span>
        </div>
    )
}

export default TopButton