import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { ArrowRight, Link45deg, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../slices/ModalSlice";

const GifModal = () => {
  const { visible, gif } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const onClose = useCallback(() => dispatch(hide()), [dispatch]);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

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
          >
            <button onClick={onClose} className="fixed right-4 top-8 lg:right-16">
              <XLg className="h-7 w-7 text-white" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeOut", duration: 0.2 }}
            className={`modal fixed top-[10vh] left-1/2 z-40 max-h-[85vh] w-full max-w-[90vw] -translate-x-1/2 overflow-auto  rounded-2xl bg-white shadow-lg max-lg:max-w-[90vw] lg:max-w-[100vh] `}
          >
            <div className="modal-body grid grid-cols-1 lg:grid-cols-2">
              <div className="relative min-h-[400px]">
                <Image
                  className="w-full rounded-t-2xl bg-slate-100 object-cover lg:rounded-l-2xl"
                  src={gif.images.original.url}
                  data-src={gif.id}
                  fill
                  alt={gif.title}
                  key={gif.id}
                />
              </div>
              <div className="flex flex-col py-4 px-4 lg:py-8">
                <span className="block text-sm text-gray-700">{gif.source_tld}</span>
                <p className="mb-4 pr-12 text-2xl font-bold lg:mt-2 lg:text-3xl">{gif.title}</p>
                {gif.user && (
                  <div className="user mb-8 flex items-center gap-x-4">
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
