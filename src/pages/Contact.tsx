import { ConactSection } from "../components/home-components/ConactSection";
import { VStack, HStack, Text, Box } from "@chakra-ui/react";
import { handleOpenProfile, HeroBackground, handleScroll } from "./Home";


export const Contact = () => {
    return (
        <VStack w={"100vw"}>
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
                        image: "./contact.webp",
                        alt: "Packaging factory",
                        overlay: "rgba(12, 24, 42, 0.6)",   // optional
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
            <ConactSection />


            <Box w={"100vw"} h={"60vh"}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463879.6378930618!2d46.49290152281066!3d24.724831613471693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1764143072583!5m2!1sen!2seg" width="100%" height="100%" style={{ border: "0" }}loading="lazy"></iframe>
            </Box>
        </VStack>
    );
};