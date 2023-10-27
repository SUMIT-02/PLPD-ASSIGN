"use client";
import { planData } from "@/data";
import Link from "next/link";
import React, { useState } from "react";

const plans = ["Mobile", "Basic", "Standard", "Premium"];

function page() {
  const [planType, setPlanType] = useState("monthly");
  const [planMode, setPlanMode] = useState("Mobile");

  return (
    <div className="p-5 h-screen flex flex-col justify-center items-center max-w-7xl mx-auto select-none">
      <span className="text-2xl font-semibold">
        Choose the right plan for you
      </span>
      <div className="w-full mt-10 flex">
        {/* TAB */}
        <div className="w-3/12 flex items-center">
          <div className="bg-c-orange flex p-3 rounded-full w-max gap-4">
            <div
              className={`${
                planType === "monthly" ? "bg-white p-3 w-28" : "items-center"
              } cursor-pointer rounded-full w-28 flex justify-center`}
              onClick={() => {
                setPlanType("monthly");
              }}
            >
              <span
                className={`${
                  planType === "monthly"
                    ? "font-semibold text-c-orange"
                    : "font-semibold text-white"
                }`}
              >
                Monthly
              </span>
            </div>
            <div
              className={`${
                planType === "yearly" ? "bg-white p-3 w-28" : "items-center"
              } cursor-pointer rounded-full w-28 flex justify-center`}
              onClick={() => {
                setPlanType("yearly");
              }}
            >
              <span
                className={`${
                  planType === "yearly"
                    ? "font-semibold text-c-orange"
                    : "font-semibold text-white"
                }`}
              >
                Yearly
              </span>
            </div>
          </div>
        </div>
        {plans.map((plan) => (
          <div className="w-2/12 px-10">
            <div
              className={`w-28 aspect-square mx-auto flex items-center justify-center font-semibold cursor-pointer ${
                plan === planMode && "bg-c-orange text-white"
              }`}
              onClick={() => setPlanMode(plan)}
            >
              {plan}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-10 flex border-b pb-4 font-semibold">
        <div className="w-3/12">{planData[planType].mp.name}</div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Mobile" && "text-c-orange"
          }`}
        >
          ₹{planData[planType].mp.mobile}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Basic" && "text-c-orange"
          }`}
        >
          ₹{planData[planType].mp.basic}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Standard" && "text-c-orange"
          }`}
        >
          ₹{planData[planType].mp.standard}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Premium" && "text-c-orange"
          }`}
        >
          ₹{planData[planType].mp.premium}
        </div>
      </div>{" "}
      <div className="w-full mt-10 flex border-b pb-4 font-semibold">
        <div className="w-3/12">{planData[planType].vq.name}</div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Mobile" && "text-c-orange"
          }`}
        >
          {planData[planType].vq.mobile}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Basic" && "text-c-orange"
          }`}
        >
          {planData[planType].vq.basic}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Standard" && "text-c-orange"
          }`}
        >
          {planData[planType].vq.standard}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Premium" && "text-c-orange"
          }`}
        >
          {planData[planType].vq.premium}
        </div>
      </div>{" "}
      <div className="w-full mt-10 flex border-b pb-4 font-semibold">
        <div className="w-3/12">{planData[planType].res.name}</div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Mobile" && "text-c-orange"
          }`}
        >
          {planData[planType].res.mobile}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Basic" && "text-c-orange"
          }`}
        >
          {planData[planType].res.basic}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Standard" && "text-c-orange"
          }`}
        >
          {planData[planType].res.standard}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center ${
            planMode === "Premium" && "text-c-orange"
          }`}
        >
          {planData[planType].res.premium}
        </div>
      </div>{" "}
      <div className="w-full mt-10 flex font-semibold">
        <div className="w-3/12">{planData[planType].des.name}</div>
        <div
          className={`w-2/12 flex items-center justify-center flex-col ${
            planMode === "Mobile" && "text-c-orange"
          }`}
        >
          {planData[planType].des.mobile.map((dev) => (
            <span className="mt-2">{dev}</span>
          ))}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center flex-col ${
            planMode === "Basic" && "text-c-orange"
          }`}
        >
          {planData[planType].des.basic.map((dev) => (
            <span className="mt-2">{dev}</span>
          ))}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center flex-col ${
            planMode === "Standard" && "text-c-orange"
          }`}
        >
          {planData[planType].des.standard.map((dev) => (
            <span className="mt-2">{dev}</span>
          ))}
        </div>
        <div
          className={`w-2/12 flex items-center justify-center flex-col ${
            planMode === "Premium" && "text-c-orange"
          }`}
        >
          {planData[planType].des.premium.map((dev) => (
            <span className="mt-2">{dev}</span>
          ))}
        </div>
      </div>
      <Link
        href={{
          pathname: "/checkout",
          query: { planCycle: planType, planMode },
        }}
        className="mt-10 cursor-pointer bg-c-orange px-3 p-2 rounded-md text-lg font-medium text-white w-3/12 flex items-center justify-center"
      >
        Next
      </Link>
    </div>
  );
}

export default page;
