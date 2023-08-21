import React, { useEffect, useState, useRef } from "react";
import NotiBell from "./NotiBell";
import "./NotiBell.css";

export default function SideBar({ children }) {
  const [isOpen, setOpen] = useState(false);
  const [barPosition, setBarPosition] = useState(-width);

  const showSideBar = () => setOpen(true);
}
