interface OpinionCardProps {
    hasBg: boolean
    description: string
    name: string
    designation: string
    imagePath: string
}

function OpinionCard(props: OpinionCardProps) {
    if (props.hasBg) {
        return (
            <div className="w-full h-full flex flex-col gap-y-10 px-10 py-10 justify-between rounded-2xl bg-gradient-to-br from-gray-700 to-body-dark">

                <div className="h-8">
                    <img className="h-full" src="../../../public/doubletick.svg" alt="" />
                </div>

                <p className="font-poppins text-lg text-white leading-relaxed">{props.description}</p>


                <div className="flex flex-row gap-x-5">

                    <img className="w-1/6" src={props.imagePath} alt="" />

                    <div className="flex flex-col">

                        <h5 className="font-poppins text-white text-xl">{props.name}</h5>

                        <p className="font-poppins text-white/70 ">{props.designation}</p>

                    </div>

                </div>

            </div>
        )
    } else {
        return (
            <div className="w-full h-full flex flex-col gap-y-10 px-10 py-10 justify-between">

                <div className="h-8">
                    <img className="h-full" src="../../../public/doubletick.svg" alt="" />
                </div>

                <p className="font-poppins text-lg text-white leading-relaxed">{props.description}</p>


                <div className="flex flex-row gap-x-5">

                    <img className="w-1/6" src={props.imagePath} alt="" />

                    <div className="flex flex-col">

                        <h5 className="font-poppins text-white text-xl">{props.name}</h5>

                        <p className="font-poppins text-white/70 ">{props.designation}</p>

                    </div>

                </div>

            </div>
        )
    }
}

export default OpinionCard