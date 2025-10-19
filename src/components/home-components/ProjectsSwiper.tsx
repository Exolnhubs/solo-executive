import { VStack, Text, HStack, Image, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaBuilding } from "react-icons/fa";
import { LuCalendar } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";

export type ProjectProps = {
    image: string;
    title: string;
    description: string;
    org: string;
    date: string;
    location: string;
};

export const Slider = ({ projects }: { projects: ProjectProps[] }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % projects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [projects.length]);

    // helper to get visible indices (3 slides: left, center, right)
    const getVisible = () => {
        const left = (active - 1 + projects.length) % projects.length;
        const center = active;
        const right = (active + 1) % projects.length;
        return [left, center, right];
    };

    const visibleSlides = getVisible();

    return (
        <VStack w="100%" maxW="80vw" mx="auto" gap={8} overflow="hidden">

            <Box
                position="relative"
                w="100%"
                h="650px"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {visibleSlides.map((slideIndex, position) => {
                    const slide = projects[slideIndex];
                    const isCenter = position === 1;

                    // position slides left, center, right
                    const offsets = ["-40%", "0%", "40%"];
                    const scales = ["0.9", "1.1", "0.9"];
                    const zIndexes = [5, 10, 5];
                    const opacities = [0.8, 1, 0.8];

                    return (
                        <Box
                            key={slideIndex}
                            position="absolute"
                            transition="all 0.8s ease-in-out"
                            transform={`translateX(${offsets[position]}) scale(${scales[position]})`}
                            zIndex={zIndexes[position]}
                            opacity={opacities[position]}
                            minW={{ base: "300px", md: "400px" }}
                            maxW={{ base: "85%", md: "70%" }}
                            borderRadius="xl"
                            bg="white"
                            boxShadow={isCenter ? "2xl" : "md"}
                            overflow="hidden"
                            p={4}
                        >
                            <HStack
                                align={{ base: "center", md: "stretch" }}
                                w="100%"
                                gap={0}
                                flexDir={{ base: "column", md: "row" }}
                            >
                                {/* Text */}
                                <VStack
                                    w={{ base: "100%", md: "50%" }}
                                    align="start"
                                    justify="space-around"
                                    textAlign="start"
                                    gap={4}
                                    p={4}
                                >

                                    <Text fontWeight="700" fontSize="1.5rem" color={"#DC9C46"} lineClamp={2}>
                                        {slide.title}
                                    </Text>
                                    <VStack align={"start"} color={"#0C182A"} w={"100%"} minH={"30%"} gap={8} justifyContent={"space-between"} fontWeight={700}>
                                        <HStack>
                                            <FaBuilding size={"1.5rem"} /><Text maxW={"80%"} fontSize="sm" display="flex" alignItems="center" gap={2}> {slide.org}
                                            </Text></HStack>

                                        <HStack><TfiLocationPin size={"1.5rem"} />  <Text maxW={"80%"} fontSize="sm" display="flex" alignItems="center" gap={2}>{slide.location}
                                        </Text></HStack>
                                        <HStack> <LuCalendar size={"1.5rem"} />  <Text maxW={"80%"} fontSize="sm" display="flex" alignItems="center" gap={2}>
                                            {slide.date}
                                        </Text></HStack>

                                    </VStack>
                                    <Text fontSize="sm" color="#464E5F" minH="20%" lineClamp={3}>
                                        {slide.description}
                                    </Text>
                                </VStack>

                                {/* Image */}
                                <Box
                                    w={{ base: "100%", md: "50%" }}
                                    h="auto"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        borderRadius="md"
                                    />
                                </Box>
                            </HStack >
                        </Box >
                    );
                })}
            </Box >
        </VStack >
    );
};
