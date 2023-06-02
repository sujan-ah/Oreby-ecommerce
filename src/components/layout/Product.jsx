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
          <Flex className="flex items-center justify-end gap-x-2 px-8	py-6 font-dm text-base font-normal text-[#767676] lg:py-3 xl:py-8">
            <p>Add to Wish List</p>
            <BsFillHeartFill className="text-black" />
          </Flex>

          <Flex className="flex items-center justify-end gap-x-2 	px-8 font-dm text-base font-normal text-[#767676] ">
            <p>Compare</p>
            <TfiReload className="font-bold text-black" />
          </Flex>

          <Flex className="flex items-center justify-end gap-x-2 px-8	py-6 font-dm text-base font-bold text-black lg:py-3 xl:py-8">
            <p>Add to Cart</p>
            <BsFillCartFill />
          </Flex>
        </div>
      </div>
      <Flex className="mt-4 flex justify-between">
        <h3 className="font-dm font-bold text-[#262626] md:text-xl lg:text-sm xl:text-xl">
          Basic Crew Neck Tee
        </h3>
        <p className="font-dm text-sm font-normal text-[#767676] md:text-base lg:text-sm xl:text-xl">
          $44.00
        </p>
      </Flex>
      <p className="mt-1 mb-8 font-dm  text-base font-normal text-[#767676] md:mt-4 lg:mt-2 lg:text-sm xl:mt-4 xl:mb-0 xl:text-xl">
        Black
      </p>
    </div>
  );
};

export default Product;
