

const Forms = () => {
    return (
        <div className=" 
        ml-24 mt-20 flex-grow h-1/2
        grid gap-4 grid-cols-1 place-items-center">
            <input 
            type="text"   
            placeholder="Nome" 
            className="block w-2/3 py-6 pl-7 pr20
            rounded-md bg-orange-500 text-white
            placeholder-white"
            />
          
            <input 
            type="email"   
            placeholder="Email" 
            className="block w-2/3 py-6 pl-7 pr20 
            rounded-md bg-orange-500 text-white
            placeholder-white"
            />
          
            <input 
            type="text"   
            placeholder="Filme preferido" 
            className="block w-2/3 py-6 pl-7 pr20
            rounded-md bg-orange-500 text-white
            placeholder-white"
            />
          
            <input 
            type="email"  
            placeholder="Nivel de coragem"
            className="block w-2/3 py-6 pl-7 pr20 
            rounded-md bg-orange-500 text-white
            placeholder-white" 
            />
            <button className="transition duration-300 ease-ini-out 
             bg-clear text-orange-500 font-bold 
         py-6 px-4 rounded-md border-2 border-orange-500 w-1/4
         hover:border-black hover:text-black hover:translate-y-2
          hover:bg-orange-500">
          Enviar
        </button>
        </div>
        
    )
}

export default Forms;

