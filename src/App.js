import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="bg-green-500 text-white p-4"
    >
      <h1>Hello Framer Motion!</h1>
    </motion.div>
  );
};

export default App;
