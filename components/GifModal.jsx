import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, Link45deg, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../slices/ModalSlice";

const GifModal = () => {
  const { visible, gif } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onClose = () => dispatch(hide());

  useEffect(() => {
    const close = (e) => {
      if (visible == true && e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            className={`backdrop fixed top-0 left-0 z-30 h-screen w-full bg-black bg-opacity-60 transition-all`}
            onClick={onClose}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className={`modal fixed top-[5vh] left-1/2 z-40 max-h-[90vh] w-full max-w-[80vw] -translate-x-1/2 overflow-auto rounded-2xl bg-white px-7 max-lg:max-w-[90vw] lg:max-w-[90vh] `}
          >
            <div className="modal-header flex items-center justify-end py-5 ">
              <button onClick={onClose}>
                <XLg className="h-7 w-7" />
              </button>
            </div>
            <div className="modal-body min-h-[300px] grid-cols-2 gap-4 pb-5 lg:grid">
              <div className="relative">
                <Image
                  className="w-full rounded-xl bg-slate-100 shadow-md"
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
                <p className="pr-12 text-2xl font-bold">{gif.title}</p>
                {gif.user && (
                  <div className="user mt-4 flex items-center gap-x-4">
                    <Image
                      className="h-10 w-10 rounded-full border border-slate-100 bg-gray-200"
                      src={gif.user.avatar_url}
                      width={40}
                      height={40}
                      alt="user profile"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold first-letter:uppercase">{gif.user.username}</span>
                      <Link
                        className="flex items-center text-sm text-gray-500 hover:underline"
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
                  className="group mt-auto flex w-full items-center justify-center rounded-full bg-black py-4 px-3 text-center text-white transition-all hover:shadow-lg max-lg:mt-8"
                  target="_blank"
                >
                  See on Giphy <ArrowRight className="ml-4 transition-all group-hover:ml-8" />
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
