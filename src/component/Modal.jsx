import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  const modalRoot = document.getElementById("modal-root");
  if (!isOpen || !modalRoot) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg w-[90%] max-w-md relative">
        <div className="flex justify-end">
          <AiOutlineClose
            onClick={onClose}
            className="text-2xl text-gray-800 cursor-pointer"
          />
        </div>
        {children || (
          <div className="text-black">
            <h2 className="text-lg font-bold mb-2">Modal Title</h2>
            <p>This is a demo modal.</p>
          </div>
        )}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
