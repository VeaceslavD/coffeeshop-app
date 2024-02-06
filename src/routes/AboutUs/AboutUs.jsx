import classes from "./AboutUs.module.css";

function AboutUs() {
    return (
        <div className={classes.aboutUs}>
            <div className={classes.theBestCoffeeStore}>
                <h1>Welcome to Best coffee store</h1>
                <p>
                    We are passionate about bringing you the finest coffee
                    experience. Our commitment to quality extends to the carefully curated selection of
                    premium coffee brands, including Lavazza, Julius Meinl, Melitta, and Illy.
                </p>
                <p>
                    Our journey began with a simple mission - to provide coffee enthusiasts with access to
                    exceptional coffee products. We understand that coffee is more than just a beverage;
                    it's a ritual, a moment of indulgence, and a source of inspiration.
                </p>
            </div>
            <div className={classes.aboutUsContainer}>
                <div className={classes.ourCoreValues}>
                    <h2>Our Core Values</h2>
                    <ul>
                        <li>
                            <img src="/assets/media/quality.png" alt="frame" />
                            <h3>Quality</h3>
                            <p>We only offer the highest quality coffee products from renowned brands</p>
                        </li>
                        <li>
                            <img src="/assets/media/variety.png" alt="frame" />
                            <h3>Variety</h3>
                            <p>Explore a diverse range of flavors and blends to suit every palate</p>
                        </li>

                        <li>
                            <img src="/assets/media/frame 44.png" alt="frame" />
                            <h3>Satisfaction</h3>
                            <p>Your satisfaction is our priority, and we strive to exceed your expectations</p>
                        </li>
                        <li>
                            <img src="/assets/media/frame 44.png" alt="frame" />
                            <h3>Expertise</h3>
                            <p>Our team is knowledgeable and passionate about coffee</p>
                        </li>
                    </ul>
                </div>

                <div className={classes.ourGallery}>
                    <div className={classes.gelleryFirstContainer}>
                        <img src="/assets/media/firstImageGalery.jpg" alt="firstImageGallery" />
                    </div>

                    <div className={classes.gellerySecondContainer}>
                        <img src="/assets/media/galleryimage1.webp" alt="galleryimage1" />
                        <img src="/assets/media/galleryimage2.webp" alt="galleryimage1" />
                        <img src="/assets/media/galleryimage3.webp" alt="galleryimage1" />
                        <img src="/assets/media/galleryimage4.webp" alt="galleryimage1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;