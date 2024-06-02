"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import Priceinfocard from "./Priceinfocard";
import Model from "./Model";
import Navbar from "./Navbarp";

const Productpage = ({ data }: { data: any }) => {
  const product = data;

  if (!data) {
    return (
      <div className="h-[100vh] flex justify-center items-start">
        <div>
          <img src="/assets/gif/spin.svg" alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className=" flex flex-col items-center justify-center  flex-wrap  py-24">
      <div className="flex  items-center justify-center gap-28 xl:flex-row flex-col">
        <div className=" bg-white flex-grow xl:max-w-[50%] h-fit max-w-fit p-16 border border-[#CDDBFF] rounded-[17px]">
          <Image
            src={product?.img}
            alt={product?.title}
            width={580}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="flex1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] font-semibold">{product?.title}</p>
              <Link
                href={product?.link}
                target="_blank"
                className="text-base opacity-50"
              >
                Visit Product
              </Link>
            </div>
            <div className="  flex items-center gap-3">
              <div className=" flex items-center gap-2 px-3 py-2 bg-[#FFF0F0] rounded-10">
                <Image
                  src="/assets/icons/red-heart.svg"
                  alt=""
                  width={20}
                  height={20}
                />
                <p className="text-base font-semibold text-[#D46F77] ">
                  {product?.review}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-10 py-6 border-y border-y-[#E4E4E4]">
            <div className="flex flex-col gap-2">
              <p className=" text-[34px] text-black font-bold ">
                ₹ {product?.price}
              </p>
              <p className=" text-[21px] text-black opacity-50 line-through font-bold ">
                ₹ {product?.preprice}
              </p>
            </div>
            <div className="  flex flex-col gap-4">
              <div className="flex gap-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-[#FBF3EA] rounded-[27px]">
                  <Image
                    src="/assets/icons/star.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-sm text-[#D48D3B] font-semibold">
                    {product?.star}
                  </p>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white-200 rounded-[27px]">
                  <Image
                    src="/assets/icons/comment.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  <p className="text-sm font-semibold">
                    {product?.review} Reviews
                  </p>
                </div>
              </div>

              <p className="text-sm opacity-50">
                <span className=" font-semibold">
                  {((parseFloat(product?.star) * 100) / 5).toFixed(2)} %
                </span>{" "}
                of buyers have recommeded this.
              </p>
            </div>
          </div>
          <div className="py-6 w-full">
            <div>
              <Model data={data} />
            </div>
            <div>
              <button className=" w-[50%] bg-black mx-auto flex items-center justify-center gap-3 min-w-[200px] my-4 py-4 px-4 hover:bg-opacity-70 rounded-[30px] text-white text-lg font-semibold ">
                <Image
                  src="/assets/icons/bag.svg"
                  alt="check"
                  height={22}
                  width={22}
                />
                <Link
                  href={product?.link}
                  target="_blank"
                  className="text-base text-white"
                >
                  Buy Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className={` ${product?.detail[0][0]?.length == 0 ? "hidden" : ""} ${
            product?.detail[0][1]?.length == 0 ? "hidden" : ""
          }`}
        >
          <h2 className="font-bold">Product Description</h2>

          <div className="m-4">
            <table className="items-center bg-transparent border-collapse ">
              <tbody>
                {product?.detail[0][0]?.map((row: any, rowIndex: any) => {
                  return (
                    <tr key={rowIndex}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 ">
                        {row}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 ">
                        {product.detail[0][1][rowIndex]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={` ${
            product?.detail[1]?.length == 0 ? "hidden" : ""
          } max-w-[100vw] `}
        >
          <h2 className="font-bold">About this item</h2>

          <div className="m-4 ">
            {product?.detail[1]?.map((row: any, rowIndex: any) => {
              return (
                rowIndex !== product.detail[1].length - 1 && (
                  <li className="px-4 maxw-[80vw] py-2" key={rowIndex}>
                    {row}
                  </li>
                )
              );
            })}
          </div>
        </div>
        <div
          className={`${product?.detail[2][0]?.length == 0 ? "hidden" : ""} ${
            product?.detail[2][1]?.length == 0 ? "hidden" : ""
          } `}
        >
          <h2 className="font-bold">Details</h2>
          <div className="m-4 ">
            <table
              style={{}}
              className="items-center bg-transparent w-full border-collapse "
            >
              <tbody>
                {product?.detail[2][0]?.map((row: any, rowIndex: any) => {
                  return (
                    <tr key={rowIndex}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0  p-4 ">
                        {row}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 p-4 ">
                        {product.detail[2][1][rowIndex]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productpage;
