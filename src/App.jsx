import { NavBar } from "./components/navbar/NavBar";
import { Me } from "./components/Me/Me";

export default function App ()
{
  return (
    <div className="bg-primary">
      <NavBar />
      <Me />
    </div>
  )
}