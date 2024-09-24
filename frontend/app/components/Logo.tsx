import Image from "next/image";
import logo from "@/public/logo.png";

const Logo = () => {
  return (
      <div><Image src={logo} width={40} alt= "logo" /></div>
  )
}

export default Logo
