import { VStack, HStack, Text, Box } from "@chakra-ui/react";
import { handleOpenProfile, HeroBackground } from "./Home";
import { CTA } from "../components/home-components/CTA";
import { OurWork } from "../components/projects/OurWork";


export const Projects = () => {
    return (
        <VStack w={"100%"} pos={"relative"}>
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
                        image: "./3.webp",
                        alt: "Packaging factory",
                        overlay: "rgba(12, 24, 42, 0.6)",
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
                            // onClick={handleScroll("#contact")}
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

            
            <OurWork />

            <CTA />
        </VStack>
    );
};