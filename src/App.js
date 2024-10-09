import logo from "./logo.svg";
import "./App.css";
import Channel from "./comps/Channel";
import LoadingScreen from "./comps/LoadingScreen";
import tree from "./images/1056946.png";
import TopBar from "./comps/TopBar";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App overflow-hidden">
      <LoadingScreen />
      <TopBar />
      <div className="flex flex-row gap-24 px-10 h-screen w-screen justify-center items-center text-white bg-neutral-200">
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 2.5,
            duration: 0.66,
          }}
          className="flex w-96 rounded-full z-10"
          src={require("./images/aa7bb4a41369a089f8218389059acee9.jpg")}
        />
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 2.8,
            duration: 0.66,
          }}
          className="w-[600px] rounded-2xl bg-[#123524] bg-opacity-30"
        >
          <div className=" absolute backdrop-blur-sm" />
          <div className="flex px-10 pt-10 text-[#123524] text-8xl text-left" >
            Gurkirat Singh
          </div>
          <div className="flex p-10 text-xl text-left" >
            ...a motivated Full Stack Developer with expertise in
            backend technologies like Spring Boot and Python. Passionate about
            solving real-world problems, he's currently building a regex engine
            and enjoys working with dynamic tools like React and Framer Motion...
          </div>
          <div className="flex px-10 pb-10 w-full h-fit justify-end items-end" >-chatGPT</div>
        </motion.div>
      </div>
      <Channel />
    </div>
  );
}

export default App;
