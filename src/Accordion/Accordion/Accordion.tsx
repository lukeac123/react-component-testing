import { HTMLAttributes } from "react";
import "./Accordion.css";
import { clsx } from "clsx";

//How to make this ac accessible as possible ?

export interface AccordionType extends HTMLAttributes<HTMLDivElement> {}

export const Accordion = ({ className, children }: AccordionType) => {
  return <div className={clsx(className, "accordion")}>{children}</div>;
};
