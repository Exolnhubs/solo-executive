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
import { StatsSection } from "../components/home-components/StatsSection.tsx";


interface HeroData {
  image: string;
  alt?: string;
  overlay?: string;
  fallback?: string;
  title?: string;
  subtitle?: string;
}

export const HeroBackground = memo(({ data }: { data: HeroData }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100); // wait for page render
      }
    }
  }, []);

  return (
    <>
      {/* Background Image Layer */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={loaded ? 1 : 0}
        transition="opacity 0.6s ease-in-out"
      >
        <Image
          src={data.image}
          alt={data.alt || ""}
          role="presentation"
          objectFit="cover"
          objectPosition="center"
          w="100%"
          h="100%"
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </Box>

      {/* Fallback Gradient */}
      {!loaded && (
        <Box
          position="absolute"
          inset={0}
          zIndex={0}
          bgGradient={data.fallback || "linear(to-br, gray.800, gray.900)"}
        />
      )}

      {/* Overlay Layer */}
      <Box
        position="absolute"
        inset={0}
        bg={data.overlay || "rgba(12, 24, 42, 0.7)"}
        zIndex={1}
        opacity={loaded ? 1 : 0.8}
        transition="opacity 0.6s ease-in-out"
      />

      {/* Dynamic Text Content (optional) */}
      {(data.title || data.subtitle) && (
        <VStack
          position="absolute"
          zIndex={2}
          inset={0}
          justify="center"
          align="center"
          textAlign="center"
          px={6}
        >
          {data.title && (
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" color="white">
              {data.title}
            </Text>
          )}
          {data.subtitle && (
            <Text fontSize={{ base: "md", md: "lg" }} color="whiteAlpha.900">
              {data.subtitle}
            </Text>
          )}
        </VStack>
      )}
    </>
  );
});


HeroBackground.displayName = "HeroBackground";

export const handleScroll = (href: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  console.log(href);
  console.log(window.location.href.split("/").pop());

  if ( window.location.pathname !== "/contact") {
    window.location.href = window.location.origin + "/" + href;
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
export const handleOpenProfile = () => {
  const pdfUrl = `${window.location.origin}/profile-soloexecutive.pdf`; // no spaces in filename
  const viewerUrl = `https://docs.google.com/gview?url=${pdfUrl}&embedded=true`;
  window.open(viewerUrl, "_blank");
};
export const Home = () => {

  const [loading, setLoading] = useState(true);
  // const lang = useSelector(selectLanguage);


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
          <HeroBackground
            data={{
              image: "./head.webp",
              alt: "Packaging factory",
              // overlay: "rgba(12, 24, 42, 0.7)",   // optional
              fallback: "linear(to-br, gray.800, gray.900)", // optional
            }}
          />

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
              <Box p={4} borderRadius={"xl"} as={"button"} fontWeight={700}
                onClick={handleScroll("#contact")}
                fontSize={{ base: "sm", md: "md", lg: "lg" }} color={"black"} bg={"rgba(220, 156, 70, 1)"}
              >اطلب استشارة مجانية</Box>
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
        <StatsSection />


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