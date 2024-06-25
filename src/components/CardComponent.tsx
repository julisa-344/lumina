import Button from './Button';
import './../theme.css';
import { useNavigate } from "react-router-dom";

type CardProps = {
    img: string;
    name: string;
    price: number;
    description?: string;
};

function Card({ img, name, price, description,}: CardProps & { [key: string]: any }) {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/detail-product", 
        { state: { img, name, price, description} });
      };
    return (
        <div className="card" >
            <img className='img-product' src={img} alt="producto" />
            <h3 className='sub-title'>{name}</h3>
            <p className='text'>S/. {price}</p>
            <Button onClick={handleNavigate} text="Comprar" />
        </div>
    );
}

export default Card;
