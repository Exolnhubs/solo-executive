import { handleScroll } from "../../pages/Home";
import { VStack, Text, Box, Image } from "@chakra-ui/react";

export const CTA = () => {



    return (
        <VStack
            w="100vw"
            minH="40vh"
            gap={6}
            p={12}
            color="white"
            position="relative"
            justify="center"
            textAlign="center"
            overflow="hidden"
        >
            {/* Background Image */}
            <Image
                src="./cta.webp"
                alt="CTA background"
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="center"
                zIndex={0}
            />

            {/* Optional overlay for better contrast */}
            <Box
                position="absolute"
                top={0}
                left={0}
                w="100%"
                h="100%"
                bg="rgba(0, 0, 0, 0.5)" // darken the image slightly
                zIndex={1}
            />

            {/* Foreground content */}
            <VStack gap={4} zIndex={2} h={"90%"} justifyContent={"space-between"}>
                <Text fontSize={{ md: "1.5rem", lg: "2.5rem" }} fontWeight={700}>
                    وعد الخدمة
                </Text>

                <Box w="100px" borderBottom="4px solid white" borderRadius="2.5rem" />

                <Text fontSize="1rem" maxW="600px">
                    ميزانية مُحكَمة وشفافة—لا مفاجآت. خطة سلامة ومخاطر معتمدة قبل التشغيل.
                    تقرير أداء بعدي مع توصيات قابلة للتنفيذ.
                </Text>

                <Box
                    as="button"
                    p={4}
                    bg="rgba(220, 156, 70, 1)"
                    borderRadius="2.5rem"
                    color="rgba(12, 24, 42, 1)"
                    fontWeight="600"
                    _hover={{ opacity: 0.9 }}
                    onClick={handleScroll("#contact")}

                >
                    استلم خطة مبدئية مجاناً
                </Box>
            </VStack>
        </VStack>
    );
}