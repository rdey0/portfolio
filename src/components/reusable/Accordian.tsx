"use client";

import React, { useEffect, useRef, useState } from "react";
import ChevronIcon from "../icons/ChevronIcon";
interface AccordianProps {
  label: string;
  children: React.ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const updateHeight = () => {
    if (contentRef.current) {
      const height = contentRef.current.scrollHeight;
      setContentHeight(height);
    }
  };

  useEffect(() => {
    updateHeight();
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }
    return () => {
      if (contentRef.current) {
        resizeObserver.unobserve(contentRef.current);
      }
      resizeObserver.disconnect();
    };
  }, []);
  return (
    <div>
      <button
        className={`appearance-none flex items-center gap-1 hover:text-white transition-all duration-300  ${
          isOpen ? "text-white mt-2" : "text-charcoal-medium"
        }`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {label}
        <ChevronIcon orientation={isOpen ? "up" : "down"} />
      </button>
      <div
        ref={contentRef}
        className={`mt-1 transition-all duration-300 ease-in-out overflow-hidden 
        `}
        style={{ maxHeight: isOpen ? contentHeight : 0 }}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordian;
