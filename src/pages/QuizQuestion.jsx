import React, { useRef, useState } from "react";
import { quiz } from "../data/quiz";
import Navbar from "../layout/Navbar";

const QuizQuestion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = quiz[currentIndex];
  const refs = useRef(quiz.map(() => React.createRef()));

  const handleNext = (ref) => {
    setCurrentIndex(currentIndex + 1);
    ref.current.scrollIntoView();
  };

  const handlePrevious = (ref) => {
    setCurrentIndex(currentIndex - 1);
    ref.current.scrollIntoView();
  };

  return (
    <div>
      <Navbar />
      <div className="w-full h-20 mt-32 flex items-center px-5 justify-between">
        <div>
          <h1 className="text-2xl font-bold">Gns201</h1>
        </div>
      </div>
      <div className="mt-20">
        {quiz.map((question, index) => {
          return (
            <div
              key={index}
              ref={refs.current[index]}
              className="w-full border-t h-[35rem]  border-b border-t-black border-b-black"
            >
              <div className="w-full max-w-[85rem]  mx-auto h-full">
                <div className="flex space-x-4 items-center">
                  <h1 className="text-xl">{question.id}.</h1>
                  <h1 className="text-2xl">{question.question}</h1>
                </div>
                <div className="flex flex-col space-y-5 mt-6">
                  <div className="flex items-center space-x-5">
                    <input type="radio" />
                    <label htmlFor="" className="text-2xl">
                      {question.option1}
                    </label>
                  </div>
                  <div className="flex items-center space-x-5">
                    <input type="radio" />
                    <label htmlFor="" className="text-2xl">
                      {question.option2}
                    </label>
                  </div>
                  <div className="flex items-center space-x-5">
                    <input type="radio" />
                    <label htmlFor="" className="text-2xl">
                      {question.option3}
                    </label>
                  </div>
                  <div className="flex items-center space-x-5">
                    <input type="radio" />
                    <label htmlFor="" className="text-2xl">
                      {question.option4}
                    </label>
                  </div>
                </div>
                <div className="w-[14rem]  h-full flex items-center justify-between">
                  <button
                    onClick={() => handleNext(refs.current[currentIndex])}
                    disabled={currentIndex === quiz.length - 1}
                    className="px-4 h-10 bg-blue-900 text-white font-bold rounded-lg "
                  >
                    Next
                  </button>
                  <button
                    onClick={() => handlePrevious(refs.current[currentIndex])}
                    disabled={currentIndex === 0}
                    className="px-4 h-10 bg-blue-900 text-white font-bold rounded-lg"
                  >
                    Previous
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizQuestion;
