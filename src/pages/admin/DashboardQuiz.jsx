import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import AddQuestions from "../../components/admin/modals/AddQuestions";
import DeleteQuestion from "../../components/admin/modals/DeleteQuestion";
import { fetchQuestions } from "../../redux/quizSlice";

const DashboardQuiz = () => {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const [course, setCourse] = useState("putme");
  const { quizQuestions, loadingQuiz } = useSelector((state) => state.quiz);
  // const handleDelete = (id) => {
  //   dispatch(deleteAdmin(id, token));
  // };'
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
  useEffect(() => {
    dispatch(fetchQuestions(course));
  }, [dispatch, course]);

  return (
    <div>
      <div className="w-full mt-20 h-[40rem] px-2 lg:flex  lg:max-w-[90%] max-w-full">
        <div className="w-full h-full">
          <div className="w-full flex items-center justify-between h-20">
            <select
              onChange={(e) => setCourse(e.target.value)}
              name="course"
              value={course}
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
            <AddQuestions />
          </div>
          <section className="w-full mx-auto  font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg">
              <div className="w-full overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-md font-semibold tracking-wide text-left text-gray-900  uppercase ">
                      <th className="px-4 py-3">Question</th>
                      <th className="px-4 py-3">Answer</th>
                      <th className="px-4 py-3">Options</th>
                      <th className="px-4 py-3">Options</th>
                      <th className="px-4 py-3">Options</th>
                      <th className="px-4 py-3">Options</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  {loadingQuiz ? (
                    <tbody className="w-full pl-10   flex ">
                      <tr>
                        <td>
                          <ClipLoader size={20} color="black" />
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <tbody className="">
                      {quizQuestions?.map((question, index) => {
                        return (
                          <tr key={index} className="text-gray-700">
                            <td className="px-4 py-3 ">
                              <div className="flex items-center text-sm">
                                <div>
                                  <p className="font-semibold text-black">
                                    {question.question}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold ">
                              Option {question.answer}
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold ">
                              {question.option_one}
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold ">
                              {question.option_two}
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold ">
                              {question.option_three}
                            </td>
                            <td className="px-4 py-3 text-ms font-semibold ">
                              {question.option_four}
                            </td>
                            <td>
                              <DeleteQuestion id={question.slug} />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  )}
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardQuiz;
