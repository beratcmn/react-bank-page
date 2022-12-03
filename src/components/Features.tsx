import FeatureChip from "./components/featureChip"
import GradientButton from "./components/gradientButton"

function Features() {
    return (
        <div className="h-full flex flex-col gap-y-10 py-10">

            <div className="flex flex-row h-1/3 px-64">

                <div className="flex flex-col w-1/2 gap-y-8">

                    <h2 className="font-poppins text-white text-5xl leading-relaxed font-semibold">
                        You do the business, <br />we’ll handle the money.</h2>

                    <p className="w-2/3 font-poppins text-white/70 text-lg leading-7">
                        With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.
                    </p>

                    <GradientButton text="Get Started" />

                </div>


                <div className="flex flex-col h-full w-1/2 justify-between items-end">
                    <FeatureChip hasBorder={false} logoPath="../../public/star.svg" title="Rewards" description="The best credit cards offer some tantalizing combinations of promotions and prizes" />
                    <FeatureChip hasBorder={true} logoPath="../../public/shield.svg" title="100% Secured" description="We take proactive steps make sure your information and transactions are secure." />
                    <FeatureChip hasBorder={false} logoPath="../../public/arrow.svg" title="Balance Transfer" description="A balance transfer credit card can save you a lot of money in interest charges." />
                </div>

            </div>

            <div className="flex flex-row w-full h-1/3 px-64 items-center justify-between">

                <div className="w-1/2 h-full">
                    <img className="w-full h-full" src="../../public/art2.svg" alt="" />
                </div>

                <div className="flex flex-col w-1/2 gap-y-10">

                    <h2 className="font-poppins text-white font-semibold text-5xl leading-normal">
                        Easily control your <br /> billing & invoicing.
                    </h2>

                    <p className="font-poppins w-5/6 text-white/70  leading-normal">
                        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                    </p>

                    <div className="flex flex-row gap-x-8">
                        <img className="cursor-pointer" src="../../public/app-store.svg" alt="" />
                        <img className="cursor-pointer" src="../../public/play-store.svg" alt="" />
                    </div>

                </div>


            </div>

            <div className="flex flex-row w-full h-1/3 pb-10 px-64">

                <div className="w-1/2 h-full flex flex-col gap-y-10">

                    <h3 className="font-poppins text-white font-semibold text-5xl leading-relaxed">
                        Find a better card deal <br /> in few easy steps.
                    </h3>

                    <p className="w-2/3 font-poppins text-white/70 text-lg">
                        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
                    </p>

                    <GradientButton text="Get Started" />

                </div>


                <div className="w-1/2 h-full">
                    <img className="w-full h-full" src="../../public/art3.svg" alt="" />
                </div>

            </div>

        </div>
    )
}

export default Features