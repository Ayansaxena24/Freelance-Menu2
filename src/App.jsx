import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import Sample1 from "../src/assets/Sample1.jpg";
import Sample2 from "../src/assets/Sample2.jpg";
import Sample3 from "../src/assets/Sample3.jpg";
import finallogo from "../src/assets/finallogo.gif";
import introaudio from "../src/assets/introaudio.mp3";
import useSound from "use-sound";
import { motion } from "framer-motion";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [play, { stop }] = useSound(introaudio, { volume: 0.5 });

  useEffect(() => {
    // Start playing the audio when the component mounts
    play();

    // Set a timeout to stop the audio and update loading state after 3 seconds
    const timeoutId = setTimeout(() => {
      // stop();
      setLoading(false);
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [play, stop]);

  return (
    <div className="overflow-hidden min-w-screen max-w-screen mini-h-screen max-h-screen">
      {loading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <img src={finallogo} onClick={play} className="w-1/2 h-1/2 scale-150" alt="loading" />
          <audio autoPlay loop muted>
            <source src={introaudio} type="audio/mp3" />
          </audio>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            effect={"cube"}
            grabCursor={true}
            loop={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[EffectCube, Pagination]}
            className="swiper"
          >
            <SwiperSlide>
              <img className="w-screen h-screen " src={Sample2} alt="slide1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-screen h-screen " src={Sample1} alt="slide2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-screen h-screen " src={Sample3} alt="slide3" />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      )}
    </div>
  );
}
