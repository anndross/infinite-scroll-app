import { createContext } from "react";
import { Apod } from "./LateralBar/gql";

export type ApodsData = {
  data: Apod
  setData: (data: any) => void
}

export const Context = createContext<ApodsData>({
  data: {} as Apod,
  setData: () => { }
})
