import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { deletePost } from "../../../redux/PostSlice";

export default function DeletePost({ id }) {
  let [isOpen, setIsOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const { loadingDelete } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  function closeModal() {
    setIsOpen(false);
  }

  function deleteClick(id) {
    dispatch(deletePost(id, token, toast, setIsOpen));
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={openModal}>
        <BiTrash className="lg:w-[28px] lg:h-[28px] w-[20px] h-[20px]" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Delete Post
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg text-gray-500">
                      Are you sure you want to delete this post ?
                    </p>
                  </div>

                  <div className="mt-4 flex space-x-5">
                    {!loadingDelete ? (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent font-bold bg-red-100 px-4 py-2 text-sm  text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => deleteClick(id)}
                      >
                        Yes
                      </button>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex justify-center rounded-md border border-transparent font-bold bg-red-100 px-4 py-2 text-sm  text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        <ClipLoader size={10} color="black" />
                      </button>
                    )}

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent font-bold items-center"
                      onClick={closeModal}
                    >
                      No
                    </button>
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
