import { Link } from "react-router-dom";
import classes from "./Footer.module.css"

function Footer() {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footerInformation}>
                <div className={classes.contacts}>
                    <Link to="/"><img className={classes.footerLogo} src="/assets/media/logo.png" alt="Logo" /></Link>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Monday - Friday, 9 AM - 3 PM</li>
                        <li>
                            <img src="/assets/media/email.svg" alt="emailIcon" />
                            email_address@gmail.com
                        </li>
                        <li>
                            <img src="/assets/media/telephone.svg" alt="telephoneIcon" />
                            +373 78-330-245
                        </li>
                        <li>
                            <img src="/assets/media/telephone.svg" alt="telephoneIcon" />
                            +373 69-589-333
                        </li>
                    </ul>
                </div>

                <div className={classes.footerInfo}>
                    <h2>Information</h2>
                    <ul>
                        <li>About Us</li>
                        <li>More Search</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className={classes.footerInfo}>
                    <h2>Helpful Links</h2>
                    <ul>
                        <li>Services</li>
                        <li>Term & Condition</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className={classes.socials}>
                <img src="/assets/media/facebook.svg" alt="facebookIcon" />
                <img src="/assets/media/twitter.svg" alt="twitterIcon" />
                <img src="/assets/media/instagram.svg" alt="instagramIcon" />
                <img src="/assets/media/youtube.svg" alt="youtubeIcon" />
            </div>
        </footer>
    )
};

export default Footer;