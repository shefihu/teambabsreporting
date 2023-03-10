import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import add from "../../../assets/images/addpost.png";
import { useNavigate } from "react-router-dom";
import { BiImages } from "react-icons/bi";
import { AiOutlineFileAdd } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { postAction } from "../../../redux/PostSlice";
import { ClipLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function AddPost() {
  let [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState("education");
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [loader, setLoader] = useState(false);
  const [content, setContent] = useState("");
  const [fileNames, setFileNames] = useState([]);
  const [image, setImage] = useState(null);
  const formData = new FormData();
  formData.append("image", image); // imageFile is a File object
  formData.append("title", title);
  formData.append("slug", slug);
  formData.append("content", content);
  formData.append("category", categories);
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
  const handleClick2 = (event) => {
    hiddenFileInput2.current.click();
  };
  const { loading, addpost } = useSelector((state) => state.post);

  const hiddenFileInput = React.useRef(null);
  const hiddenFileInput2 = React.useRef(null);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const res = await dispatch(postAction(formData, token, toast, navigate));
    await handleFiles(res);
  };
  const handleFiles = async (id) => {
    for (let i = 0; i < fileNames.length; i++) {
      const formData = new FormData();
      formData.append("file", fileNames[i]);
      formData.append("postId", id);
      setLoader(true);
      try {
        // setLoading(true);
        const response = await axios.post(
          `https://babsreporting-server.babsreporting.com/api/post/uploadAttachments`,
          formData,
          {
            "Content-Type": "multipart/form-data",
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        // toast.error(error.response.data.message);
      }
      setLoader(false);
    }
  };
  const uploadImage = (e) => {
    setImage(e.target.files[0]);
  };

  const onChangeFile = (e) => {
    console.log("onChangeFile");
    for (let i = 0; i < e.target.files.length; i++) {
      console.log(e.target.files[i]);
      setFileNames((prev) => [...prev, e.target.files[i]]);
    }
  };
  return (
    <>
      <button
        onClick={openModal}
        className="lg:w-20 lg:h-20 h-14 w-14 fixed lg:top-[50%] right-8 bottom-6 rounded-full flex justify-center items-center bg-black"
      >
        <img src={add} alt="" className="w-[50%]" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <ToastContainer />
                  <form action="" className="w-full h-full flex flex-col">
                    <div className=" flex w-full justify-between items-center">
                      <select
                        name="categories"
                        onChange={(e) => setCategories(e.target.value)}
                        id=""
                        className="bg-transparent rounded-2xl px-1 border border-black outline-none"
                      >
                        <option value="education">Education</option>
                        <option value="news">News</option>
                        <option value="campus">Campus Gists</option>
                        <option value="admission">Admission Updates</option>
                      </select>

                      {!loader && !loading ? (
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
                      )}
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
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full py-2  font-extrabold outline-none border-b border-b-black"
                        placeholder="Title"
                      />
                      <input
                        type="text"
                        name="slug"
                        onChange={(e) => setSlug(e.target.value)}
                        className="w-full py-2  font-extrabold outline-none border-b border-b-black"
                        placeholder="Slug"
                      />

                      <ReactQuill
                        theme="snow"
                        value={content}
                        // name="content"
                        className=""
                        onChange={setContent}
                      />

                      {/* <textarea
                        id=""
                        name="content"
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="What is happening ?"
                        className="w-full  py-1 outline-none px-2 rounded-md"
                        rows="15"
                      ></textarea> */}
                    </div>
                    <div className="w-full flex mt-3 space-x-4">
                      <div>
                        <button
                          className="bg-black px-3 py-1 font-bold text-base "
                          onClick={handleClick}
                          type="button"
                        >
                          <div className="flex justify-center items-center w-full my-1">
                            <BiImages className="text-center text-white" />
                          </div>
                          {/* <span className="text-center text-white text-base">
                            Upload Images
                          </span> */}
                        </button>
                        <input
                          className="hidden"
                          type="file"
                          required
                          name="one"
                          onChange={(e) => {
                            uploadImage(e);
                          }}
                          ref={hiddenFileInput}
                        />
                      </div>
                      <div>
                        <button
                          className="bg-black px-3 py-1 font-bold text-base "
                          onClick={handleClick2}
                          type="button"
                        >
                          <div className="flex justify-center items-center w-full my-1">
                            <AiOutlineFileAdd className="text-center text-white" />
                          </div>
                          {/* <span className="text-center text-white text-base">
                            Upload Files
                          </span> */}
                        </button>
                        <input
                          className="hidden"
                          name="two"
                          type="file"
                          onChange={(e) => onChangeFile(e)}
                          ref={hiddenFileInput2}
                        />
                      </div>
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
