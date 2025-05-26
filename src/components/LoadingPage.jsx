import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Loader2 } from 'lucide-react'; // Icons for an academy theme

const LoadingPage = () => {
  // Variants for staggered animation (these are Framer Motion specific, not CSS)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemSlideIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 10, stiffness: 100 } },
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      // MODIFIED BACKGROUND HERE
      background: 'linear-gradient(to right, #1a1a1a, #8b4513)', /* Dark grey/black to saddle brown/orange */
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 50,
      fontFamily: 'sans-serif',
      overflow: 'hidden',
    }}>
      {/* Background abstract elements - Adjusted for new background */}
      <motion.div
        style={{
          position: 'absolute',
          width: '18rem',
          height: '18rem',
          backgroundColor: '#ff8c00', /* DarkOrange, a brighter orange */
          borderRadius: '9999px',
          mixBlendMode: 'screen', /* Changed blend mode for better visibility on dark gradient */
          filter: 'blur(4rem)', /* Slightly more blur */
          opacity: 0.3, /* Increased opacity slightly */
          animation: 'pulse-slow-1 18s ease-in-out infinite alternate',
        }}
        initial={{ x: -300, y: -300 }}
        animate={{ x: [-300, 100, -300], y: [-300, 50, -300] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        style={{
          position: 'absolute',
          width: '20rem',
          height: '20rem',
          backgroundColor: '#ffa500', /* Orange, a slightly different orange */
          borderRadius: '9999px',
          mixBlendMode: 'screen', /* Changed blend mode */
          filter: 'blur(4rem)', /* Slightly more blur */
          opacity: 0.25, /* Increased opacity slightly */
          animation: 'pulse-slow-2 20s ease-in-out infinite alternate',
        }}
        initial={{ x: 300, y: 300 }}
        animate={{ x: [300, -100, 300], y: [300, -50, 300] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
      ></motion.div>

      {/* Centered Content Container */}
      <motion.div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          padding: '1.5rem',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
          backgroundColor: 'rgba(31, 41, 55, 0.6)', /* bg-gray-800 bg-opacity-60 */
          borderRadius: 0,
          boxShadow: 'none',
          backdropFilter: 'blur(4px)',
          border: 'none',
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* Academy Logo Animation */}
        <motion.div
          variants={itemSlideIn}
          style={{
            position: 'relative',
            width: '8rem',
            height: '8rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '9999px',
            backgroundImage: 'linear-gradient(to bottom right, #fb923c, #c2410c)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          }}
        >
          <GraduationCap style={{ width: '4rem', height: '4rem', color: 'white', animation: 'bounce-slow 2s ease-in-out infinite' }} />
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              border: '4px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '9999px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Animated Welcome Text */}
        <motion.p
          variants={itemSlideIn}
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            textAlign: 'center',
            letterSpacing: '0.025em',
            backgroundImage: 'linear-gradient(to right, #fdba74, #fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Welcome to Seven Eleven Academy
        </motion.p>

        {/* Dynamic Progress Bar */}
        <motion.div
          variants={itemSlideIn}
          style={{
            width: '100%',
            maxWidth: '28rem',
            height: '0.5rem',
            backgroundColor: '#4b5563',
            borderRadius: '9999px',
            overflow: 'hidden',
            boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          }}
        >
          <motion.div
            style={{
              height: '100%',
              backgroundImage: 'linear-gradient(to right, #fb923c, #fff)',
              borderRadius: '9999px',
            }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 1 }}
          ></motion.div>
        </motion.div>

        {/* Loading Status Message */}
        <motion.div
            variants={itemSlideIn}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '0.5rem',
              fontSize: '1rem',
              color: '#d1d5db',
            }}
        >
            <Loader2 style={{ width: '1.5rem', height: '1.5rem', color: '#fb923c', animation: 'spin 1s linear infinite' }} />
            <span style={{ fontWeight: 500 }}>
                Preparing your learning journey...
            </span>
        </motion.div>
      </motion.div>

      {/* CSS Keyframes for animations (placed directly in JSX) */}
      <style>{`
        @keyframes pulse-slow-1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, -30px) scale(1.05); }
        }
        @keyframes pulse-slow-2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-40px, 20px) scale(0.95); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingPage;
