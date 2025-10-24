import {
  VStack,
  HStack,
  Box,
  Text,
  Image,
  Spinner,
  Center,
  // Skeleton
} from "@chakra-ui/react";
import { useState, useEffect, memo } from "react";
// import { useSelector } from "react-redux";
// import { selectLanguage } from "../store/slices/languageSlice.ts";
import { OurPartners } from "../components/home-components/OurPartners.tsx";
import WhoWeAre from "../components/home-components/WhoWeAre.tsx";
import { WhyUs } from "../components/home-components/WhyUs.tsx";
import { CTA } from "../components/home-components/CTA.tsx";
import { OurServices } from "../components/home-components/OurServices.tsx";
import { ProjectSlider } from "../components/home-components/ProjectSlider.tsx";
import { ConactSection } from "../components/home-components/ConactSection.tsx";

// Memoized Hero Background Component
const HeroBackground = memo(() => {
  const [patternLoaded, setPatternLoaded] = useState(false);

  return (
    <>
      {/* Pattern Image Layer */}
      <Box
        id="home"
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={patternLoaded ? 1 : 0}
        transition="opacity 0.6s ease-in-out"
      >
        <Image
          src="./head.webp"
          alt=""
          role="presentation"
          objectFit="cover"
          objectPosition="center"
          w="100%"
          h="100%"
          loading="eager"
          decoding="async"
          onLoad={() => setPatternLoaded(true)}
        />
      </Box>

      {/* Fallback gradient while pattern loads */}
      {!patternLoaded && (
        <Box
          position="absolute"
          inset={0}
          zIndex={0}
          bgGradient="linear(to-br, gray.800, gray.900)"
        />
      )}

      {/* Overlay layer */}
      <Box
        position="absolute"
        inset={0}
        bg="rgba(12, 24, 42, 0.7)"
        zIndex={1}
        opacity={patternLoaded ? 1 : 0.8}
        transition="opacity 0.6s ease-in-out"
      />
    </>
  );
});

HeroBackground.displayName = "HeroBackground";





export const Home = () => {

  const [loading, setLoading] = useState(true);
  // const lang = useSelector(selectLanguage);
  const handleOpenProfile = () => {
    const pdfUrl = `${window.location.origin}/profile-soloexecutive.pdf`; // no spaces in filename
    const viewerUrl = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;
    window.open(viewerUrl, "_blank");
  };

  // Simulate loading images & content
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);



  return (

    <VStack w="100vw" position="relative" gap={"2rem"}
    >
      {loading ? (
        <Center w="100%" h="100vh" bg="blackAlpha.800">
          <Spinner size="xl" color="blue.400" />
        </Center>
      ) : (<>
        {/* Hero Section with Optimized Background */}
        <HStack
          position="relative"
          top={0}
          width="100vw"
          height={{ md: "100vh", lg: "70vh" }}
          overflow="hidden"
          isolation="isolate"
        >
          <HeroBackground />

          {/* Foreground content */}
          <VStack position="relative" w={"100%"} color={"white"} mt={{ base: "10rem", md: "5rem", lg: "0" }} mb={{ base: "10rem", md: "5rem", lg: "0" }} zIndex={2} alignItems={"center"} >
            {/* <HeroSection /> */}
            <Text fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold">
              نحو تجربة تُحكى

            </Text>
            <Text maxW={"90%"} fontSize={{ base: "1rem" }} >
              نحوّل فكرتك إلى تجربة متكاملة تصنع أثراً وتبقى في الذاكرة—من التخطيط إلى آخر ضيف يغادر.
            </Text>
            <HStack gap={4} mt={4}>
              <Box p={4} borderRadius={"xl"} as={"button"} fontWeight={700} fontSize={{ base: "sm", md: "md", lg: "lg" }} color={"black"} bg={"rgba(220, 156, 70, 1)"}>اطلب استشارة مجانية</Box>
              <Box p={4} borderRadius={"xl"} as={"button"} fontWeight={700} onClick={handleOpenProfile}
                _hover={{
                  color: "rgba(220, 156, 70, 0.6)",
                  scale: "1.1"
                }}
                fontSize={{ base: "sm", md: "md", lg: "lg" }} bg={"white"} color={"rgba(220, 156, 70, 1)"}>حمّل بروفايل الشركة</Box>

            </HStack>
          </VStack>
        </HStack>

        <WhoWeAre />
        <HStack align="stretch" w={{ base: "70%", md: "50%", lg: "40%" }} justifyContent={"space-between"}>

          <VStack >
            <Text color={"rgba(220, 156, 70, 1)"} fontSize={{ sm: "2rem", lg: "3rem" }} fontWeight={700}>+٢٠٠</Text>
            <Text color={"rgba(70, 78, 95, 1)"} fontWeight={"700"}>فعالية ناجحة</Text>
          </VStack>

          <Box borderRight={"2px solid rgba(234, 234, 234, 1)"} />

          <VStack>
            <Text color={"rgba(220, 156, 70, 1)"} fontSize={{ sm: "2rem", lg: "3rem" }} fontWeight={700} >+٥٠</Text>
            <Text color={"rgba(70, 78, 95, 1)"} fontWeight={"700"}>عميل راضٍ</Text>
          </VStack>

          <Box borderRight={"2px solid rgba(234, 234, 234, 1)"} />

          <VStack>
            <Text color={"rgba(220, 156, 70, 1)"} fontSize={{ sm: "2rem", lg: "3rem" }} fontWeight={700} >+١٠</Text>
            <Text color={"rgba(70, 78, 95, 1)"} fontWeight={"700"}>سنوات خبرة</Text>

          </VStack>

        </HStack>
        <WhyUs />

        <OurServices />
        <ProjectSlider />



        {/* Content sections */}
        <VStack w="100%" h="100%" p={8} gap={8} >
          <OurPartners />
        </VStack>
      </>
      )}


      <ConactSection />
      <CTA />

    </VStack>
  );
};