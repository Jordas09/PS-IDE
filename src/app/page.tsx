import Image from "next/image";
import banner from "../../public/banner.png"
import background from "../../public/background.png"
import caveira from "../../public/caveira.png"
import Forms from "./form"


export default function Home() {
  

  return (
    <body className="w-full h-full bg-[url('../../public/background.png')] bg-cover bg-center">
      <header className="relative w-full h-[90vh]">
        <Image
            className="dark:invert opacity"
            src={banner}
            alt="Banner"
            objectFit="cover"
            objectPosition="bottom"
            layout="fill"
            priority
          />

          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      </header>

      <section className="min-h-[80vh]">
        <h2 className="text-white">Filmes em cartaz</h2>
          

      </section>

      <section className="min-h-[80vh]">
        <h2 className="text-white">Os ícones do terror</h2>
      </section>

      <section className="min-h-[80vh]">
       <h2 className="relative w-full text-bold text-5xl text-white ml-64">Comprar ingresso</h2>
        <div className="right-0 top-0 bottom-0">
          <Image 
          className="float-right w-1/4 mr-64 mt-24"
          src={caveira}
          alt="Caveira"
          objectFit="contain"
          />
        </div>
        <Forms/>
        
      </section>
    </body>
  );
}
