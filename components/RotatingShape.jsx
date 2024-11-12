'use client';
import { motion, animate } from 'framer-motion';

const RotatingShape = ({ content, direction, duration }) => {
    // sets the rotation animation
    const rotationAnimation = {
        animate: {
            // 360 degree rotation based on direction
            rotate: direction === "right" ? 360 : direction === "left" ? -360 : 0,
            transition: {
                duration: duration, // duration of a full rotation
                ease: "linear", // smooth rotation
                repeat: Infinity, // infinity repeat
            },
        },
    };

    return (
        <motion.div
            variants={rotationAnimation}
            animate='animate'
        >
            {content}
        </motion.div>
  )
}

export default RotatingShape;