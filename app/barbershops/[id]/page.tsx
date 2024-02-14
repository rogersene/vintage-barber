import { db } from "@/app/_lib/prisma";
import BarbershopInfo from "./_components/barbershop-info";

interface BarbershopDetailsPageProps {
    params: any;
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {
    if (!params.id) {
        return null
    }

    const barbershop = await db.barberShop.findUnique({
        where: {
            id: params.id,
        },
    });

    if (!barbershop) {
        return null
    }


    return (
        <BarbershopInfo barbershop={barbershop} />

    )
}

export default BarbershopDetailsPage