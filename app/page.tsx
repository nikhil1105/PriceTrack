"use client";
import React, { useState } from "react";
import Image from "next/image";
import Searchbar from "../components/Searchbar";
import Content from "../components/Content";
import HNavbar from "@/components/Navbar";

const Home = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <HNavbar />
      {loading ? (
        <div className="h-[100vh] flex justify-center items-start">
          <div><img src="/assets/gif/spin.svg" alt="" />Scraping Data Please Wait...</div>
        </div>
      ) : (
        <section className=" tracking-wider leading-tight">
          <div className=" xl:flex items-center h-[350px] xl:h-[500px]">
            <div>
              <div>
                <div className="flex p-1">
                  <p className="p-1 text-red-500 text-[15px] sm:text-[20px] font-bold">
                    Smart Shopping Starts Here:
                  </p>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>

                <p className="sm:text-[60px] text-[30px] font-bold my-4">
                  Unleash the Power of{" "}
                  <span className="text-red-500">PriceTrack</span>
                </p>
                <p className="sm:text-[20px] text-[15px] my-8">
                  Powerful and real time price tracker for ecommerce website like amazon and flipkart.
                </p>
              </div>
              <Searchbar lodading={(e: boolean) => setLoading(e)} />
            </div>
            <div className="xl:w-auto w-full flex items-center justify-center">
              <Content />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Home;
