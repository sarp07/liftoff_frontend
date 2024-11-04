import React from "react";
import CopyIcon from "../assets/icons/copy-icon";

const Invite = () => {
   return (
      <div className="invite w-full h-full flex flex-col pt-10 px-8">
         <div className="title flex items-center w-full">
            <h5 className="text-orange text-[32px] ">
               INVITE FRIENDS TO GET EXTRA POINTS
            </h5>
         </div>
         <div className="middle h-full flex flex-1 w-full flex-col justify-center gap-4">
            <div className="refer-friends w-full flex flex-col mt-6">
               <div className="title-container flex items-center">
                  <h5 className="text-[26px]">REFER YOUR FRIENDS</h5>
               </div>
               <div className="texts flex flex-col mt-4 gap-3">
                  <div className="text flex items-center gap-2">
                     <div className="dot-container h-full flex items-start pt-2">
                        <div className="dot w-[6px] h-[6px] bg-white rounded-full"></div>
                     </div>
                     <p className="font-[Poppins]">
                        Earn $LIFTOFF for each successful invitation.
                     </p>
                  </div>
                  <div className="text flex items-center gap-2">
                     <div className="dot-container h-full flex items-start pt-2">
                        <div className="dot w-[6px] h-[6px] bg-white rounded-full"></div>
                     </div>
                     <p className="font-[Poppins]">
                        Your friend gets 10 $LIFTOFF.
                     </p>
                  </div>
               </div>
            </div>
            <div className="get-bonus w-full flex flex-col mt-6">
               <div className="title-container flex items-center">
                  <h5 className="text-[26px]">GET BONUS</h5>
               </div>
               <div className="texts flex flex-col mt-4 gap-3">
                  <div className="text flex items-center gap-2">
                     <div className="dot-container h-full flex items-start pt-2">
                        <div className="dot w-[6px] h-[6px] bg-white rounded-full"></div>
                     </div>
                     <p className="font-[Poppins]">
                        Receive 20% of your friend’s $LIFTOFF
                     </p>
                  </div>
                  <div className="text flex items-center gap-2">
                     <div className="dot-container h-full flex items-start pt-2">
                        <div className="dot w-[6px] h-[6px] bg-white rounded-full"></div>
                     </div>
                     <p className="font-[Poppins]">
                        Your friend can get 5% boost
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="invite-friends w-full flex gap-4 mt-16 mb-8">
            <div className="left flex-1 w-full h-[50px] bg-orange rounded-lg flex items-center justify-center">
               <h5 className="text-[22px] text-black">INVITE FRIENDS</h5>
            </div>
            <div className="right w-[60px] h-[50px] bg-orange rounded-lg flex items-center justify-center">
               <CopyIcon />
            </div>
         </div>
      </div>
   );
};

export default Invite;
