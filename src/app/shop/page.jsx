"use client";
import React, { useState } from "react";
import ShopBalance from "../components/shop/shopBalance";
import SkinSlider from "../components/shop/skinSlider";
import Image from "next/image";
import Front from "../assets/coin/tail.png";
import Back from "../assets/coin/head.png";
import { useAuth } from "../context/UserContext";

const Shop = () => {
   const { balance } = useAuth();
   const [taskSelection, setTaskSelection] = useState(0); // 0 ALL, 1 DAILY, 2 ONE TIME
   const {
      dailyBoosters,
      handleBuyBooster,
      dailyBoosterKeys,
      boosterData,
      userId,
   } = useAuth();
   const [powerBoosters, setPowerBoosters] = useState([
      {
         boosterName: "Sleep & Earn",
         reward: 5000,
         level: 1,
         id: 0,
      },
      {
         boosterName: "Tap Tap Tap",
         reward: 15000,
         level: 2,
         id: 1,
      },
      {
         boosterName: "Ultra Boost",
         reward: 80000,
         level: 3,
         id: 2,
      },
   ]);
   const buyBoosterFirst = () => {
      handleBuyBooster(userId, "BOOST_1_5X");
      setTimeout(() => {
         window.location.reload();
      }, 1500);
   };
   const buyBoosterSecond = () => {
      handleBuyBooster(userId, "BOOST_2X");
      setTimeout(() => {
         window.location.reload();
      }, 1500);
   };
   const buyBoosterThird = () => {
      handleBuyBooster(userId, "BOOST_3X");
      setTimeout(() => {
         window.location.reload();
      }, 1500);
   };
   return (
      <div className="shop w-full h-full flex flex-col pt-4 overflow-y-auto mb-8">
         <div className="balance-container w-full flex items-center justify-end px-6">
            <ShopBalance balance={balance} />
         </div>
         <div className="customize-coin w-full flex flex-col">
            <div className="title flex items-center w-full mt-7 px-6">
               <h5 className="text-orange text-[32px] ">customize your coin</h5>
            </div>
            <div className="skin-selector w-full flex items-center gap-6 mt-4 px-6">
               <button
                  className={`text-[20px] ${
                     taskSelection === 0
                        ? "text-orange underline"
                        : "text-white"
                  }`}
                  onClick={() => {
                     setTaskSelection(0);
                  }}
               >
                  SKIN#1
               </button>
               <button
                  className={`text-[20px] ${
                     taskSelection === 1
                        ? "text-orange underline"
                        : "text-white"
                  }`}
                  onClick={() => {
                     setTaskSelection(1);
                  }}
               >
                  SKIN#2
               </button>
               <button
                  className={`text-[20px] ${
                     taskSelection === 2
                        ? "text-orange underline"
                        : "text-white"
                  }`}
                  onClick={() => {
                     setTaskSelection(2);
                  }}
               >
                  SKIN#3
               </button>
            </div>
            <div className="skin-slider w-full mt-4 pl-6">
               <SkinSlider />
            </div>
         </div>
         <div className="boosters w-full flex flex-col px-6">
            <div className="title flex items-center w-full mt-7">
               <h5 className="text-orange text-[32px] ">BUY BOOSTERS</h5>
            </div>
            <div className="daily-boosters w-full flex flex-col">
               <div className="title flex items-center w-full mt-5">
                  <h5 className="text-orange text-[22px] ">DAILY BOOSTERS</h5>
               </div>
               <div className="daily-boosters flex w-full gap-4 mt-5 relative">
                  {boosterData[0] && (
                     <div className="absolute w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-[300] rounded-lg flex-col">
                        <h5 className="text-xl">
                           You have active daily booster
                        </h5>
                        <h5 className="text-xl">{boosterData[2]}X</h5>
                     </div>
                  )}

                  {dailyBoosters.map((booster, index) => {
                     const haveBooster = boosterData[0];
                     console.log(boosterData);
                     console.log("Have Booster: " + haveBooster);
                     let boosterHave = 10;
                     if (haveBooster) {
                        if (index === 0 && boosterData[1] === "BOOST_1_5X") {
                           boosterHave = 0;
                        }
                        if (index === 1 && boosterData[1] === "BOOST_2X") {
                           boosterHave = 1;
                        }
                        if (index === 2 && boosterData[1] === "BOOST_3X") {
                           boosterHave = 2;
                        }
                     }
                     const divClassName = `daily-boost-item w-full h-[78px] rounded-lg flex-1 bg-coffee flex items-center justify-center relative cursor-pointer ${
                        haveBooster
                           ? boosterHave === index
                              ? "bg-red"
                              : "bg-opacity-40"
                           : ""
                     }`;
                     return (
                        <div
                           className={divClassName}
                           onClick={() => {
                              if (index === 0) {
                                 buyBoosterFirst();
                              }
                              if (index === 1) {
                                 buyBoosterSecond();
                              }
                              if (index === 2) {
                                 buyBoosterThird();
                              }
                           }}
                           key={booster.multiplier}
                        >
                           <Image
                              src={Front}
                              alt="front"
                              className="h-[50px] w-auto -ml-2"
                           />
                           <div className="absolute right-[6px] top-1">
                              <h5 className="text-[16px]">
                                 {booster.multiplier}X
                              </h5>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
            <div className="power-boosters w-full flex flex-col pb-[10px]">
               <div className="title flex items-center w-full mt-5">
                  <h5 className="text-orange text-[22px] ">POWER BOOSTERS</h5>
               </div>
               <div className="power-boosters flex flex-col w-full gap-4 mt-5">
                  {powerBoosters.map((booster) => (
                     <div
                        className="power-boost-item w-full flex h-[36px] rounded-lg bg-transparent border-2 border-yellow items-center justify-between px-3"
                        key={booster.id}
                     >
                        <div className="left h-full flex items-center">
                           <h5 className="text-yellow font-[Poppins] font-semibold">
                              {booster.boosterName}
                           </h5>
                        </div>
                        <div className="right h-full flex items-center gap-2">
                           <h5 className="text-yellow">
                              +{booster.reward} $LIFTOFF
                           </h5>
                           <div className="dot w-[7px] h-[7px] rounded-full bg-yellow"></div>
                           <h5 className="text-yellow">
                              LEVEL {booster.level}
                           </h5>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Shop;
