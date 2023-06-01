import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import pinterest from "../assets/pintrest.svg"
import twitter from "../assets/twitter.svg"
function Homefooter() {
    return ( 
        <div className="flex flex-col sm:mt-0">
            <div id="upperfooter" className="text-center sm:w-full h-[12em]">
                <h1 className="footer-h1 pt-12">Boost your links today</h1>
                <button className="border-none hover:bg-cyan-300  transition ease-in-out delay-150 bg-sky-500/50  w-36 p-1 rounded-xl text-white font-bold">Get Started</button>
            </div>
            <div id="divvv" className="pt-12 sm:pt-0 bg-black min-h-screen pl-24 w-full  text-white sm:flex sm:justify-center sm:pt-24 flex-col sm:w-full sm:h-24 sm:flex-row sm:gap-[15em] md:gap-6 md:pl-0 md:pt-12">
                <h1 className="footer-h1">Shortly</h1>
                <div id="div" className="flex flex-col gap-24 sm:flex-row sm:gap-[4em]">
                    <div className="">
                        <h2 className="footer-h1">Features</h2>
                        <p>Link Shortening</p>
                        <p>Branded Links</p>
                        <p>Branded Links</p>
                        <p>Analytics</p>
                    </div>
                    <div className="">
                        <h2 className="footer-h1">Resources</h2>
                        <p>Blog</p>
                        <p>Developers</p>
                        <p>Support</p>
                    </div>
                    <div className="">
                        <h2 className="footer-h1">Company</h2>
                        <p>About</p>
                        <p>Our Team</p>
                        <p> Careers</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className="mt-12 mb-12 sm:mb-0 sm:mt-0 flex gap-4">
                    <img src={facebook} alt="" className="sm:h-8"/>
                    <img src={instagram} alt="" className="sm:h-8"/>
                    <img src={pinterest} alt="" className="sm:h-8"/>
                    <img src={twitter} alt="" className="sm:h-8"/>
                </div>
            </div>
        </div>
     );
}
export default Homefooter;