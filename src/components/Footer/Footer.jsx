import { Link } from "react-router-dom";
import classes from "./Footer.module.css"

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.footerContainer}>
                <div className={classes.socials}>
                    <Link to='/' className={classes.footerLogo}>
                        <img src="/assets/media/image 48.png" alt="logo" />
                        <h2><span>The</span> Coffee Store </h2>
                    </Link>

                    <h2>Sip, Savor, and Be Captivated by Coffee Store Mastery.</h2>

                    <div className={classes.socialsLinks}>
                        <Link>
                            <img src="/assets/media/facebook.svg" alt="facebook" />
                        </Link>
                        <Link>
                            <img src="/assets/media/whatsapp.svg" alt="whatsapp" />
                        </Link>
                        <Link>
                            <img src="/assets/media/twitter.svg" alt="twitter" />
                        </Link>
                        <Link>
                            <img src="/assets/media/instagram.svg" alt="instagram" />
                        </Link>
                        <Link>
                            <img src="/assets/media/snapchat.svg" alt="snapchat" />
                        </Link>
                    </div>
                </div>

                <div className={classes.footerInfo}>
                    <div className={classes.footerInfoContainer}>
                        <div className={classes.information}>
                            <h2>About Company</h2>
                            <ul>
                                <li>
                                    <img src="/assets/media/location.svg" alt="location" />
                                    Dacia Street. Chisinau, Moldova
                                </li>
                                <li>
                                    <img src="/assets/media/call.svg" alt="call" />
                                    022-56-73-33
                                </li>
                                <li>
                                    <img src="/assets/media/email.svg" alt="email" />
                                    theCoffeeStore@gmail.com
                                </li>
                            </ul>
                        </div>

                        <div className={classes.information}>
                            <h2>Useful Links</h2>
                            <ul>
                                <li>Contact Us</li>
                                <li>About Us</li>
                            </ul>
                        </div>

                        <div className={classes.information}>
                            <h2>Opening Hours</h2>
                            <ul>
                                <li>Monday - Friday: 09:00 AM - 08:00 PM</li>
                                <li>Saturday - Sunday : 12:00 PM - 02:00 PM</li>
                            </ul>
                        </div>
                    </div>

                    <div className={classes.copyrightPrivacyTerms}>
                        <p>© Copyright Coffee Store. All right reserved.</p>

                        <div className={classes.privacyTerms}>
                            <p>Privacy Policy</p>
                            <p>Support</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;