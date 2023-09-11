"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e5662fc3-dcf0-4876-9fd7-df916096d3f2");
  }, []);

  return null;
};
