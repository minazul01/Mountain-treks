import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ImCross } from "react-icons/im";


const Detail = () => {
  // eslint-disable-next-line no-unused-vars
  const [showModal, setShowModal] = useState(false);

  const singleData = useLoaderData();

  const {
    title,
    image,
    shortDescription,
    includedItems,
    specialInstructions,
    ecoFriendlyFeatures,
    adventureCost,
    adventureLevel,
    maxGroupSize,
  } = singleData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTalkWithExpert = () => {
    const now = new Date();
    const hour = now.getHours();

    if (now >= 10 && hour < 20) {
      // Google Meet Link open in new tab
      window.open("https://meet.google.com/hzk-bspe-mjd", "_blank");
    } else {
      // Show modal
      setIsModalOpen(true);
    }
  };

  return (
    <>
  
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
      >
        <div className={`w-[90%] md:w-[30%] bg-base-200 rounded-lg p-4`}>
          <div className="w-full flex justify-between">
            <div>
              <h2 className="text-[1.7rem] font-[500] text-[#202020]">
                Oppos! wrong time!
              </h2>
              <p className="text-[1.3rem] text-gray-400">
                If the current time is between 10:00 AM and 8:00 PM, a
                specialist is ready for you.
              </p>
            </div>

            <ImCross
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            />
          </div>

          <div className="flex items-center gap-2 md:gap-3 w-full justify-end mt-6">
            <button
              className="px-4 py-2 hover:bg-gray-100 border border-[#a8a8a8] rounded-lg text-[#585858]"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-[#3B9DF8] rounded-lg text-[#fff]"
              onClick={() => setIsModalOpen(false)}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>

      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="hero-overlay"></div>
          <div className="text-center space-y-24 text-neutral-content">
            <div className="space-y-5">
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="text-xl font-normal">{shortDescription}</p>
            </div>
            <div className="space-y-5">
              <h3>
                <span className="text-2xl font-bold">adventureLevel : </span>{" "}
                <span className="text-xl font-normal">{adventureLevel}</span>
              </h3>
              <h3 className="text-2xl font-bold">
                Group-size : {maxGroupSize}
              </h3>
              <h3 className="text-2xl font-bold">
                adventureCost : ${adventureCost}
              </h3>
            </div>
            <div className="space-y-5">
              <h2>
                <span className="text-2xl font-bold">includedItems : </span>{" "}
                <span className="text-base font-normal">
                  {includedItems[0]}, {includedItems[1]}, {includedItems[2]},{" "}
                  {includedItems[3]}
                </span>
              </h2>
              <h2>
                <span className="text-2xl font-bold">
                  ecoFriendlyFeatures :{" "}
                </span>{" "}
                <span className="text-base font-normal">
                  {ecoFriendlyFeatures[0]}, {ecoFriendlyFeatures[1]},{" "}
                  {ecoFriendlyFeatures[2]}, {ecoFriendlyFeatures[3]}
                </span>
              </h2>
              <h2>
                <span className="text-2xl font-bold">
                  specialInstructions :{" "}
                </span>{" "}
                <span className="text-base font-normal">
                  {specialInstructions[0]}, {specialInstructions[1]},{" "}
                  {specialInstructions[2]}, {specialInstructions[3]}
                </span>
              </h2>
              <div
                onClick={handleTalkWithExpert}
                className="mt-10 py-1 px-3 bg-pink-400 rounded-md hover:bg-gray-50"
              >
                <button className="cursor-pointer">Talk with Expert</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
