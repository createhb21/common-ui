import React from "react";
import { atom } from "recoil";

import type { Toast } from "types";

const modalCompoState = atom<React.ReactNode[] | []>({
  key: "modalCompoState",
  default: [],
});

const toastState = atom<[] | Toast[]>({
  key: "toastState",
  default: [],
});

const isModalOpenState = atom({
  key: "isModalOpenState",
  default: false,
});

const isTimeStartAtom = atom({
  key: "isTimeStartAtom",
  default: false,
});

const isTimeOutAtom = atom({
  key: "isTimeOutAtom",
  default: false,
});

const isTimeResetAtom = atom({
  key: "isTimeResetAtom",
  default: false,
});

export {
  modalCompoState,
  toastState,
  isModalOpenState,
  isTimeStartAtom,
  isTimeOutAtom,
  isTimeResetAtom,
};
