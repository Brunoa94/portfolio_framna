import { ErrorI, SuccessI } from "@/types/api";
import { createStore } from "zustand/vanilla";

type AlertTypes = SuccessI | ErrorI;

export type AlertState = {
  alert: AlertTypes;
};

export type AlertActions = {
  updateAlert: (value: AlertTypes) => void;
};

export type AlertStore = AlertState & AlertActions;

export const defaultInitState: AlertState = {
  alert: {
    message: "",
    status: 0,
  },
};

export const createAlertStore = (initState: AlertState = defaultInitState) => {
  return createStore<AlertStore>()((set) => ({
    ...initState,
    updateAlert: (value: AlertTypes) => set(() => ({ alert: value })),
  }));
};
