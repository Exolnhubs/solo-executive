import { VStack, Box, Text } from "@chakra-ui/react";


export const Terms = () => {
    return (
        <VStack mt={"5rem"}>
            <Box w={"100vw"} minH={"40vh"}
                bg="linear-gradient(170.24deg, #DC9C46 1.22%, #FDE981 100%)"
                justifyContent={"center"}
                alignContent={"center"}
            >
                <Text color={"rgba(12, 24, 42, 1)"} fontWeight={"700"} fontSize={{ base: "2rem", lg: "4rem" }}>
                    الشروط والأحكام
                </Text>
            </Box>


        </VStack>
    );
};