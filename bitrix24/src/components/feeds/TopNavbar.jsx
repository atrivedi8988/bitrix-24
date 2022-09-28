import React from "react";
import {
  SimpleGrid,
  Box,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { BiPlay, BiRocket } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";
import { IoMdFlag } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const TopNavbar = () => {
  const [hours, setHours] = useState(Number);
  const [minutes, setMinute] = useState(Number);
  const [seconds, setSeconds] = useState(Number);

  //------------------=- time -=--------------
  const time = new Date();
  const hrs = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  setTimeout(() => {
    setHours(hrs);
  }, 1000);

  setTimeout(() => {
    setMinute(min);
  }, 1000);

  setTimeout(() => {
    setSeconds(sec);
  }, 1000);

  return (
    <div>
      <SimpleGrid
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        // ------(width for scroll) ----
        w="1535px"
        //------------------------------
        p="3"
        pr="10"
        pl="4"
      >
        <Box display={"flex"} gap="6" alignItems={"center"}>
          <Box fontSize={"23px"} color="#ffffff">
            <AiOutlineMenu />
          </Box>
          {/* ----------------------- (LOGO) ----------------------- */}
          <Heading fontSize={"23px"} color={"#ffffff"} mb="1">
            Bitrix <span style={{ color: "#2fc6f7" }}>24</span>
          </Heading>
          {/* //------------------- (Pen & Input) -----------------   */}
        </Box>
        <Box w={"27%"} display={"flex"} ml={4} gap="10" alignItems={"center"}>
          <Box
            fontSize={"20px"}
            color={"#7b8691"}
            _hover={{ color: "#ffffff" }}
          >
            <HiPencil />
          </Box>
          <InputGroup>
            <Input
              color={"#ffffff"}
              borderRadius={"30px"}
              borderColor="#7b869164"
              bg={"#7b869164"}
              placeholder="Find people, document and more"
            />
            <InputRightElement children={<SearchIcon color="#ffffff" />} />
          </InputGroup>
        </Box>

        {/* ------------------------(Time & flag)------------------------ */}
        <Box
          display={"flex"}
          alignItems="center"
          gap={12}
          borderRadius="20px"
          pr={"50px"}
          pl={"10px"}
          ml={"-10"}
          _hover={{ bg: "#7b869164" }}
        >
          <Box
            fontSize={"40px"}
            color="#ffffff"
            fontWeight={300}
            display="flex"
          >
            <Text>
              {hours % 12}:{minutes}
            </Text>
            <span
              style={{
                fontSize: "18px",
                marginTop: "10px",
              }}
            >
              {hours >= 12 ? "PM" : "AM"}
            </span>
          </Box>
          <Text
            color="#ffffff"
            fontSize={"15px"}
            display="flex"
            alignItems={"center"}
            gap="1"
          >
            <IoMdFlag />
            <span>0</span>
          </Text>
        </Box>

        {/* //--------------------- (Gmail, Upgrade and Invite Button) ---------- */}
        <Box display={"flex"} alignItems="center" gap="6">
          <Box
            display={"flex"}
            alignItems="center"
            borderRadius={"20px"}
            gap="3"
            p={"10px"}
            ml={"-10"}
            _hover={{ bg: "#7b869164" }}
          >
            <Box
              fontSize={"20px"}
              bg={"#7b8691"}
              color={"#ffffff"}
              borderRadius="50px"
              p="2"
            >
              <BsFillPersonFill />
            </Box>
            <Text color={"#ffffff"} fontSize={"16px"} display="flex" gap={"3"}>
              abhisheksolanki1020...
              <BiPlay
                style={{
                  rotate: "90deg",
                  marginTop: "6px",
                }}
              />
            </Text>
          </Box>
          <Button
            bg={"#eba51c"}
            color="#ffffff"
            _hover={{
              bg: "#dca22f",
            }}
          >
            <BiRocket />
            Upgrade
            <BiPlay
              style={{
                rotate: "90deg",
                marginTop: "5px",
              }}
            />
          </Button>
          <Button
            bg={"#14bfd5"}
            color="#ffffff"
            _hover={{
              bg: "#39ccda",
            }}
          >
            Invite
            <BiPlay
              style={{
                rotate: "90deg",
                marginTop: "5px",
              }}
            />
          </Button>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default TopNavbar;
