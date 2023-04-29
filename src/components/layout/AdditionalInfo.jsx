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
          <Flex className="flex gap-x-4 text-center">
            <TbNumber2 className="text-2xl" />
            <p className="font-regular font-dm text-base text-[#6d6d6d]">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex gap-x-4 text-center">
            <FaCarSide className="text-2xl" />
            <p className="font-regular font-dm text-base text-[#6d6d6d]">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex gap-x-4 text-center">
            <RxReload className="text-2xl" />
            <p className="font-regular font-dm text-base text-[#6d6d6d]">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
