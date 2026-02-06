import React, { type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideProps {
    children: ReactNode;
    isActive: boolean;
    direction: number;
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
    }),
};

const Slide: React.FC<SlideProps> = ({ children, isActive, direction }) => {
    return (
        <AnimatePresence initial={false} custom={direction}>
            {isActive && (
                <motion.div
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute inset-0 flex flex-col items-center justify-center p-12 overflow-hidden"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Slide;
