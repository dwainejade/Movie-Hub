import { useEffect } from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import plants from '../../images/plants.png';

const leftVariants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .4,
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const rightVariants = {
    hidden: {
        opacity: 0,
        x: 30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .1,
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Plants = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <div className="project-b">
            <h3>Secret Family Recipe</h3>
            <h4>Front-End Developer</h4>
            <div className="project-wrapper">
                <motion.div className="picture-wrapper"
                    variants={leftVariants}
                    animate={controls}
                    initial="hidden"
                    ref={ref}
                >
                    <img src={plants} alt="phone with pic of recipe website" />
                    <div className='button-wrapper'>
                        <Button a href='https://watermy-plants.netlify.app' className='btn website-btn' variant='danger' >Visit Website</Button>
                        <Button id="code-btn" a href='https://github.com/dwainejade/water-my-plants-backend' className='btn website-btn' variant='primary' >View Code</Button>
                    </div>
                </motion.div>
                <motion.div className="caption-wrapper"
                    variants={rightVariants}
                    animate={controls}
                    initial="hidden"
                >
                    <p className="caption">This app is for all the plant parents to keep track of when each of their children need to be watered. Users can store, update, and remove plants from the databas. <br /> I created the backend using Node.js and SQL to store user and plant data. The users password is hashed using bcrypt.js befored being stored.</p>
                    <div className="stacks">
                        <Badge pill variant="secondary">Node.js</Badge>
                        <Badge pill variant="secondary">Express.js</Badge>
                        <Badge pill variant="secondary">SQLite</Badge>
                        <Badge pill variant="secondary">JavaScript</Badge>
                        <Badge pill variant="secondary">Heroku</Badge>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
export default Plants;
