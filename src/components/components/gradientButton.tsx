type ButtonProps = {
    text: string
}

function GradientButton(props: ButtonProps) {
    return (
        <button className="bg-gradient-to-br from-white via-primary-blue to-primary-blue 
        text-black text-lg font-semibold font-poppins 
        w-44 py-5
        rounded-lg
        hover:scale-110 active:scale-100 transition-all duration-300">
            {props.text}
        </button>
    )
}

export default GradientButton