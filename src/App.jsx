import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import './App.css'
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import Sample1 from "../src/assets/Sample1.jpg";
import Sample2 from "../src/assets/Sample2.jpg";
import Sample3 from "../src/assets/Sample3.jpg";
import finallogo from "../src/assets/finallogo.gif";
import { motion } from "framer-motion";

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="overflow-hidden min-w-screen max-w-screen mini-h-screen max-h-screen">
      {loading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <img src={finallogo} className="w-1/2 h-1/2 scale-150" />
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
            // pagination={true}
            modules={[EffectCube, Pagination]}
            className="swiper"
          >
            {/* <SwiperSlide><img className='w-screen h-screen' src={home} /> */}
            {/* <p className='flex justify-center text-md text-white absolute top-20 right-0 left-0 animate-bounce'>Swipe Right ---->></p> */}
            {/* </SwiperSlide> */}
            <SwiperSlide>
              <img className="w-screen h-screen " src={Sample2} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-screen h-screen " src={Sample1} />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-screen h-screen " src={Sample3} />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      )}
    </div>
  );
}
