import { VStack, HStack, Text, Box, Input } from "@chakra-ui/react"
import { FaPhone } from "react-icons/fa"
import { LuMapPin } from "react-icons/lu"
import { MdMail } from "react-icons/md"


export const ConactSection = () => {
    return (
        <VStack w={"100%"} gap={8} align={"center"} justify={"center"}>
            <VStack position="relative" zIndex={1} p={10} gap={4}>
                <Text color={"#DC9C46"} fontSize={"1rem"} fontWeight={700}>
                    تواصل معنا                </Text>

                <Text color={"black"} fontSize={"2.5rem"} fontWeight={700}>
                    إبدأ تجربتك معنا اليوم               </Text>
                <Box w="100px" borderBottom={"3px solid #DC9C46"} />

                <Text color={"#464E5F"} opacity={"0.7"} fontWeight={500} fontSize={"1rem"}>
                    املأ النموذج أدناه وسيتواصل معك فريقنا لمناقشة تفاصيل فعاليتك
                </Text>
            </VStack>
            <VStack w={"100%"}>

                <HStack w="90%"
                    flexDir={{ base: "column", lg: "row" }}
                    justify="space-between"
                    // align="stretch"
                    gap={8} p={8} position="relative">
                    <Box
                        bg="linear-gradient(to bottom, rgba(253, 233, 129, 1), rgba(220, 156, 70, 1))"
                        position="absolute"
                        left="-5vw"
                        top="0"
                        bottom="0"
                        zIndex={1}
                        borderRadius={"lg"}
                        w="15vw"  // better than 10% for viewport alignment
                    />

                    <VStack color={"#464E5F"} gap={4} bg={"white"} zIndex={2} w={{ base: "120%", md: "40%" }}
                        textAlign={"start"} border={"2px solid rgba(12, 24, 42, 0.1)"}
                        p={8} borderRadius={"lg"}>

                        <HStack w={"100%"} textAlign={"start"}> <VStack w={"50%"}>
                            <Text w={"100%"} fontSize={"1rem"}
                                fontWeight={700}> الاسم الكامل </Text>
                            <Input bg="rgba(12, 24, 42, 0.1)" border="none"
                                borderRadius={"lg"} placeholder="الاسم الكامل" type="text" />
                        </VStack>
                            <VStack w={"50%"}>
                                <Text w={"100%"} fontSize={"1rem"} fontWeight={700}> رقم الجوال </Text>
                                <Input bg="rgba(12, 24, 42, 0.1)" border="none" borderRadius={"lg"}
                                    w={"100%"} placeholder="رقم الجوال" type="number" /> </VStack>
                        </HStack> <HStack w={"100%"} textAlign={"start"}>
                            <VStack w={"50%"}>
                                <Text w={"100%"} fontSize={"1rem"} fontWeight={700}> البريد الالكتروني </Text>
                                <Input bg="rgba(12, 24, 42, 0.1)" border="none" borderRadius={"lg"}
                                    placeholder="البريد الالكتروني" type="email" />
                            </VStack> <VStack w={"50%"}>
                                <Text w={"100%"} fontSize={"1rem"} fontWeight={700}> اسم الشركة </Text>
                                <Input bg="rgba(12, 24, 42, 0.1)" border="none" borderRadius={"lg"}
                                    placeholder="اسم الشركة" type="text" /> </VStack>
                        </HStack>
                        <VStack w={"100%"}>
                            <Text w={"100%"} fontSize={"1rem"} fontWeight={700}> نوع الفعالية </Text>
                            <Input bg="rgba(12, 24, 42, 0.1)" border="none" borderRadius={"lg"}
                                placeholder="مؤتمر، معرض، ندوة، إلخ..." type="text" />
                        </VStack> <VStack w={"100%"}>
                            <Text w={"100%"} fontSize={"1rem"} fontWeight={700}> تفاصيل الفعالية </Text>
                            <Input h="100px" bg="rgba(12, 24, 42, 0.1)" border="none" borderRadius={"lg"}
                                placeholder="أخبرنا المزيد عن فعاليتك..." type="text" />
                        </VStack>
                        <Box _hover={{ transform: "scale(105%)", bg: "#ffbd67ff" }} as={"button"}
                            w={"100%"} fontWeight={"700"} p={2} color={"#0C182A"} bg={"#DC9C46"}
                            borderRadius={"md"}>
                            إرسال الطلب</Box>
                    </VStack>

                    <VStack

                        w={{ base: "120%", md: "30%" }}
                        borderRadius={"lg"} bg={"rgba(12, 24, 42, 1)"} color={"white"}
                        p={12} gap={8} zIndex={2}>
                        <Text fontSize={"1.5rem"} w={"100%"} textAlign={"start"} fontWeight={700}>
                            معلومات التواصل
                        </Text>
                        <VStack w={"100%"}>
                            <HStack justifyContent={"space-between"} w={"90%"}>
                                <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"lg"}>

                                    <FaPhone color="rgba(220, 156, 70, 1)" size={"1.5rem"} />
                                </Box>
                                <VStack w={"90%"} textAlign={"start"} >
                                    <Text w={"80%"} color={"rgba(255, 255, 255, 0.7)"}> الهاتف</Text>
                                    <Text w={"80%"}> +966558176660</Text>

                                </VStack>
                            </HStack>
                            <HStack justifyContent={"space-between"} w={"90%"}>
                                <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"lg"}>

                                    <MdMail color="rgba(220, 156, 70, 1)" size={"1.5rem"} />
                                </Box>
                                <VStack w={"90%"} textAlign={"start"} >
                                    <Text w={"80%"} color={"rgba(255, 255, 255, 0.7)"}> البريد الالكتروني</Text>
                                    <Text w={"80%"}> info@solosexecutive.sa</Text>

                                </VStack>
                            </HStack>
                            <HStack justifyContent={"space-between"} w={"90%"}>
                                <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"lg"}>
                                    <LuMapPin color="rgba(220, 156, 70, 1)" size={"1.5rem"} />
                                </Box>
                                <VStack w={"90%"} textAlign={"start"} >
                                    <Text w={"80%"} color={"rgba(255, 255, 255, 0.7)"}>العنوان</Text>
                                    <Text w={"80%"}>  المملكة العربية السعودية</Text>

                                </VStack>
                            </HStack>
                        </VStack>
                    </VStack>
                </HStack>

            </VStack>
            <HStack></HStack>
        </VStack>
    )
}