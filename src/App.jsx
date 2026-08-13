import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setShowPopup(true), 250);
  };

  return (
    <main className="app">
      {/* Ambient background */}
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      {/* Subtle stars */}
      <div className="stars">
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.span
            key={index}
            className="star"
            initial={{
              opacity: 0,
              x: `${Math.random() * 100}vw`,
              y: `${Math.random() * 100}vh`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              delay: Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.section
        className="content"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, letterSpacing: "0px" }}
          animate={{ opacity: 1, letterSpacing: "3px" }}
          transition={{ duration: 1 }}
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          Holaaaa <span>Saaa Saaaaaaa.</span>
        </motion.h1>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        ></motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.9,
            duration: 0.6,
            type: "spring",
            stiffness: 180,
          }}
        >
          <motion.button
            className="click-button"
            onClick={handleClick}
            whileHover={{
              scale: 1.04,
              y: -2,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <span>Clickkkk mehhhhhhh</span>
            <span className="arrow">→</span>

            <motion.div
              className="button-shine"
              animate={{ x: ["-120%", "120%"] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut",
              }}
            />
          </motion.button>
        </motion.div>

        <motion.p
          className="hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          daba naaa..
        </motion.p>
      </motion.section>

      {/* Click ripple */}
      <AnimatePresence>
        {clicked && !showPopup && (
          <motion.div
            className="click-ripple"
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 12, opacity: 0 }}
            transition={{ duration: 0.8 }}
            onAnimationComplete={() => setClicked(false)}
          />
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              className="popup"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.94,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.96,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 20,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setShowPopup(false)}
              >
                ×
              </button>

              <motion.div
                className="popup-icon"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✦
              </motion.div>

              <h2>
                Hello <span>kyutaaayyyy</span>
              </h2>

              <p className="question">jevlisss kaaaaa!?</p>

              <div className="divider" />

              <button
                className="okay-button"
                onClick={() => setShowPopup(false)}
              >
                I'm sorryy, lol ;)
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default App;
