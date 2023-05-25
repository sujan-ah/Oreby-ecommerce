import React from "react";
import Images from "./Images";
import Badge from "./Badge";
import Flex from "./Flex";
import { BsFillHeartFill } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { BsFillCartFill } from "react-icons/bs";

const Product = ({ src, badge }) => {
  return (
    <div>
      <div className="group relative overflow-y-hidden">
        <Images imgsrc={src} />
        {badge && <Badge title="New" />}
        <div className="absolute bottom-[-51%] left-0 h-2/4 w-full bg-white  duration-150 group-hover:bottom-0 ">
          <Flex className="flex items-center justify-end gap-x-2 px-8	py-6 font-dm text-base font-normal text-[#767676]">
            <p>Add to Wish List</p>
            <BsFillHeartFill className="text-black" />
          </Flex>

          <Flex className="flex items-center justify-end gap-x-2 	px-8 font-dm text-base font-normal text-[#767676]">
            <p>Compare</p>
            <TfiReload className="font-bold text-black" />
          </Flex>

          <Flex className="flex items-center justify-end gap-x-2 px-8	py-6 font-dm text-base font-bold text-black">
            <p>Add to Cart</p>
            <BsFillCartFill />
          </Flex>
        </div>
      </div>
      <Flex className="flex justify-between">
        <h3 className="font-dm text-xl font-bold">Basic Crew Neck Tee</h3>
        <p className="font-dm text-base font-normal text-[#767676]">$44.00</p>
      </Flex>
      <p className="mt-4 font-dm text-base font-normal text-[#767676]">Black</p>
    </div>
  );
};

export default Product;
