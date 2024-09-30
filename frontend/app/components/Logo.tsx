import Image from "next/image";
import logo from "@/public/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
      <Link href="/"><Image src={logo} width={40} alt= "logo" /></Link>
  )
}

export default Logo
