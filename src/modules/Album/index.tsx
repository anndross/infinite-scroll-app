import { useState } from "react"
import { Context } from "./context"
import { LateralCard } from "./LateralBar"
import { Apod } from "./LateralBar/gql"
import { SelectedImage } from "./SelectedImage"

export const Album = () => {
  const [data, setData] = useState({} as Apod)

  return (
    <Context.Provider value={{ data, setData }}>
      <div style={{ display: 'flex' }}>
        <LateralCard />
        <SelectedImage />
      </div>
    </Context.Provider>
  )
}