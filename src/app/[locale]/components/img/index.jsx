import Image from "next/image";

import hero from '../../../../../public/media/fondooriginal.jpg'

export default function AppBgImg() {
  return <Image 
    src={hero}
    placeholder="blur"
    fill
    sizes="100vw"
    style={{
      objectFit: 'cover',
      zIndex: -1
    }}
  />
}