import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    // Adding a tailwind CSS class to Modal element: for preventing scrolling
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;

/* 
CSS for creating a Grey Background
    absolute => position: absolute
    position values: [static, relative, absolute, fixed, sticky]

   inset-0 => top:0, left:0, right:0, bottom:0
*/
