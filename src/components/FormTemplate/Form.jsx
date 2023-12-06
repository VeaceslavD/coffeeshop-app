import { useEffect, useState } from "react";
import classes from "./Form.module.css"

function Form(props) {
    const userDetails = {
        fName: '',
        lName: '',
        city: '',
        address: '',
        mobile: '',
        emailAddress: '',
        userMessage: '',
        paymentMethod: '',
    };
    const [inputValue, setInputValue] = useState(userDetails);

    useEffect(() => {
        props.handlePlaceOrder(inputValue);
    }, [inputValue])


    return (
        <form className={classes.form}>
            <div className={classes.deliveryAddress}>
                <div className={classes.deliveryInfo}>
                    <div className={classes.about}>
                        <label htmlFor="First Name">First Name *</label>
                        <input type="text"
                            value={inputValue.fName}
                            placeholder="First Name..."
                            onChange={(event) => setInputValue({ ...inputValue, fName: event.target.value })}
                        />
                    </div>

                    <div className={classes.about}>
                        <label htmlFor="Last Name">Last Name *</label>
                        <input type="text"
                            value={inputValue.lName}
                            placeholder="Last Name..."
                            onChange={(event) => setInputValue({ ...inputValue, lName: event.target.value })}
                        />
                    </div>
                </div>

                <div className={classes.city}>
                    <label htmlFor="">City *</label>
                    <input type="text"
                        value={inputValue.city}
                        placeholder="City..."
                        onChange={(event) => setInputValue({ ...inputValue, city: event.target.value })}
                    />
                </div>

                <div className={classes.address}>
                    <label htmlFor="Address">Address *</label>
                    <input type="text"
                        value={inputValue.address}
                        placeholder="Address..."
                        onChange={(event) => setInputValue({ ...inputValue, address: event.target.value })}
                    />
                </div>

                <div className={classes.deliveryInfo}>
                    <div className={classes.about}>
                        <label htmlFor="mobile">Mobile *</label>
                        <input type="text"
                            value={inputValue.mobile}
                            placeholder="Mobile ..."
                            onChange={(event) => setInputValue({ ...inputValue, mobile: event.target.value })}
                        />
                    </div>

                    <div className={classes.about}>
                        <label htmlFor="emaiAddress">Email address*</label>
                        <input type="text"
                            value={inputValue.emailAddress}
                            placeholder="Email address ..."
                            onChange={(event) => setInputValue({ ...inputValue, emailAddress: event.target.value })}
                        />
                    </div>
                </div>

                <div className={classes.additionalInfo}>
                    <label htmlFor="Additional Information">Additional Information *</label>
                    <textarea name="Additional information"
                        value={inputValue.userMessage}
                        placeholder="Leave a message...!"
                        onChange={(event) => setInputValue({ ...inputValue, userMessage: event.target.value })}
                    ></textarea>
                </div>
            </div>

            <div className={classes.paymentMethod}>
                <h1>Payment method</h1>

                <div className={classes.paymentMethodContainer}>
                    <select value={inputValue.paymentMethod} onChange={(event) => setInputValue({ ...inputValue, paymentMethod: event.target.value })}>
                        <option value="">Choose payment method</option>
                        <option value="cash">Cash</option>
                        <option value="courierCard">Courier - Credit Card</option>
                        <option value="online">Online - Card</option>
                    </select>
                </div>
            </div>
        </form>
    )
};

export default Form;