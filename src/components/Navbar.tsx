function Navbar() {
    return (
        <div className="pt-8 px-64 flex flex-row justify-between">

            {/* Name & Logo */}
            <div className="flex flex-row gap-x-1 items-center font-poppins">
                <img src="../../public/logo1.svg" alt="" width={32} height={32} />
                <p className="text-white text-lg">
                    Hoo<span className="text-primary-blue">Bank</span>
                </p>
            </div>

            {/* Options */}
            <div className="flex flex-row font-poppins gap-x-14 text-base">
                <p className="text-white cursor-pointer">Home</p>
                <p className="text-white/70 cursor-pointer">About Us</p>
                <p className="text-white/70 cursor-pointer">Features</p>
                <p className="text-white/70 cursor-pointer">Solution</p>
            </div>

        </div>
    );
}

export default Navbar;
