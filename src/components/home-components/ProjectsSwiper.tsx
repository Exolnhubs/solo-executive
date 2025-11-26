import { VStack, Text, HStack, Image, Box, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FaBuilding, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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


interface SlideCardProps {
    title: string;
    org: string;
    location: string;
    date: string;
    description: string;
    image: string;
    slideIndex: number;
    position?: number;
    isCenter: boolean;
    offsets?: Record<number, string>;
    scales?: string[];
    zIndexes?: Record<number, number>;
    opacities?: Record<number, number>;
}

export const SlideCard = ({
    title,
    org,
    location,
    date,
    description,
    image,
    slideIndex,
    position = 0,
    isCenter = true,
    offsets = { 0: "0" },
    scales = ["1", "1", "1"],
    zIndexes = { 0: 0, },
    opacities = { 0: 1 },
}: SlideCardProps) => {
    return (
        <Box
            key={slideIndex}
            position={position === 0 ? "relative" : "absolute"}
            transition="all 0.8s ease-in-out"
            transform={`translateX(${offsets[position]}) scale(${scales[position]})`}
            zIndex={zIndexes[position]}
            opacity={opacities[position]}
            minW={{ base: "300px", md: "400px" }}
            maxW={{ base: "85%", md: "70%", xl: "80%" }}
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
                    <Text
                        fontWeight="700"
                        fontSize="1.5rem"
                        color="#DC9C46"
                        lineClamp={2}
                    >
                        {title}
                    </Text>

                    <VStack
                        align="start"
                        color="#0C182A"
                        w="100%"
                        minH="30%"
                        gap={8}
                        justifyContent="space-between"
                        fontWeight={700}
                    >
                        <HStack>
                            <FaBuilding size="1.5rem" />
                            <Text
                                maxW="80%"
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                                gap={2}
                            >
                                {org}
                            </Text>
                        </HStack>

                        <HStack>
                            <TfiLocationPin size="1.5rem" />
                            <Text
                                maxW="80%"
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                                gap={2}
                            >
                                {location}
                            </Text>
                        </HStack>

                        <HStack>
                            <LuCalendar size="1.5rem" />
                            <Text
                                maxW="80%"
                                fontSize="sm"
                                display="flex"
                                alignItems="center"
                                gap={2}
                            >
                                {date}
                            </Text>
                        </HStack>
                    </VStack>

                    <Text fontSize="sm" color="#464E5F" minH="20%" lineClamp={3}>
                        {description}
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
                        src={image}
                        alt={title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius="md"
                    />
                </Box>
            </HStack>
        </Box>
    );
};

export const Slider = ({ projects }: { projects: ProjectProps[] }) => {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % projects.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [projects.length]);

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const handleNext = () => {
        setActive((prev) => (prev + 1) % projects.length);
    };

    // helper to get visible indices (3 slides: left, center, right)
    const getVisible = () => {
        const left = (active - 1 + projects.length) % projects.length;
        const center = active;
        const right = (active + 1) % projects.length;
        return [left, center, right];
    };

    const visibleSlides = getVisible();

    return (
        <VStack w="100%" maxW="90%" mx="auto" gap={8} overflow="hidden">

            <Box
                position="relative"
                w="100%"
                h="650px"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                {/* Left Arrow */}
                <IconButton
                    aria-label="Previous slide"
                    // icon={<FaChevronLeft />}
                    onClick={handlePrev}
                    position="absolute"
                    left={{ base: "0", md: "5%" }}
                    zIndex={20}
                    borderRadius="full"
                    bg="#DC9C46"
                    color="white"
                    _hover={{ bg: "#DC9C46", opacity: 0.8 }}
                    _active={{ bg: "white", color: "#DC9C46", borderWidth: "2px", borderColor: "#DC9C46" }}
                    size="lg"
                >
                    <FaChevronLeft />
                </IconButton>

                {visibleSlides.map((slideIndex, position) => {
                    const slide = projects[slideIndex];
                    const isCenter = position === 1;

                    // position slides left, center, right
                    const offsets = ["-40%", "0%", "40%"];
                    const scales = ["0.9", "1.1", "0.9"];
                    const zIndexes = [5, 10, 5];
                    const opacities = [0.8, 1, 0.8];

                    return (
                        <SlideCard
                            key={slideIndex}
                            slideIndex={slideIndex}
                            position={position} // your position logic
                            isCenter={isCenter}
                            offsets={offsets}
                            scales={scales}
                            zIndexes={zIndexes}
                            opacities={opacities}
                            title={slide.title}
                            org={slide.org}
                            location={slide.location}
                            date={slide.date}
                            description={slide.description}
                            image={slide.image}
                        />
                        // <Box
                        //     key={slideIndex}
                        //     position="absolute"
                        //     transition="all 0.8s ease-in-out"
                        //     transform={`translateX(${offsets[position]}) scale(${scales[position]})`}
                        //     zIndex={zIndexes[position]}
                        //     opacity={opacities[position]}
                        //     minW={{ base: "300px", md: "400px" }}
                        //     maxW={{ base: "85%", md: "70%" }}
                        //     borderRadius="xl"
                        //     bg="white"
                        //     boxShadow={isCenter ? "2xl" : "md"}
                        //     overflow="hidden"
                        //     p={4}
                        // >
                        //     <HStack
                        //         align={{ base: "center", md: "stretch" }}
                        //         w="100%"
                        //         gap={0}
                        //         flexDir={{ base: "column", md: "row" }}
                        //     >
                        //         {/* Text */}
                        //         <VStack
                        //             w={{ base: "100%", md: "50%" }}
                        //             align="start"
                        //             justify="space-around"
                        //             textAlign="start"
                        //             gap={4}
                        //             p={4}
                        //         >

                        //             <Text fontWeight="700" fontSize="1.5rem" color={"#DC9C46"} lineClamp={2}>
                        //                 {slide.title}
                        //             </Text>
                        //             <VStack align={"start"} color={"#0C182A"} w={"100%"} minH={"30%"} gap={8} justifyContent={"space-between"} fontWeight={700}>
                        //                 <HStack>
                        //                     <FaBuilding size={"1.5rem"} /><Text maxW={"80%"} fontSize="sm" display="flex" alignItems="center" gap={2}> {slide.org}
                        //                     </Text></HStack>

                        //                 <HStack><TfiLocationPin size={"1.5rem"} />  <Text maxW={"80%"} fontSize="sm" display="flex" alignItems="center" gap={2}>{slide.location}
                        //                 </Text></HStack>
                        //                 <HStack> <LuCalendar size={"1.5rem"} />  <Text maxW={"80%"} fontSize="sm" display="flex" alignItems="center" gap={2}>
                        //                     {slide.date}
                        //                 </Text></HStack>

                        //             </VStack>
                        //             <Text fontSize="sm" color="#464E5F" minH="20%" lineClamp={3}>
                        //                 {slide.description}
                        //             </Text>
                        //         </VStack>

                        //         {/* Image */}
                        //         <Box
                        //             w={{ base: "100%", md: "50%" }}
                        //             h="auto"
                        //             display="flex"
                        //             alignItems="center"
                        //             justifyContent="center"
                        //         >
                        //             <Image
                        //                 src={slide.image}
                        //                 alt={slide.title}
                        //                 w="100%"
                        //                 h="100%"
                        //                 objectFit="cover"
                        //                 borderRadius="md"
                        //             />
                        //         </Box>
                        //     </HStack >
                        // </Box >

                    );
                })}

                {/* Right Arrow */}
                <IconButton
                    aria-label="Next slide"
                    // icon={<FaChevronRight />}
                    onClick={handleNext}
                    position="absolute"
                    right={{ base: "0", md: "5%" }}
                    zIndex={20}
                    borderRadius="full"
                    bg="#DC9C46"
                    color="white"
                    _hover={{ bg: "#DC9C46", opacity: 0.8 }}
                    _active={{ bg: "white", color: "#DC9C46", borderWidth: "2px", borderColor: "#DC9C46" }}
                    size="lg"
                >
                    <FaChevronRight />
                </IconButton>
            </Box >

            {/* Pagination Dots */}
            <HStack gap={3} justify="center">
                {projects.map((_, index) => (
                    <Box
                        key={index}
                        w={active === index ? "14px" : "10px"}
                        h={active === index ? "14px" : "10px"}
                        borderRadius="full"
                        bg={active === index ? "white" : "#DC9C46"}
                        borderWidth={active === index ? "2px" : "0"}
                        borderColor="#DC9C46"
                        transition="all 0.3s ease"
                        cursor="pointer"
                        onClick={() => setActive(index)}
                        _hover={{ transform: "scale(1.1)" }}
                    />
                ))}
            </HStack>
        </VStack >
    );
};