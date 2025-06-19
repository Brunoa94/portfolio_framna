import { AlertStore } from "@/store/alertStore";
import { useContext } from "react";
import { useStore } from "zustand";
import { AlertStoreContext } from "@/providers/alertStoreProvider";

export const useAlertStore = <T>(selector: (store: AlertStore) => T): T => {
  const returnContext = useContext(AlertStoreContext);

  if (!returnContext) {
    throw new Error(`useAlertStore must be used within AlertStoreProvider`);
  }

  return useStore(returnContext, selector);
};
