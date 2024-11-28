import { ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "motion/react"

const Reveal = ({children}:{children:ReactNode}) => {
  
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})
  const mainControls = useAnimation()
  useEffect(()=>{
    if(isInView){
      mainControls.start('visible')
    }
  },[isInView])

  return (
    <div ref={ref} className="w-full ">
      <motion.div 
        variants={{
          hidden:{opacity:0,y:80},
          visible:{opacity:1,y:0}
        }}  
        initial='hidden'
        animate={mainControls}
        transition={{duration:0.8,delay:0.3}}
      >
        {children}
      </motion.div>

    </div>
  )
}

export default Reveal