function Body() {
    return <div className="max-h-full flex-grow flex flex-col">

        <img className="h-full absolute top-0 left-0" src="../../public/blur-1.svg" alt="" />

        <div className="flex-grow flex flex-row z-20">

            <div className="px-64 flex-grow">

                <div className="w-full h-full flex flex-col items-start justify-center gap-y-8">

                    <div className="w-[26rem] h-10 flex flex-row px-2 items-center
                    rounded-lg bg-gradient-to-br from-secondary-dark-1 to-secondary-dark-2">
                        <img src="../../public/discount-logo.svg" alt="" />

                        <p className="font-poppins text-lg text-white">20% <span className="text-white/70">DISCOUNT FOR</span> 1 MONTH <span className="text-white/70">ACCOUNT</span></p>
                    </div>

                    <p className="font-poppins font-semibold text-white text-7xl">The Next</p>

                    <p className="font-poppins font-semibold text-white text-7xl
                    text-transparent bg-clip-text 
                    bg-gradient-to-br from-primary-blue to-white">Generation</p>

                    <p className="font-poppins font-semibold text-white text-7xl">Payment Method.</p>

                    <p className="text-white/70 font-poppins text-lg w-3/4">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                        We examine annual percentage rates, annual fees.</p>

                </div>

            </div>

            <img src="../../public/art1.svg" alt="" />
        </div>

        {/* Bottom Part */}
        <div className="h-20 flex items-center justify-center">
            <img src="../../public/body-bottom.svg" alt="" />
        </div>
    </div>
}

export default Body