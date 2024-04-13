import React from "react";
import { Text, RatingBar, Img } from "./..";

export default function PorductComponent({
  productName = "images/img_image_7.png",
  productdescription = (
    <>
      Sunfeast Dark Fantasy
      <br />
      Choco Fills, 600 g
    </>
  ),
  productPrice = "₹1,70.00 (incl. of GST)",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={productName} alt="foods_snacks" className="mt-[5px] h-[217px] w-[217px] object-cover" />
      <div className="mb-[5px] flex w-[82%] flex-col items-start">
        <Text size="s" as="p" className="!text-gray-600_01">
          Foods & Snacks
        </Text>
        <Text size="xl" as="p">
          {productdescription}
        </Text>
        <Text size="xl" as="p" className="mt-[9px] !font-medium !text-cyan-600">
          {productPrice}
        </Text>
        <div className="mt-[3px] flex w-[80%] items-center gap-2 md:w-full">
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
    </div>
  );
}
