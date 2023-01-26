import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { Add } from "../../../redux/quizSlice";

export default function AddQuestions() {
  let [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState("GNS212");
  const [question, setQuestion] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const { token } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.quiz);
  const addQuiz = () => {
    dispatch(
      Add(
        subject,
        question,
        optionOne,
        optionTwo,
        optionThree,
        optionFour,
        answer,
        token,
        toast
      )
    );
  };
  return (
    <>
      <button
        onClick={openModal}
        className="w-[141px] py-2 bg-[#191919] h-[40px] text-white font-bold"
      >
        Add question
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <ToastContainer />
                  <select
                    onChange={(e) => setSubject(e.target.value)}
                    name="course"
                    value={subject}
                    id=""
                    className="h-[40px] w-[110px] border-2 rounded-[8px] outline-none bg-transparent border-black"
                  >
                    <option value="GNS111">GNS111</option>
                    <option value="GNS112">GNS112</option>
                    <option value="GNS211">GNS211</option>
                    <option value="GNS212">GNS212</option>
                    <option value="GNS311">GNS311</option>
                    <option value="GNS313">GNS312</option>
                    <option value="putme">POST UTME</option>
                  </select>
                  <div className="mt-6 space-y-5">
                    <h1 className="text-2xl font-bold">Add a question</h1>
                    <input
                      type="text"
                      name="question"
                      onChange={(e) => setQuestion(e.target.value)}
                      className="w-full py-2  font-extrabold outline-none border-b border-b-black"
                      placeholder="Question"
                    />
                    <input
                      type="text"
                      name="optionOne"
                      onChange={(e) => setOptionOne(e.target.value)}
                      className="w-full py-2  font-extrabold outline-none border-b border-b-black"
                      placeholder="Option A"
                    />
                    <input
                      type="text"
                      name="optionTwo"
                      onChange={(e) => setOptionTwo(e.target.value)}
                      className="w-full py-2  font-extrabold outline-none border-b border-b-black"
                      placeholder="Option B"
                    />
                    <input
                      type="text"
                      name="optionThree"
                      onChange={(e) => setOptionThree(e.target.value)}
                      className="w-full py-2  font-extrabold outline-none border-b border-b-black"
                      placeholder="Option C"
                    />
                    <input
                      type="text"
                      name="optionFour"
                      onChange={(e) => setOptionFour(e.target.value)}
                      className="w-full py-2  font-extrabold outline-none border-b border-b-black"
                      placeholder="Option D"
                    />
                    <div className="space-y-2">
                      <label htmlFor="">Answer</label>
                      <select
                        onChange={(e) => setAnswer(e.target.value)}
                        name="answer"
                        value={answer}
                        id=""
                        className="h-[50px] w-full border rounded-[8px] outline-none bg-transparent border-black"
                      >
                        <option value="1">Option A</option>
                        <option value="2">Option B</option>
                        <option value="3">Option C</option>
                        <option value="4">Option D</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4 w-full flex justify-center ">
                    {!loading ? (
                      <button
                        onClick={addQuiz}
                        className="w-[141px] py-2 bg-[#191919] h-[40px] text-white font-bold"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={addQuiz}
                        className="w-[141px] py-2 bg-[#191919] h-[40px] text-white font-bold"
                      >
                        <ClipLoader size={14} color="white" />
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
