"use client";

import { type ReactNode, createContext, useRef } from "react";

import { createAlertStore } from "@/store/alertStore";

export type AlertStoreApi = ReturnType<typeof createAlertStore>;

export const AlertStoreContext = createContext<AlertStoreApi | undefined>(
  undefined
);

export interface AlertStoreProviderProps {
  children: ReactNode;
}

export const AlertStoreProvider = ({ children }: AlertStoreProviderProps) => {
  const storeRef = useRef<AlertStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createAlertStore();
  }

  return (
    <AlertStoreContext.Provider value={storeRef.current}>
      {children}
    </AlertStoreContext.Provider>
  );
};
