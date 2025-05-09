import React from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="absolute grid place-items-center top-0 z-40 h-screen w-screen backdrop-blur">
          <div className="min-h-[200px] min-w-[80%] bg-white p-4 relative z-50 m-auto">
            <div className="flex justify-end">
              <IoClose onClick={onClose} className="text-2xl cursor-pointer" />
            </div>
            {children}
          </div>
          {/* <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          /> */}
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
