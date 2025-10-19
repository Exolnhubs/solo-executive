import { selectLanguage } from "../../store/slices/languageSlice";
import { VStack, Text, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { memo, useState, useRef, useEffect } from "react";

export type ServiceProps = {
    title?: string;
    description: { en: string; ar: string };
    icon?: string;
    overlay?: string;
    href?: string;
};

type ServiceCardProps = {
    service: ServiceProps;
};

export const ServiceCard = memo(
    ({ service }: ServiceCardProps) => {
        const lang = useSelector(selectLanguage);
        const [isHovered, setIsHovered] = useState(false);
        const [overlayHeight, setOverlayHeight] = useState<number>(0);
        const overlayRef = useRef<HTMLDivElement>(null);

        // Dynamically measure overlay height to adjust card height
        useEffect(() => {
            if (overlayRef.current) {
                const resizeObserver = new ResizeObserver(() => {
                    setOverlayHeight(overlayRef.current?.scrollHeight || 0);
                });
                resizeObserver.observe(overlayRef.current);
                return () => resizeObserver.disconnect();
            }
        }, []);

        return (
            <VStack
                position="relative"
                justify="center"
                align="center"
                w={{ base: "90vw", md: "49%", "2xl": "49%" }}
                borderRadius="lg"
                overflow="hidden"
                cursor="pointer"
                bg="gray.800"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                // ✅ height adapts dynamically
                transition="height 0.4s ease"
                minH="250px"
                h={isHovered ? `${overlayHeight + 250}px` : "auto"}
            >
                {/* Background Image */}
                <Box
                    position="absolute"
                    inset={0}
                    zIndex={0}
                    transition="transform 0.4s ease"
                    transform={isHovered ? "scale(1.08)" : "scale(1)"}
                >
                    <Image
                        src={service.icon}
                        alt={service.title || "Service"}
                        objectFit="cover"
                        objectPosition="center"
                        w="100%"
                        h="100%"
                        loading="lazy"
                        decoding="async"
                    />
                    <Box
                        position="absolute"
                        inset={0}
                        zIndex={1}
                        bg="#00000040"
                        opacity={isHovered ? 1 : 0.5}
                        transition="opacity 0.4s ease"
                    />
                </Box>

                {/* Title (visible when not hovered) */}
                <Text
                    position="absolute"
                    bottom="6"
                    left="6"
                    right="6"
                    w="80%"
                    zIndex={3}
                    color="white"
                    fontWeight="extrabold"
                    fontSize={{ base: "1.4rem", md: "1.8rem" }}
                    lineHeight={1.2}
                    textShadow="0 2px 8px rgba(0,0,0,0.6)"
                    opacity={isHovered ? 0 : 1}
                    transition="opacity 0.3s ease"
                    textAlign="start"
                >
                    {service.title}
                </Text>

                {/* Overlay (slides up on hover) */}
                <Box
                    ref={overlayRef}
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={0}
                    zIndex={2}
                    transform={isHovered ? "translateY(0)" : "translateY(100%)"}
                    transition="transform 0.4s ease"
                >
                    <Box
                        w="100%"
                        background="linear-gradient(to top, #00000000 10%, #0C182ACC 80%)"
                        p={6}
                        display="flex"
                        flexDirection="column"
                        textAlign="start"
                        gap={3}
                    >
                        <Box maxW="90%">
                            <Text
                                color="white"
                                fontWeight="extrabold"
                                fontSize={{ base: "1.4rem", md: "1.8rem" }}
                                lineHeight={1.2}
                            >
                                {service.title}
                            </Text>

                            <Text
                                color="white"
                                fontSize={{ base: "0.95rem", md: "1.1rem" }}
                                fontWeight="light"
                                lineHeight={1.5}
                            >
                                {lang === "en"
                                    ? service.description.en
                                    : service.description.ar}
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </VStack>
        );
    },
    (prev, next) =>
        prev.service.icon === next.service.icon &&
        prev.service.title === next.service.title &&
        prev.service.href === next.service.href &&
        prev.service.description.en === next.service.description.en &&
        prev.service.description.ar === next.service.description.ar
);
