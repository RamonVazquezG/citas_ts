import { type MouseEvent, useEffect, useRef } from "react";

const isClickInsideRectangle = (e: MouseEvent, element: HTMLElement) => {
  const r = element.getBoundingClientRect();

  return (
    e.clientX > r.left &&
    e.clientX < r.right &&
    e.clientY > r.top &&
    e.clientY < r.bottom
  );
};

type Props = {
  title: string;
  isOpened: boolean;
  onProceed: () => void;
  onClose: () => void;
  children: React.ReactNode;
};

const DialogModal = ({
  title,
  isOpened,
  onProceed,
  onClose,
  children,
}: Props) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    onProceed();
    onClose();
  };

  return (
    <dialog
      ref={ref}
      className="w-96 rounded-lg border border-gray-300 shadow-lg backdrop:bg-black/30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6"
      onCancel={onClose}
      onClick={(e: any) =>
        ref.current && !isClickInsideRectangle(e, ref.current) && onClose()
      }
    >
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

      <div className="text-gray-600 mb-6">{children}</div>

      <div className="flex justify-end gap-4">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 font-medium rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={onClose}
        >
          Cancelar
        </button>
        <button
          className="px-4 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={proceedAndClose}
        >
          Eliminar
        </button>
        
      </div>
    </dialog>
  );
};

export default DialogModal;