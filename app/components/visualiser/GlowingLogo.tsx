import Logo from "../Logo";
import { motion } from 'framer-motion';

export const pulseAnimation = {
    animate: {
        opacity: [0.5, 0.9, 0.5],
    },
    transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

export default function GlowingLogo() {
    return (
        <>
            <motion.div
                {...pulseAnimation}
                style={{ filter: 'blur(16px)' }}
                className="absolute inset-0 w-full h-full opacity-40"
            >
                <Logo className="w-full h-full" />
            </motion.div>
            <Logo className="relative w-full h-full opacity-10" />
        </>
    )
}
