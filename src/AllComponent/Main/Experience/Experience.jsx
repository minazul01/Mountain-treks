import image from "../../../assets/content.jpg"
import { FaPlane } from "react-icons/fa6";
import { MdOutlineOutdoorGrill } from "react-icons/md";
import { IoWomanSharp } from "react-icons/io5";
import { RiRemoteControl2Fill } from "react-icons/ri";
import { IoCarSport } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";


const Experience = () => {
    return (
        <div>
           <Helmet>
            <title>Experience-page!</title>
           </Helmet>
            <div className="card card-side bg-base-100 shadow-sm flex-col lg:flex-row my-10 py-5 gap-5">
                <figure className="w-fit lg:w-1/2 p-2 rounded-lg mx-auto">
                    <img className="h-fit lg:h-[600px]"
                        src={image}
                        alt="image" />
                </figure>
                <div className="card-body w-fit lg:w-1/2 mx-auto">
                    <div>
                        <div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <FaPlane></FaPlane>
                                    <p className="text-base font-normal"> Travel with our experience</p>

                                </div>
                                <h1 className="text-5xl font-bold my-10">Our Travel Experience Is More Then 12 Year. </h1>
                                <p className="py-6 text-base">
                                    For more than 12 years, we've been delivering exceptional travel experiences worldwide. Our expert team ensures every journey is filled with adventure, comfort, and unforgettable memories, helping travelers explore nature, culture, and hidden gems with confidence.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex flex-row items-center gap-2 text-xl my-10">
                                <MdOutlineOutdoorGrill></MdOutlineOutdoorGrill>
                                <p>Outdoor Activities.</p>
                            </div>
                            <div className="flex flex-row items-center gap-2 text-xl my-10">
                                <IoWomanSharp></IoWomanSharp>
                                <p>Curtural Immersion.</p>
                            </div>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex flex-row items-center gap-2 text-xl my-10">
                                <RiRemoteControl2Fill></RiRemoteControl2Fill>
                                <p>remote Destination.</p>
                            </div>
                            <div className="flex flex-row items-center gap-2 text-xl my-10">
                                <IoCarSport></IoCarSport>
                                <p>Sustainability Turism.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 text-xl font-medium">
                            <button className="text-xl font-bold px-2 py-1 border-3 rounded-md cursor-progress">More about us</button>
                            <span>  (OR)</span>
                            <span><FaPhoneAlt></FaPhoneAlt></span>
                            <span> Call+1905644</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;