import React, { useState } from 'react';

const About = () => {
  const [circles, setCircles] = useState([
    { id: 0, counter: 0, color: 'yellow' }
  ]);

  const increaseCounter = (circleId) => {
    setCircles((prevCircles) => {
      const updatedCircles = prevCircles.map((circle) => {
        if (circle.id === circleId) {
          const newCounter = circle.counter + 1;
          const newColor = getRandomColor();
          return { ...circle, counter: newCounter, color: newColor };
        }
        return circle;
      });
      return updatedCircles;
    });
  };

  const duplicateCircle = () => {
    if (circles.length >= 10) {
      return; 
    }

    const lastCircle = circles[circles.length - 1];
    const newCircle = {
      id: lastCircle.id + 1,
      counter: 0,
      color: 'yellow',
    };

    setCircles((prevCircles) => [...prevCircles, newCircle]);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="text-center font-mono">
      <div id="circles-container" className="flex justify-center xl:flex-row flex-col items-center m-1 p-1 overflow-hidden">
        {circles.map((circle) => (
          <div className="circle h-40 w-40 rounded-full p-7" style={{ backgroundColor: circle.color }} key={circle.id}>
            <div id={`counter-${circle.id}`} className="text-center border-2 border-black rounded-lg text-md">{circle.counter}</div>
            <div className="text-center m-1 border-2 border-black rounded-lg text-md">{circle.color}</div>
        
        
            <button onClick={() => increaseCounter(circle.id)} className=" rounded-lg border-4 border-stone-800 p-1 m-2 text-sm md:text-md">Button 1</button>
            </div>
            ))}
      </div>
      <button onClick={duplicateCircle} className="rounded-lg border-4 border-stone-800 p-1 m-1 text-md">Button 2</button>
    </div>
  );
};

export default About;
