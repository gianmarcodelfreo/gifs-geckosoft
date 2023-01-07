import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Link45deg, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../slices/ModalSlice";

const GifModal = () => {
  const { visible, gif } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onClose = () => dispatch(hide());

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className={`backdrop fixed top-0 left-0 w-full h-screen bg-black bg-opacity-60 z-30 transition-all`}
            onClick={onClose}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className={`modal px-7 bg-white rounded-2xl w-full max-lg:max-w-[90vw] max-h-[90vh] lg:max-w-[90vh] overflow-auto fixed top-[5vh] left-1/2 -translate-x-1/2 z-40 max-w-[80vw] `}
          >
            <div className="modal-header flex items-center justify-end py-5 ">
              <button onClick={onClose}>
                <XLg className="w-7 h-7" />
              </button>
            </div>
            <div className="modal-body min-h-[300px] pb-5 lg:grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  className="rounded-xl bg-slate-100 w-full shadow-md"
                  src={gif.images.original.url}
                  data-src={gif.id}
                  width={gif.images.original.width}
                  height={gif.images.original.height}
                  alt={gif.title}
                  key={gif.id}
                />
              </div>
              <div className="flex flex-col max-lg:mt-8">
                <span className="block text-sm text-gray-700">{gif.source_tld}</span>
                <p className="text-2xl font-bold pr-12">{gif.title}</p>
                {gif.user && (
                  <div className="user mt-4 flex items-center gap-x-4">
                    <Image
                      className="w-10 h-10 border border-slate-100 rounded-full"
                      src={gif.user.avatar_url}
                      width={40}
                      height={40}
                      alt="user profile"
                    />
                    <div className="flex flex-col">
                      <span className="first-letter:uppercase font-semibold">{gif.user.username}</span>
                      <Link
                        className="hover:underline text-gray-500 text-sm flex items-center"
                        href={gif.user.profile_url}
                        target="_blank"
                      >
                        <Link45deg className="mr-1" /> Visit profile
                      </Link>
                    </div>
                  </div>
                )}
                <Link
                  href={gif.url}
                  className="bg-black rounded-full w-full py-4 mt-auto px-3 text-center text-white flex items-center justify-center hover:shadow-lg transition-all group max-lg:mt-8"
                  target="_blank"
                >
                  See on Giphy <ArrowRight className="ml-4 group-hover:ml-8 transition-all" />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GifModal;
