import { motion } from "framer-motion";

function LoadingScreen(params) {
  return (
    <div className="overflow-clip">
      <motion.div
        initial={{}}
        animate={{
          y: "-100vh",
        }}
        transition={{
          when: "afterChildren",
          delay: 1.8,
          duration: 1.2,
          transitionEnd: { display: "none" },
        }}
        className="fixed flex w-screen h-screen bg-[#AA98A9] z-50"
      >
        <motion.div
          // initial={{
          //   backgroundColor: "#8D8079",
          //   zIndex: 50,
          // }}
          // animate={{
          //   backgroundColor: "#D8CAA9",
          // }}
          // transition={{
          //   delay: 0.5,
          //   duration: 1.2,
          //   transitionEnd: { display: "none" },
          // }}
        >
          <div className="absolute flex font-extralight text-7xl w-screen h-screen justify-center items-center">
            JBD
          </div>
          <div className="absolute px-10 py-3 text-4xl font-thin flex w-screen h-screen justify-end items-end">
            Loading...
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoadingScreen;
