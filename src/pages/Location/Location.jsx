import { DetailsSection } from "@/sections/Details"
import { LocationSection } from "@/sections/Location"
import { useParams } from "react-router-dom"

const Location = () => {
  const {id} = useParams()
  
  return <LocationSection id={id} />
}

export { Location }
