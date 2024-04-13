import React from "react";
import { Text, RatingBar, Img } from "./..";

export default function CartComponent({
  cartName = "Personal Care, Personal Hygiene",
  cartDescription = (
    <>
      PEESAFE Oxo-Biodegradable Disposable
      <br />
      Bags | Large | Pack of 200 Bags
    </>
  ),
  cartPrice = "₹1,400.00 (incl. of GST)",
  ...props
}) {
  return (
    <div {...props}>
      <div className="ml-[7px] mt-3.5 flex flex-col items-center self-stretch md:ml-0">
        <Img src="images/img_image_5.png" alt="add_to_cart_one" className="h-[296px] w-full object-cover md:h-auto" />
        <Text
          size="3xl"
          as="p"
          className="relative mt-[-30px] flex h-[30px] items-center justify-center border border-solid border-cyan-600 bg-white-A700 px-[35px] py-px !text-cyan-600 sm:px-5"
        >
          ADD TO CART
        </Text>
      </div>
      <Text size="s" as="p" className="ml-[7px] mt-[26px] !text-gray-600_01 md:ml-0">
        {cartName}
      </Text>
      <Text size="xl" as="p" className="ml-[7px] md:ml-0">
        {cartDescription}
      </Text>
      <Text size="xl" as="p" className="ml-[7px] mt-[9px] !font-medium !text-cyan-600 md:ml-0">
        {cartPrice}
      </Text>
      <div className="mb-[5px] ml-[7px] mt-[3px] flex w-[45%] items-center gap-2 md:ml-0">
        <RatingBar
          value={5}
          isEditable={true}
          color="#d3ced2"
          activeColor="#d3ced2"
          size={8}
          className="flex justify-between"
        />
        <Text size="s" as="p" className="!text-blue_gray-100_02">
          ( 0 reviews )
        </Text>
      </div>
    </div>
  );
}
