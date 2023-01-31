import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "../layout/Navbar";

export const QuizResults = () => {
  const [answers, setAnswers] = useState([
    {
      question: null,
      answer: null,
      option1: null,
      option2: null,
      option3: null,
      option4: null,
      optionSelected: null,
    },
  ]);
  const [score, setScore] = useState(0);
  const [loadingQuiz, setLoadingQuiz] = useState(true);

  useEffect(() => {
    const cookie = Cookies.get("answers");
    if (!cookie) {
      window.location = "/quiz";
    }
    const que = JSON.parse(cookie);
    evaluate(que, cookie);
    setTimeout(() => {
      Cookies.remove("answers");
    }, 3000);
    setAnswers(que);
  }, []);

  const evaluate = (que, cookie) => {
    let score = 0;
    for (let i = 0; i < que.length; i++) {
      if (que[i].optionSelected == que[i].answer) {
        score = score + 1;
      }
    }
    const percentage = (score / que.length) * 100;
    setScore(percentage);
  };

  return (
    <div>
      <Navbar />
      <div className="w-full mt-20 h-60 flex space-y-4 flex-col items-center justify-center">
        <h1>Well done</h1>
        <div className="lg:w-[251px] w-[210px] h-[14px] bg-transparent overflow-hidden border border-[#191919] rounded-[4px]">
          <div
            className="bg-[#191919] text-xs font-medium text-blue-100 h-[14px] text-center rounded-l-[4px]"
            style={{ width: `${score}%` }}
          ></div>
        </div>
        <p>{score}%</p>
      </div>
    </div>
  );
};

export default QuizResults;
