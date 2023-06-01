import home from '../assets/hom.svg'
function HomeUpperBody() {
    return (
        <div className="flex mr-32 mt-56 md:flex-row flex-col-reverse m-auto md:w-3/4 md:flex-row md:gap-[10em] w-3/5 h-96 gap-24 md:mt-16">
            <div className="w-2/5 h-2/3 relative">
                <h1 id="h1" className="">More than just shorter links</h1>
                <p id="p-id" className='sm: w-96'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <button className="ml-[7em] w-[7em] p-2 border-none hover:bg-cyan-300  transition ease-in-out delay-150 bg-sky-500/50 sm:ml-0  sm:w-36 mt-10 p-1 rounded-xl text-white font-bold ">Get Started</button>
            </div>
            <div className="mt-15 h-2/3">
                <img className='relative left-14 sm:w-[45em] md:ml-8' src={home} alt="" />
            </div>
        </div>
      );
}

export default HomeUpperBody;