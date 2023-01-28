import Cookies from "js-cookie";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FadeLoader } from "react-spinners";
import { quiz } from "../data/quiz";
import Navbar from "../layout/Navbar";
import { fetchQuestions } from "../redux/quizSlice";
const QuizQuestion = () => {
  const { course } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuestions(course));
  }, [dispatch, course]);
  const { quizQuestions, loadingQuiz } = useSelector((state) => state.quiz);
  const [currentIndex, setCurrentIndex] = useState(0);
  const disabled = currentIndex === 0;
  const disabledNext = currentIndex === quizQuestions.length - 1;
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
  console.log(quizQuestions);
  useEffect(() => {
    setAnswers(quizQuestions);
    Cookies.set("answers", JSON.stringify(answers), {
      expires: 3 / (60 * 24),
    });
  }, []);

  useEffect(() => {
    console.log(answers);
  }, [answers]);

  const isChecked = (currentIndex, optionNumber) => {
    if (answers[currentIndex].optionSelected == optionNumber) {
    } else {
      return false;
    }
  };

  const radioChangeHandler = (index, status, option) => {
    if (status == true) {
      let items = [...answers];
      let item = { ...items[index] };
      item.optionSelected = option;
      items[index] = item;
      setAnswers(items);
      Cookies.set("answers", JSON.stringify(answers), {
        expires: 3 / (60 * 24),
      });
    } else {
      let items = [...answers];
      let item = { ...items[index] };
      item.optionSelected = null;
      items[index] = item;
      setAnswers(items);
      Cookies.set("answers", JSON.stringify(answers), {
        expires: 3 / (60 * 24),
      });
    }
  };
  const uniqueIds = [];

  const unique = quizQuestions?.filter((element) => {
    const isDuplicate = uniqueIds.includes(element.category);

    if (!isDuplicate) {
      uniqueIds.push(element.category);

      return true;
    }

    return false;
  });
  return (
    <div>
      <Navbar />
      {!loadingQuiz ? (
        <>
          {" "}
          <div className="w-full h-20 mt-32 flex items-center px-5 justify-between">
            {unique.map((name, index) => {
              return (
                <div key={index}>
                  <h1 className="text-2xl font-bold">{name.subject}</h1>
                </div>
              );
            })}
          </div>
          <div className="mt-20">
            {quizQuestions?.map((question, index) => {
              return (
                <div
                  key={index}
                  className={`${index == currentIndex ? "" : "hidden"}`}
                >
                  <div className="w-full max-w-[85rem] px-4 flex flex-col justify-center  mx-auto h-full">
                    <div className="flex space-x-4 items-center">
                      <h1 className="text-xl">{question.id}.</h1>
                      <h1 className="text-2xl">{question.question}</h1>
                    </div>
                    <div className="flex  flex-col space-y-5 mt-6">
                      <div className="flex items-center space-x-5">
                        <input
                          type="radio"
                          checked={isChecked(index, 1)}
                          onChange={(e) => {
                            radioChangeHandler(index, e.target.checked, 1);
                          }}
                        />
                        <label htmlFor="" className="text-2xl">
                          {question.option_one}
                        </label>
                      </div>
                      <div className="flex items-center space-x-5">
                        <input
                          type="radio"
                          onChange={(e) => {
                            radioChangeHandler(index, e.target.checked, 2);
                          }}
                          checked={isChecked(index, 2)}
                        />
                        <label htmlFor="" className="text-2xl">
                          {question.option_two}
                        </label>
                      </div>
                      <div className="flex items-center space-x-5">
                        <input
                          type="radio"
                          checked={isChecked(index, 3)}
                          onChange={(e) => {
                            radioChangeHandler(index, e.target.checked, 3);
                          }}
                        />
                        <label htmlFor="" className="text-2xl">
                          {question.option_three}
                        </label>
                      </div>
                      <div className="flex items-center space-x-5">
                        <input
                          type="radio"
                          checked={isChecked(index, 4)}
                          onChange={(e) => {
                            radioChangeHandler(index, e.target.checked, 4);
                          }}
                        />
                        <label htmlFor="" className="text-2xl">
                          {question.option_four}
                        </label>
                      </div>
                    </div>
                    <div className="w-[14rem]  mt-10 flex items-center justify-between">
                      <button
                        onClick={() => setCurrentIndex(index - 1)}
                        disabled={disabled}
                        className={` ${
                          disabled
                            ? "bg-gray-400 px-4 cursor-not-allowed h-10 text-white font-bold rounded-lg"
                            : "px-4 h-10 bg-blue-900 text-white font-bold rounded-lg "
                        }`}
                      >
                        Previous
                      </button>
                      {!disabledNext ? (
                        <button
                          onClick={() => setCurrentIndex(index + 1)}
                          disabled={disabledNext}
                          className={` ${
                            disabledNext
                              ? "bg-gray-400 px-4 cursor-not-allowed h-10 text-white font-bold rounded-lg"
                              : "px-4 h-10 bg-blue-900 text-white font-bold rounded-lg "
                          }`}
                        >
                          Next
                        </button>
                      ) : (
                        <button
                          onClick={() => setCurrentIndex(index + 1)}
                          className={`
                           px-4 h-10 bg-blue-900 text-white font-bold rounded-lg 
                      }`}
                        >
                          Submit
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <FadeLoader />
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
