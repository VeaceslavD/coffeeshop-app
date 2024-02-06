import { useNavigate } from "react-router-dom";
import classes from "./CartTotal.module.css";


function CartTotal(props) {
    const navigate = useNavigate();

    return (
        <div className={classes.cartTotal}>
            <h1>Total</h1>

            <h3>Sub-total<p>{props.subTotal} lei</p></h3>

            <h3>Delivery<span>Standart delivery (Free)</span></h3>

            <button onClick={() => navigate('/checkout')}>Checkout</button>

            <div className={classes.payment}>
                <h4>We accept</h4>
                <div className={classes.imgCards}>
                    <img src="/assets/media/Visa.svg" alt="visa" />
                    <img src="/assets/media/paynet.svg" alt="paynet" />
                    <img src="/assets/media/Mastercard.svg" alt="mastercard" />
                </div>
            </div>
        </div>
    )
}

export default CartTotal;