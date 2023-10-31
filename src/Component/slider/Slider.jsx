import React, { useState } from 'react';
import "./slider.css";
import { AnimatePresence, motion } from "framer-motion";
import one from '../../../public/image/Oneo.jpg'
import two from '../../../public/image/twoo.jpg'
import three from '../../../public/image/threeo.jpg'
import four from '../../../public/image/fouro.jpg'
import five  from '../../../public/image/fiveo.jpg'
import six from '../../../public/image/sixo.jpg'



const Slider = () => {
    const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const items = [<img   src={one} alt="" />, <img src={two} alt="" />,<img src={three} alt="" />, <img src={four} alt="" />,<img src={five} alt="" />,<img src={six} alt="" />];

  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % items.length) + items.length) % items.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  const visibleItems = [...items, ...items].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

    return (
        <div className="main-wrapper">
        <div className="wrapper">
          {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleItems.map((item) => {
              // The layout prop makes the elements change its position as soon as a new one is added
              // The key tells framer-motion that the elements changed its position
              return (
                <motion.div
                  className="card"
                  key={item}
                  layout
                  custom={{
                    direction,
                    position: () => {
                      if (item === visibleItems[0]) {
                        return "left";
                      } else if (item === visibleItems[1]) {
                        return "center";
                      } else {
                        return "right";
                      }
                    }
                  }}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 1 }}
                >
                  {item}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
        <div className="buttons">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => handleClick(-1)}
           
          >
            ◀︎
          </motion.button>
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => handleClick(1)}>
            ▶︎
          </motion.button>
        </div>
      </div>
    );
};

const variants = {
    enter: ({ direction }) => {
      return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
    },
    center: ({ position, direction }) => {
      return {
        scale: position() === "center" ? 1 : 0.7,
        x: 0,
        zIndex: getZIndex({ position, direction }),
        opacity: 1
      };
    },
    exit: ({ direction }) => {
      return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
    }
  };
  
  function getZIndex({ position, direction }) {
    const indexes = {
      left: direction > 0 ? 2 : 1,
      center: 3,
      right: direction > 0 ? 1 : 2
    };
    return indexes[position()];
  }
  

export default Slider;