import {useState} from 'react';
import "./SellCards.css";
import { SellCardss } from '../../dataBase';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LoadSpinners from './../LoadSpinners/LoadSpinners'


const SellCards = () => {
    const [imageshow, setImageShow] = useState(false)
    const imageLoad = () => setImageShow(true)
    return (
        <>
            {
                SellCardss.map(card => (
                    <Link key={card.id} to="/products">
                        <div className='ShopingCard'>
                            <h5>{card.title}</h5>
                            <h6>Best Gaming Headphone</h6>
                            <div className='ShopingCardImage'>
                                <img onLoad={imageLoad} src={card.img} alt="#" />
                                {
                                    !imageshow && (
                                        <LoadSpinners />
                                    )
                                }
                            </div>
                            <div className='ShopingCardPrice'>
                                <span ><AddCircleOutlineIcon style={{ fontSize: "2.8rem", cursor: "pointer" }} className='text-sky-600'/></span>
                                <span className='text-sky-600'>{card.price}</span>
                                <span className='text-sky-600'>تومان</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </>

    )
}

export default SellCards