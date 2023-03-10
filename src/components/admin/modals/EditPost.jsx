import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { SlNote } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { baseUrl } from "../../../constants/Base";
import { editpostAction } from "../../../redux/PostSlice";

export default function EditPost({ body, image, title, slug }) {
  let [isOpen, setIsOpen] = useState(false);
  const [tit, setTit] = useState(title);
  const [bod, setBod] = useState(body);
  const dispatch = useDispatch();
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const { token } = useSelector((state) => state.auth);
  const { loadingEdit } = useSelector((state) => state.post);
  const handleSubmit = () => {
    dispatch(editpostAction(slug, title, body, token, toast));
  };
  return (
    <>
      <button onClick={openModal}>
        <SlNote className="lg:w-[28px] lg:h-[28px] w-[20px] h-[20px]" />
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
                <Dialog.Panel className="w-full max-w-[75rem] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl  font-bold leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-6 w-full h-60">
                    <img
                      crossOrigin="anonymous"
                      src={`${baseUrl}${image}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-10">
                    <textarea
                      value={bod}
                      onChange={(e) => setBod(e.target.value)}
                      // dangerouslySetInnerHTML={{
                      //   __html: bod?.replace(/\n/g, "<br/>"),
                      // }}
                      className="text-xl px-3 py-3 w-full h-[40rem]"
                    />
                  </div>
                  <div className="w-full mt-6 flex justify-center">
                    {!loadingEdit ? (
                      <button
                        onClick={handleSubmit}
                        className="w-[141px] bg-[#191919] py-2 text-white rounded-[8px]"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        disabled
                        className="w-[141px] bg-[#191919] py-2 text-white rounded-[8px]"
                      >
                        <ClipLoader size={15} color="white" />
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
