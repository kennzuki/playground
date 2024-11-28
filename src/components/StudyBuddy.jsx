import { useState } from "react";



const StudyBuddy = () => {
    // State to toggle the flipping effect of the card
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
    <div 
      onClick={handleClick}
      className="relative w-64 h-96 group"
    >
      {/* Card container with 3D effect */}
      <div className={`
        relative w-full h-full duration-500 preserve-3d
        ${isFlipped ? 'rotate-y-180' : ''}
      `}>
        {/* Front of card */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-white rounded-lg shadow-lg p-6 flex flex-col gap-3 justify-center">
                          <h2 className="text-2xl font-bold text-gray-800 mb-4">What is React?</h2>
                          <p className="">1.A JavaScript framework</p>
                          <p className="">2.A JavaScript library</p>
          </div>
        </div>
        
        {/* Back of card */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-gray-100 text-black rounded-lg shadow-lg p-6 flex  justify-center">
            <p className="text-xl">Its absolutely crucial that if you ever hear anyone have the
              audacity to call it a framework, you must correct them as
              pedantically as possible, preferably starting your response with
              the phrase</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StudyBuddy