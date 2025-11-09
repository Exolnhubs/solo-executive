import { selectLanguage } from "../store/slices/languageSlice";
import {
  HStack,
  VStack,
  Image
} from "@chakra-ui/react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { type FC } from "react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { useTranslation } from "../hooks/useTranslation";
import { Services } from "./home-components/OurServices";

export const Footer: FC = () => {
  const lang = useSelector(selectLanguage);
  const t = useTranslation;
  const { links } = useSelector((state: RootState) => state.nav);
  // const dispatch = useDispatch();
  // ✅ Fixed smooth scroll handler with URL update
  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    // Convert `/contact` to `#contact`
    if (href === "/") {
      href = "#home";
    }
    const alt = href.startsWith("#") ? href : "#" + href.replace("/", "");
    const section = document.querySelector(alt);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", alt);
    } else {
      console.warn(`Skipping invalid scroll target: ${alt}`);
    }
  };


  return (
    <VStack
      as="footer"
      mt={"auto"}
      display={"flex"}
      w={"100%"}
      p={8}
      pt={8}
      bg={"transparent"}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgColor="rgba(12, 24, 42, 1)"  // fallback if image is loading
      color={'white'}
    >

      <HStack
        borderBottom={"1px solid rgba(255, 255, 255, 0.3)"}
        w={"90vw"}
        mt="auto"
        display="flex"
        justifyContent="space-between"
        // align={"stretch"}
        alignItems={{ base: "center", lg: "flex-start" }}
        p={4}
        pb={8}
        flexDir={{ base: "column", md: "row" }} // 🔹 Stack vertically on mobile
        gap={{ base: 8, md: 0 }} // 🔹 Add spacing on mobile
      >
        {/* Logo Section */}
        <VStack justifyContent={"space-between"} align={{ base: "center", md: "flex-start" }} gap={4} maxW={{ base: "100%", md: "35%" }}>
                 <Link href="/">
                   <Image src="./solo.webp" alt="Logo" w="60px" h="100%" />
                 </Link>
          <Text textAlign={{ base: "center", md: "start" }} fontWeight={"500"} fontSize={{ base: "0.7rem", md: "0.9rem", lg: "1rem" }}  > {t("footer.text")} </Text>
          <VStack gap={4} mt={4}>
            <HStack justifyContent={"space-between"} align={{ base: "start", md: "flex-start" }} >
              <TfiLocationPin size={"2rem"} />
              <Text
                display="flex"
                alignItems="center"
                gap="0.5rem"
                fontSize={{ base: ".9rem", md: "1.1rem" }}
                fontWeight="400"
                textAlign="start"
                w={{ base: "80%", md: "90%" }}
              >
                {t("footer.address")}
              </Text>
            </HStack>
            <HStack justifyContent={"space-between"} w={"100%"} align={{ base: "start", md: "flex-start" }} gap={4}>
              <MdOutlinePhoneInTalk size={"2rem"} />

              <Text
                display="flex"
                alignItems="center"
                gap="0.5rem"
                fontSize={{ base: ".9rem", md: "1.1rem" }}
                fontWeight="400"
                textAlign="start"
                w={{ base: "80%", md: "90%" }}

              >
                +966558176660
              </Text>
            </HStack>
            <HStack justifyContent={"space-between"} align={{ base: "start", md: "flex-start" }} >
              <IoMail size={"2rem"} />
              <Text
                display="flex"
                alignItems="center"
                gap="0.5rem"
                fontSize={{ base: ".9rem", md: "1.1rem" }}
                fontWeight="400"
                textAlign="start"
                w={{ base: "80%", md: "90%" }}

              >
                info@solosexecutive.sa
              </Text>
            </HStack>
          </VStack>
        </VStack>

        {/* Links */}
        <VStack gap={2} flexDir={"column"} alignItems={{ base: "center", md: "flex-start" }} flexWrap={{ base: "nowrap", md: "wrap" }} >
          <Text fontSize="30px" w={"100%"} fontWeight="bold" pb={4} textAlign={{ base: "center", md: "start" }}>
            {lang === "ar" ? "روابط سريعة" : "Useful Links"}
          </Text>
          {links?.map((link) =>
          (
            link.subNav ? null :
              <Box key={link.href}>
                <Link
                  href={link.href}
                  onClick={handleScroll(link.href)}
                  fontSize="1.5rem"
                  lineHeight="100%"
                  fontWeight="500"
                  bg={useColorModeValue("transparent", "gray.400")}
                  _hover={{ color: useColorModeValue("#226CFF", "gray.100") }}
                  _active={{ color: useColorModeValue("#226CFF", "gray.100") }}
                  display="inline-flex"
                  alignItems="center"
                  gap="0.3rem"
                  cursor="pointer"
                >
                  <Text
                    textAlign="start"
                    width="100%"
                    fontSize={{ base: "1rem", md: "1.2rem" }}
                    fontWeight={400}
                    _hover={{
                      color: useColorModeValue("#4d7cb1", "gray.100"),
                      textDecoration: "underline",
                    }}
                    color={useColorModeValue("white", "gray.400")}
                    m={2}
                  >
                    {lang === "en" ? link.en : link.ar}
                  </Text>
                </Link>
              </Box>
          ))}
          <Text
            textAlign="start"
            width="100%"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight={400}
            _hover={{
              color: useColorModeValue("#4d7cb1", "gray.100"),
              textDecoration: "underline",
            }}
            color={useColorModeValue("white", "gray.400")}
            m={2}
          >            سياسة الخصوصية
          </Text>
          <Text
            textAlign="start"
            width="100%"
            fontSize={{ base: "1rem", md: "1.2rem" }}
            fontWeight={400}
            _hover={{
              color: useColorModeValue("#4d7cb1", "gray.100"),
              textDecoration: "underline",
            }}
            color={useColorModeValue("white", "gray.400")}
            m={2}
          >            الشروط والأحكام
          </Text>


        </VStack>
        {/* Services Info */}
        <VStack height={"100%"} alignItems={{ base: "flex-start" }} w={{ base: "100%", md: "25%" }} justifyContent={"space-between"} align={{ base: "center", md: "flex-start" }}>
          <Text fontSize="30px" w={"100%"} fontWeight="bold" pb={4} textAlign={{ base: "center", md: "start" }}>
            {lang === "ar" ? "خدماتنا" : "Services"}
          </Text>
          {Services && Services?.map((service) => (
            <Text textAlign={{ base: "center", md: "start" }} w={"100%"} fontSize={{ base: "1rem", md: "1.2rem" }} fontWeight={400}>
              {lang === "en" ? service.title : service.title}
            </Text>
          ))}
        </VStack>

      </HStack>

      <HStack
        color={"white"}
        width={"90%"}
        mt={"auto"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", lg: "row" }}
        p={4}
      >
        <HStack gap={4}>
          <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"md"} onClick={() => window.open("https://www.facebook.com/soloexev", "_blank")}>
            <FaFacebookF size={"1.5rem"} />
          </Box>
          <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"md"} onClick={() => window.open("https://twitter.com/soloexev", "_blank")}>

            <FaTwitter size={"1.5rem"} />
          </Box>
          <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"md"} onClick={() => window.open("https://www.instagram.com/soloexev", "_blank")}>

            <FaInstagram size={"1.5rem"} />
          </Box>
          <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"md"} onClick={() => window.open("https://www.linkedin.com/company/soloexev", "_blank")}>

            <FaLinkedinIn size={"1.5rem"} />
          </Box>

        </HStack>
        {
          lang === "en"
            ? "Solo-executive .All Rights Reserved. © 2025 "
            : "© 2025 التنفيذ المنفرد. جميع الحقوق محفوظة."
        }
      </HStack>
    </VStack>
  );
};
