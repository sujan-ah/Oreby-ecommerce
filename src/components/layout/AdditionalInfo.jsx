import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { TbNumber2 } from "react-icons/tb";
import { FaCarSide } from "react-icons/fa";
import { RxReload } from "react-icons/rx";

const AdditionalInfo = ({ children, className }) => {
  return (
    <div className="mt-[-6px] border border-solid border-[#F0F0F0] py-7">
      <Container>
        <Flex className="flex justify-between">
          <Flex className="flex gap-x-1 text-center sm:gap-x-4">
            <TbNumber2 className="text-sm sm:text-2xl" />
            <p className="font-regular font-dm text-[10px]	 text-[#6d6d6d] sm:text-base">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex gap-x-1 text-center sm:gap-x-4">
            <FaCarSide className="text-sm sm:text-2xl" />
            <p className="font-regular font-dm text-[10px]	 text-[#6d6d6d] sm:text-base">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex gap-x-1 text-center sm:gap-x-4">
            <RxReload className="text-sm sm:text-2xl" />
            <p className="font-regular font-dm text-[10px]	 text-[#6d6d6d] sm:text-base">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
