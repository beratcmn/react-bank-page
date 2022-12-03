import OpinionCard from "./components/components/opinionCards"

function Services() {
    return (
        <>
            <div className="w-full h-3/4 flex flex-col gap-y-20 px-64 py-10">

                {/* Texts */}
                <div className="h-1/4 flex flex-row items-center">

                    <h4 className="w-1/3 font-poppins text-white text-5xl font-semibold leading-relaxed">
                        What people are saying about us
                    </h4>

                    <p className="ml-32 w-1/3 font-poppins text-white/70 text-lg leading-normal">
                        Everything you need to accept card payments and grow your business anywhere on the planet.
                    </p>

                </div>


                {/* Cards */}
                <div className="w-full h-3/4 flex flex-row justify-between gap-x-28">
                    <OpinionCard hasBg={true} description="Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver." name="Herman Jensen" designation="Founder & Leader" imagePath="../public/human1.png" />
                    <OpinionCard hasBg={false} description="Money makes your life easier. If you're lucky to have it, you're lucky." name="Steve Mark" designation="Founder & Leader" imagePath="../public/human2.png" />
                    <OpinionCard hasBg={false} description="It is usually people in the money business, finance, and international trade that are really rich." name="Kenn Gallagher" designation="Founder & Leader" imagePath="../public/human3.png" />
                </div>

            </div>

            {/* Brands */}
            <div className="w-full h-1/4 flex flex-row px-64 items-center justify-between">
                <img className="w-1/5" src="../public/airbnb.svg" alt="" />
                <img className="w-1/5" src="../public/binance.svg" alt="" />
                <img className="w-1/5 mb-5" src="../public/coinbase.svg" alt="" />
                <img className="w-1/5" src="../public/dropbox.svg" alt="" />
            </div>
        </>
    )
}

export default Services