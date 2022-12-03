interface FeatureChipProps {
    logoPath: string
    title: string
    description: string
    hasBorder: boolean
}

function FeatureChip(props: FeatureChipProps) {
    if (props.hasBorder) {
        return (
            <div className="flex flex-row gap-x-5 py-5 px-5 w-3/4
            rounded-lg bg-gradient-to-br from-gray-700 to-body-dark">
                <img className="h-16" src={props.logoPath} alt="" />

                <div className="flex flex-col">
                    <h3 className="font-poppins font-semibold text-lg text-white">{props.title}</h3>
                    <p className="font-poppins font-normal text-base text-white/70">
                        {props.description}
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-row gap-x-5 py-5 px-5 w-3/4">
                <img className="h-16" src={props.logoPath} alt="" />

                <div className="flex flex-col">
                    <h3 className="font-poppins font-semibold text-lg text-white">{props.title}</h3>
                    <p className="font-poppins font-normal text-base text-white/70">
                        {props.description}
                    </p>
                </div>
            </div>
        )
    }

}

export default FeatureChip