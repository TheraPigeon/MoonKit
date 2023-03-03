import { JSXElement } from "@babel/types";
import React, { FC, ReactElement, ReactNode } from "react";

export interface SideNavElementOBJ {
  icon: ReactElement;
  text: string;
  to: string;
}
