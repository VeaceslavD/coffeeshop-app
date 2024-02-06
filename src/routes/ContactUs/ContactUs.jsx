import classes from "./ContactUs.module.css";

function ContactUs() {
    return (
        <div className={classes.contactUs}>
            <div className={classes.contactUsBackground}>
                <h1>Contact Us</h1>
            </div>

            <div className={classes.contactUsContainer}>
                <div className={classes.contactUsInformation}>
                    <h1>Feel free to send us a message</h1>
                    <ul>
                        <li>
                            <img src="/assets/media/locationcontact.svg" alt="location" />
                            Dacia Street. Chisinau, Moldova
                        </li>
                        <li>
                            <img src="/assets/media/callcontact.svg" alt="call" />
                            022-56-73-33
                        </li>
                        <li>
                            <img src="/assets/media/emailcontact.svg" alt="email" />
                            theCoffeeStore@gmail.com
                        </li>
                        <li>Monday - Friday: 09:00 AM - 08:00 PM</li>
                        <li>Saturday - Sunday : 12:00 PM - 02:00 PM</li>
                    </ul>
                </div>
                <form className={classes.contactUsForm}>
                    <div className={classes.formRegister}>
                        <label htmlFor="firstName">Name:</label>
                        <input type="text"
                            placeholder="..."
                            name="firstName" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="email">Email:</label>
                        <input type="text"
                            placeholder="..."
                            name="email" />
                    </div>

                    <div className={classes.formRegister}>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            placeholder="..."
                            name="message"
                        ></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ContactUs;