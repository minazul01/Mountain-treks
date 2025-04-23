import React from "react";

// react icons
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

const ContactForm = () => {
  const handleSent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target.closest("form"));
    const email = formData.get("email");
    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }

    toast.success("Message sent successfully!");
  };
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-[35px] boxShadow p-[30px] rounded-xl my-10">
      <Helmet>
        <title>Contact-page!</title>
      </Helmet>
      {/*  informations  */}
      <aside className="w-full bg-gray-800 flex flex-col justify-between p-[25px] rounded-md">
        <div>
          <h1 className="text-[2rem] font-[600] leading-[35px] text-white">
            Contact Information
          </h1>
          <p className="text-[0.9rem] mt-1 mb-8 text-white">
            Say something to start a live chat!
          </p>
        </div>

        <div className="flex flex-col gap-[20px] text-gray-300">
          <p className="flex items-center gap-[8px]">
            <MdOutlineCall />
            +8801305282768
          </p>
          <p className="flex items-center break-all gap-[8px]">
            <MdOutlineEmail />
            zenuilibrary@gmail.com
          </p>
          <p className="flex items-center gap-[8px]">
            <IoLocationOutline />
            Kulaura, Moulvibazar, Sylhet
          </p>
        </div>

        <div className="flex gap-[15px] flex-wrap text-black mt-8">
          <a
            href="https://www.facebook.com/minazul.islam.38795"
            target="_blank"
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow"
          >
            <CgFacebook />
          </a>

          <a
            className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow"
            href="https://x.com/Minazul01"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300  boxShadow"
          href="https://www.youtube.com/"
          target="_blank"
          >
            <FaYoutube />
          </a>
          <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-orange-500 text-white hover:bg-white hover:text-orange-500 transition-all duration-300 boxShadow"
          href="https://www.linkedin.com/in/minazul-islam-2371972b5/"
          target="_blank"
          >
            <BsLinkedin />
          </a>
        </div>
      </aside>

      {/* form area */}
      <form className="pt-[20px]">
        <div className="flex flex-col sm:flex-row items-center gap-[30px]">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[1rem] text-gray-700">First Name</label>
            <input
              type="text"
              className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[1rem] text-gray-700">Last Name</label>
            <input
              type="text"
              className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-[30px] mt-10">
          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[1rem] text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
            <label className="text-[1rem] text-gray-700">Phone Number</label>
            <input
              type="number"
              className="peer border-gray-300 border-b outline-none focus:border-[#3B9DF8] w-full text-gray-400 transition-colors duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px] w-full mt-10">
          <label className="text-[1rem] text-gray-700">Write Message</label>
          <textarea className="peer min-h-[100px] border-gray-300 border-b resize-none outline-none w-full text-gray-400 transition-colors focus:border-[#3B9DF8] duration-300"></textarea>
        </div>

        <div className="w-full flex items-center sm:items-end justify-center sm:justify-end mt-5">
          <button
            onClick={handleSent}
            type="submit"
            className="dark:border-slate-700 py-2.5 px-6 bg-gray-800 border transition-all duration-300 hover:border-gray-800 hover:text-gray-800 hover:bg-transparent text-white rounded-md text-[1rem] mt-[10px] w-max"
          >
            Send Message
          </button>
        </div>
        <ToastContainer />
      </form>
    </section>
  );
};

export default ContactForm;
