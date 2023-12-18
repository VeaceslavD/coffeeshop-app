import classes from "./Start.module.css";

function Start() {
    return (
        <section className={classes.start}>
            <h1>START YOUR DAY WITH A BLACK COFFEE</h1>

            <div className={classes.lineImg}>
                <img src="/assets/media/Line 7.png" alt="lineIcon" />
                <img src="/assets/media/Line 7.png" alt="lineIcon" />
            </div>

            <div className={classes.startDescr}>
                <h2>LOCALLY SOURCE</h2>

                <img src="/assets/media/Ellipse 1.png" alt="ellipseIcon" />

                <h2>ROASTED WITH LOVE</h2>
            </div>
        </section>
    )
};

export default Start;