import { motion } from 'motion/react';
import { useState } from 'react';
import StudyBuddy from './components/studyBuddy';
import AnnoyingForm from "./components/AnnoyingForm";

function App() {
  const [gameRunning, setGameRunning] = useState(false);

  const handlePlay = () => {
    setGameRunning(!gameRunning);
  };

  return (
    <div className=''>
      <section className='text-white mx-auto p-12 w-1/2'>
        <motion.h1
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ delay: 1.5, ease: 'linear', stiffness: 5 }}
          className='capitalize mb-8 text-3xl font-bold'
        >
          title of here
        </motion.h1>
        <p className='mb-8'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          alias ratione tenetur laborum veniam ad natus temporibus at
          consequatur! Nemo veniam tempora esse.
        </p>
        <p className=''>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, eum
          rerum culpa laborum reprehenderit laboriosam nostrum consequuntur,
          repellendus quaerat itaque quasi rem vitae totam? Nesciunt placeat,
          aperiam cupiditate tempora fugiat sapiente molestias autem laudantium?
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className='capitalize py-2 px-3 text-white rounded border border-slate-100 mt-6 shadow shadow-white'
        >
          read more
        </motion.button>
        <button
          onClick={handlePlay}
          className={`py-2 px-3 rounded text-white bg-blue-600 mx-auto ml-8 ${
            gameRunning ? 'bg-yellow-500' : 'bg-purple-500'
          }`}
        >
          {gameRunning ? 'play' : 'pause'}
        </button>
      </section>
      <StudyBuddy />
      <AnnoyingForm/>
    </div>
  );
}

export default App;
