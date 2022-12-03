import GradientButton from "./components/gradientButton"

function Footer() {
    return (
        <div className="h-full w-full px-64 flex flex-col">

            <div className="w-full h-2/6 flex flex-row items-center
            rounded-2xl bg-gradient-to-tr from-body-dark to-gray-700">

                <div className="w-3/4 flex flex-col gap-y-10 px-20 py-10">
                    <h6 className="font-poppins text-white text-5xl font-semibold">Let’s try our service now!</h6>

                    <p className="w-1/2 font-poppins text-white/70 text-lg">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>

                <div className="w-1/4">
                    <GradientButton text="Get Started" />
                </div>

            </div>


            <div className="w-full grow flex flex-row  justify-between items-start py-20">

                <div className="w-1/4 h-full flex flex-col items-start justify-center gap-y-10 mr-40">

                    {/* Logo */}
                    <div className="flex flex-row h-1/4 gap-x-3 items-center font-poppins">
                        <img className="h-full" src="../../public/logo1.svg" alt="" />
                        <p className="text-white text-5xl font-semibold">
                            Hoo<span className="text-primary-blue">Bank</span>
                        </p>
                    </div>

                    <p className="font-poppins ml-8  text-white/70 text-lg">A new way to make the payments easy, reliable and secure.</p>

                </div>


                <div className="w-1/4 h-full flex flex-col gap-y-3">

                    <h6 className="font-poppins text-white text-lg mb-5">Useful Links</h6>

                    <p className="font-poppins text-white/70">Content</p>
                    <p className="font-poppins text-white/70">How it Works</p>
                    <p className="font-poppins text-white/70">Create</p>
                    <p className="font-poppins text-white/70">Explore</p>
                    <p className="font-poppins text-white/70">Terms & Services</p>

                </div>

                <div className="w-1/4 h-full flex flex-col gap-y-3">

                    <h6 className="font-poppins text-white text-lg mb-5">Community</h6>

                    <p className="font-poppins text-white/70">Help Center</p>
                    <p className="font-poppins text-white/70">Partners</p>
                    <p className="font-poppins text-white/70">Suggestions</p>
                    <p className="font-poppins text-white/70">Blog</p>
                    <p className="font-poppins text-white/70">Newsletters</p>

                </div>

                <div className="w-1/4 h-full flex flex-col gap-y-3">

                    <h6 className="font-poppins text-white text-lg mb-5">Partner</h6>

                    <p className="font-poppins text-white/70">Our Partners</p>
                    <p className="font-poppins text-white/70">Become a Partner</p>

                </div>

            </div>


            <div className="w-full h-16 flex flex-row justify-between items-center">

                <p className="font-poppins text-white/70 tracking-widest">Copyright © 2022 HooBank. All Rights Reserved.</p>

                <img src="../../public/socials.svg" alt="" />

            </div>

        </div>
    )
}

export default Footer