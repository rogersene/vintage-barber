import Image from "next/image";
import Header from "../_components/header";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns/format";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";
import BarbershopItem from "./_components/barbershop-item";
import { db } from "../_lib/prisma";
import { BarberShop } from "@prisma/client";

export default async function Home() {
  const barbershops = await db.barberShop.findMany({})

  return (
    <div>
      <Header />


      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Miguel!</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' dd 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase mb-3 text-gray-400 font-bold">Agendamentos</h2>
        <BookingItem />
      </div>

      <div>
        <h2 className="text-xs uppercase mb-3 px-5 mt-6 text-gray-400 font-bold">Recomendados</h2>
        
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map((barbershop: BarberShop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))
          }
        </div>
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="text-xs uppercase mb-3 px-5 mt-6 text-gray-400 font-bold">Populares</h2>
        
        <div className="flex px-5 gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map((barbershop: BarberShop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))
          }
        </div>
      </div>

    </div>
  )
}
