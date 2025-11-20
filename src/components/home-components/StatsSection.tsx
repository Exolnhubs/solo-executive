import { Box, HStack, Text, VStack } from "@chakra-ui/react";


export const StatsSection = () => {

    return (
        <HStack align="stretch" w={{ base: "70%", md: "50%", lg: "60%" }}
            justifyContent={"space-between"} flexWrap={"wrap"}>

            <VStack >
                <Text color={"rgba(220, 156, 70, 1)"} fontSize={{ sm: "2rem", lg: "3rem" }} fontWeight={700}>+   ٢٠٠</Text>
                <Text color={"rgba(70, 78, 95, 1)"} fontWeight={"700"}>فعالية ناجحة</Text>
            </VStack>

            <Box borderRight={"2px solid rgba(234, 234, 234, 1)"} />

            <VStack>
                <Text color={"rgba(220, 156, 70, 1)"} fontSize={{ sm: "2rem", lg: "3rem" }} fontWeight={700} >+    ٥٠</Text>
                <Text color={"rgba(70, 78, 95, 1)"} fontWeight={"700"}>عميل راضٍ</Text>
            </VStack>

            <Box borderRight={"2px solid rgba(234, 234, 234, 1)"} />

            <VStack gap={4}>
                <Text color={"rgba(220, 156, 70, 1)"} fontSize={{ sm: "2rem", lg: "3rem" }} fontWeight={700} >+    ١٠</Text>
                <Text color={"rgba(70, 78, 95, 1)"} fontWeight={"700"}>سنوات خبرة</Text>

            </VStack>

        </HStack>
    )
}