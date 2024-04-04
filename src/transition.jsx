import { motion} from "framer-motion";
import './index.css';

const transition = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="flash"
                initial={{opacity: 1}}
                animate={{opacity: 0}}
                exit={{opacity: 0}}
                transition={{duration: 1, times: [0, 1, 0]}}
            />
        </>
    );
};

export default transition;