import { useContext, createContext } from "react";

export const OverlayContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  position?: "top" | "bottom";
  id?: string;
}>({
  open: false,
  setOpen: () => null,
  position: "top",
  id: "",
});

export const useOverlayContext = () => useContext(OverlayContext);
