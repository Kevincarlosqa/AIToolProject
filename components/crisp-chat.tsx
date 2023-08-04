"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e83c880f-e36b-4cd2-bc8d-cccc5cec02d1");
  }, []);

  return null;
};
