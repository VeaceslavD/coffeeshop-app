import { useState } from "react";
import classes from "./Form.module.css"

function Form(props) {
    const [inputValue, setInputValue] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        props.handlePlaceOrder(inputValue);
    };

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.deliveryAddress}>
                {props.currentUser === null && (
                    <>
                        <div className={classes.deliveryInfo}>
                            <div className={classes.about}>
                                <label htmlFor="firstName">First Name *</label>
                                <input type="text"
                                    name="firstName"
                                    required
                                    value={inputValue.fName}
                                    placeholder="First Name..."
                                    onChange={(event) => setInputValue({ ...inputValue, firstName: event.target.value })}
                                />
                            </div>

                            <div className={classes.about}>
                                <label htmlFor="lastName">Last Name *</label>
                                <input type="text"
                                    name="lastName"
                                    required
                                    value={inputValue.lName}
                                    placeholder="Last Name..."
                                    onChange={(event) => setInputValue({ ...inputValue, lastName: event.target.value })}
                                />
                            </div>
                        </div>

                        <div className={classes.deliveryInfo}>
                            <div className={classes.about}>
                                <label htmlFor="mobile">Mobile *</label>
                                <input type="tel"
                                    name="mobile"
                                    required
                                    value={inputValue.mobile}
                                    placeholder="Mobile ..."
                                    onChange={(event) => setInputValue({ ...inputValue, phone: event.target.value })}
                                />
                            </div>

                            <div className={classes.about}>
                                <label htmlFor="email">Email address*</label>
                                <input type="email"
                                    name="email"
                                    required
                                    value={inputValue.emailAddress}
                                    placeholder="Email address ..."
                                    onChange={(event) => setInputValue({ ...inputValue, emailAddress: event.target.value })}
                                />
                            </div>
                        </div>
                    </>)}

                <div className={classes.city}>
                    <label htmlFor="city">City *</label>
                    <input type="text"
                        name="city"
                        required
                        value={inputValue.city}
                        placeholder="City..."
                        onChange={(event) => setInputValue({ ...inputValue, city: event.target.value })}
                    />
                </div>

                <div className={classes.address}>
                    <label htmlFor="address">Address *</label>
                    <input type="text"
                        name="address"
                        required
                        value={inputValue.address}
                        placeholder="Address..."
                        onChange={(event) => setInputValue({ ...inputValue, address: event.target.value })}
                    />
                </div>

                <div className={classes.additionalInfo}>
                    <label htmlFor="Additional Information">Additional Information *</label>
                    <textarea name="Additional information"
                        value={inputValue.userMessage}
                        placeholder="Leave a message...!"
                        onChange={(event) => setInputValue({ ...inputValue, userMessage: event.target.value })}
                    ></textarea>
                </div>
            </div >

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

            </div >
            <button type="submit">Buy now</button>
        </form >
    )
};

export default Form;