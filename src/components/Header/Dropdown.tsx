import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface propsType {
  children: React.ReactElement;
  onClose: () => void;
  className?: string;
  isOpen: boolean;
}

const Dropdown: React.FC<propsType> = ({
  children,
  onClose,
  className,
  isOpen = false,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`absolute w-screen h-screen right-9 top-0 `}
          onClick={onClose}
        >
          <motion.div
            className={`content p-2 absolute right-0 top-0 ${className}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
