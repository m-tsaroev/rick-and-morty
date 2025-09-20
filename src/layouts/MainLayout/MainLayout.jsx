import { Header } from '@/components/layout/Header'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
  const { key } = useLocation()

  return (
    <>
      <Header />
      <AnimatePresence mode='wait'>
        <motion.main
          key={key}
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.15,
          }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export { MainLayout }
