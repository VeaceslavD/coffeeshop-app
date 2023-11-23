import { Link } from "react-router-dom";
import classes from "./Footer.module.css"
import Logo from "../../assets/media/logo.png";
import emailIcon from "../../assets/media/email.svg";
import telephoneIcon from "../../assets/media/telephone.svg";
import facebookIcon from "../../assets/media/facebook.svg";
import twitterIcon from "../../assets/media/twitter.svg";
import instagramIcon from "../../assets/media/instagram.svg";
import youtubeIcon from "../../assets/media/youtube.svg";

function Footer() {
    return (
        <footer className={classes.footerContainer}>
            <div className={classes.footerInformation}>
                <div className={classes.contacts}>
                    <Link to="/"><img className={classes.footerLogo} src={Logo} alt="Logo" /></Link>
                    <h2>Contact Us</h2>
                    <ul>
                        <li>Monday - Friday, 9 AM - 3 PM</li>
                        <li>
                            <img src={emailIcon} alt="emailIcon" />
                            email_address@gmail.com
                        </li>
                        <li>
                            <img src={telephoneIcon} alt="telephoneIcon" />
                            +373 78-330-245
                        </li>
                        <li>
                            <img src={telephoneIcon} alt="telephoneIcon" />
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
                <img src={facebookIcon} alt="facebookIcon" />
                <img src={twitterIcon} alt="twitterIcon" />
                <img src={instagramIcon} alt="instagramIcon" />
                <img src={youtubeIcon} alt="youtubeIcon" />
            </div>
        </footer>
    )
};

export default Footer;