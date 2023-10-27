"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { planData } from "@/data";

function page() {
  const params = useSearchParams();
  const router = useRouter();
  const [planDetails] = useState({
    cycle: params.getAll("planCycle")[0],
    name: params.getAll("planMode")[0],
  });

  if (!params.getAll("planCycle")[0] || !params.getAll("planMode")[0]) {
    router.push("/pricing");
    return;
  }

  console.log(planDetails.name.toLocaleLowerCase());
  return (
    <div className="h-screen p-5 bg-black flex items-center justify-center">
      <div className="p-5 bg-white rounded-md w-5/12 flex items-center gap-5">
        <div className="w-7/12 flex flex-col">
          <span className="font-semibold text-2xl">Complete Payment</span>
          <span className="text-sm">
            Enter Your Debit card or Credit Card details below.
          </span>
          <div className="border-2 border-c-orange rounded-md mt-5 p-2">
            <input
              type="text"
              className="focus:outline-none w-7/12 text-base px-2 p-1 rounded-md "
              placeholder="Card number"
            />
            <input
              type="text"
              className="focus:outline-none w-3/12 text-base px-2 p-1 rounded-md"
              placeholder="MM/YY"
            />
            <input
              type="text"
              className="focus:outline-none w-2/12 text-base px-2 p-1 rounded-md"
              placeholder="CVC"
            />
          </div>
          <button className="mt-10 cursor-pointer bg-c-orange px-10 p-2 rounded-md text-lg font-medium text-white w-max">
            Comfirm Payment
          </button>
        </div>
        <div className="w-5/12 flex flex-col items-center justify-center px-3">
          <span className="font-semibold text-xl">Order Summary</span>
          <div className="flex justify-between items-center w-full mt-4 pb-4 border-b">
            <span className="font-medium text-sm">Plane Name</span>
            <span className="font-medium text-sm text-right">
              {planDetails.name.toUpperCase()}
            </span>
          </div>{" "}
          <div className="flex justify-between items-center w-full mt-4 pb-4 border-b">
            <span className="font-medium text-sm">Billing Cycle</span>
            <span className="font-medium text-sm text-right">
              {planDetails.cycle.toUpperCase()}
            </span>
          </div>{" "}
          <div className="flex justify-between items-center w-full mt-4 pb-4 border-b">
            <span className="font-medium text-sm">Plane Price</span>
            <span className="font-medium text-sm text-right">
              {" "}
              ₹
              {
                planData[planDetails.cycle].mp[
                  planDetails.name.toLocaleLowerCase()
                ]
              }
              /{planDetails.cycle === "monthly" ? "mo" : "yl"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
