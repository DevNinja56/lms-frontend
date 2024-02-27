import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

type propsType = {
  active?: boolean;
  title: string;
  children?: React.ReactElement;
};

const Accordion: React.FC<propsType> = ({
  active = false,
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(active);

  return (
    <AnimatePresence>
      <div
        className={`${
          !isOpen && "bg-mainColor pl-[6px]"
        } rounded-md border-l-2 shadow-md mb-5`}
      >
        <div className="border-mainColor border-opacity-50 my-2 bg-white">
          <motion.div
            className={`py-4 px-6 cursor-pointer relative select-none text-mainParaColor text-base md:text-lg font-medium ${
              isOpen && "bg-mainColor text-white"
            } `}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {title}
            <motion.span
              className={`absolute top-[50%] translate-y-[-50%] right-8 text-2xl transition-all ${
                isOpen ? "rotate-[180deg]" : "rotate-0"
              } `}
            >
              <BiChevronDown />
            </motion.span>
          </motion.div>
          {
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: 1,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="overflow-hidden overflow-y-auto overflow-x-hidden px-3"
            >
              <div className="py-2 text-sm md:text-base">{children}</div>
            </motion.div>
          }
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Accordion;
