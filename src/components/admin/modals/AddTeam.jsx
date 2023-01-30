import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import add from "../../../assets/images/addpost.png";
import { useNavigate } from "react-router-dom";
import { BiImages } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import { addAdmin } from "../../../redux/teamSlice";
export default function Addadmin({ user }) {
  let [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("0");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(null);
  const formData = new FormData();

  function closeModal() {
    setIsOpen(false);
  }
  const dispatch = useDispatch();
  function openModal() {
    setIsOpen(true);
  }
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const hiddenFileInput = React.useRef(null);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSubmit = () => {
    dispatch(addAdmin(email, name, password, role, token, toast, navigate));
  };
  const uploadImage = (e) => {
    setImage(e.target.files[0]);
  };
  const { loading, addpost } = useSelector((state) => state.team);
  return (
    <>
      {user?.role === 1 && (
        <button
          onClick={openModal}
          className="w-[141px] py-2 bg-[#191919] text-white font-bold"
        >
          Add member
        </button>
      )}
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <ToastContainer />
                  <form action="" className="w-full h-full flex flex-col">
                    <div className=" flex w-full justify-between items-center">
                      {/* <select
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        id=""
                        className="bg-transparent rounded-2xl px-1 border border-black outline-none"
                      >
                        <option value="education">Education</option>
                        <option value="news">News</option>
                        <option value="campus">Campus Gists</option>
                        <option value="admission">Admission Updates</option>
                      </select> */}

                      {/* {!loading ? (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="px-8 rounded-lg font-bold text-lg text-white py-1 bg-black"
                        >
                          Post
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled
                          className="px-8 rounded-lg font-bold text-lg text-white py-1 bg-black"
                        >
                          <ClipLoader size={14} color="white" />
                        </button>
                      )} */}
                      {/* <p>
                  Dont have an account?{" "}
                  <Link href="/register" className="text-[#32C74A]">
                    Register
                  </Link>{" "}
                </p> */}
                    </div>

                    <div className="w-full space-y-3 mt-5">
                      <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full py-2   outline-none border-b border-b-black"
                        placeholder="Name"
                      />
                      <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full py-2   outline-none border-b border-b-black"
                        placeholder="Email"
                      />

                      <input
                        type="text"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full py-2   outline-none border-b border-b-black"
                        placeholder="Password"
                      />
                      <select
                        name="role"
                        id=""
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full py-2 px-1 border border-black bg-transparent"
                      >
                        <option value="1">Super Admin</option>
                        <option value="0">Admin</option>
                      </select>
                    </div>
                    <div className="w-full flex mt-4 justify-center">
                      {!loading ? (
                        <button
                          type="button"
                          onClick={handleSubmit}
                          className="px-8 rounded-lg font-bold text-lg text-white py-1 bg-black"
                        >
                          Add
                        </button>
                      ) : (
                        <button
                          type="submit"
                          disabled
                          className="px-8 rounded-lg font-bold text-lg text-white py-1 bg-black"
                        >
                          <ClipLoader size={14} color="white" />
                        </button>
                      )}
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
