"use client";

import { createContext, useContext, useState, useRef } from "react";
import Toast from "@/components/toast";

const ToastContext = createContext({});

export function useToast() {
  return useContext(ToastContext);
}

export function ToastProvider(props) {
  const [toast, setToast] = useState(null);
  const toastTimeoutRef = useRef();

  const closeToast = () => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    setToast(null);
  };

  const openToast = ({ text, action, duration = 5000 }) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    setToast({
      text,
      action,
    });

    if (duration) {
      toastTimeoutRef.current = setTimeout(() => {
        setToast(null);
      }, duration);
    }
  };

  const value = { openToast, closeToast };

  return (
    <ToastContext.Provider value={value}>
      {props.children}
      {toast ? (
        <Toast text={toast?.text} action={toast?.action} close={closeToast} />
      ) : null}
    </ToastContext.Provider>
  );
}
