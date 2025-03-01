import { motion } from 'framer-motion'
import { type PropsWithChildren } from 'react'

type Props = {}
const pageVariants = {
    initial: {opacity: 0, y: 50},
    animate: {opacity: 1, y: 0, transition: {duration: 0.5}},
    exit: {opacity: 0, y: -50, transition: {duration: 0.5}},
}
const PageWrapper = ({children}: PropsWithChildren) => {
  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
    >
        {children}
    </motion.div>
  )
}

export default PageWrapper