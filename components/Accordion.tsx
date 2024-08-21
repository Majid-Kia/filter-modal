import React, { ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion = ({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionProps) => {
  return (
    <div className="border-b">
      <button
        className="w-full text-left p-4 flex justify-between items-center"
        onClick={onToggle}
      >
        {title}
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="p-4 pt-0">{children}</div>}
    </div>
  );
};
