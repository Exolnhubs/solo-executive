import { VStack, HStack, Text, Box, Input, Button } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { MdMail } from "react-icons/md";
import emailjs from "emailjs-com";
import { useCallback, useState } from "react";

export const ConactSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        company: "",
        eventType: "",
        eventDetails: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        if (!formData.name.trim()) return "الرجاء إدخال الاسم الكامل";
        if (!formData.phone.trim()) return "الرجاء إدخال رقم الجوال";

        if (!/^\d+$/.test(formData.phone.trim()))
            return "رقم الجوال يجب أن يحتوي على أرقام فقط";

        if (!formData.email.trim()) return "الرجاء إدخال البريد الإلكتروني";

        if (!/\S+@\S+\.\S+/.test(formData.email.trim()))
            return "صيغة البريد الإلكتروني غير صحيحة";

        if (!formData.company.trim()) return "الرجاء إدخال اسم الشركة";
        if (!formData.eventType.trim()) return "الرجاء إدخال نوع الفعالية";
        if (!formData.eventDetails.trim()) return "الرجاء إدخال تفاصيل الفعالية";

        return null;
    };

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            setIsSubmitting(true);

            const error = validateForm();
            if (error) {
                alert(error);
                setIsSubmitting(false);
                return;
            }

            try {
                const messageText = `
            مستخدم قام بتعبئة نموذج التواصل:
            <br><br>
            الاسم: ${formData.name} <br>
            الجوال: ${formData.phone} <br>
            البريد: ${formData.email} <br>
            الشركة: ${formData.company} <br>
            نوع الفعالية: ${formData.eventType} <br>
            تفاصيل الفعالية: ${formData.eventDetails} <br>
            الوقت: ${new Date().toLocaleString()}
        `;

                await emailjs.send(
                    import.meta.env.VITE_EMAIL_SERVICE_ID,
                    import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                    {
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        company: formData.company,
                        eventType: formData.eventType,
                        eventDetails: formData.eventDetails,
                        message: messageText,
                        time: new Date().toLocaleString(),
                    },
                    import.meta.env.VITE_EMAIL_PUBLIC_KEY
                );

                window.location.href = "/thank-you";

                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    company: "",
                    eventType: "",
                    eventDetails: "",
                });

            } catch (error) {
                console.error("EmailJS error:", error);
                alert("فشل إرسال الرسالة. الرجاء المحاولة لاحقًا.");
            } finally {
                setIsSubmitting(false);
            }
        },
        [formData]
    );

    return (
        <VStack w={"100%"} gap={8} id="contact" align={"center"} justify={"center"}>
            {/* FORM HEADER */}
            <VStack position="relative" zIndex={1} p={10} gap={4}>
                <Text color={"#DC9C46"} fontSize={"1rem"} fontWeight={700}>
                    تواصل معنا
                </Text>

                <Text color={"black"} fontSize={"2.5rem"} fontWeight={700}>
                    إبدأ تجربتك معنا اليوم
                </Text>
                <Box w="100px" borderBottom={"3px solid #DC9C46"} />

                <Text
                    color={"#464E5F"}
                    opacity={"0.7"}
                    fontWeight={500}
                    fontSize={"1rem"}
                >
                    املأ النموذج أدناه وسيتواصل معك فريقنا لمناقشة تفاصيل فعاليتك
                </Text>
            </VStack>

            {/* FORM + CONTACT INFO */}
            <VStack w={"100%"}>
                <HStack
                    maxW={"100vw"}
                    overflow={"hidden"}
                    flexDir={{ base: "column", lg: "row" }}
                    justifyContent="space-between"
                    alignContent={"center"}
                    alignItems={"center"}
                    gap={8}
                    align={"stretch"}
                    p={8}
                    position="relative"
                >
                    <Box
                        bg="linear-gradient(to bottom, rgba(253, 233, 129, 1), rgba(220, 156, 70, 1))"
                        position="absolute"
                        left="-5vw"
                        top="0"
                        bottom="0"
                        zIndex={1}
                        borderRadius={"lg"}
                        w={{ base: "35vw", lg: "15vw" }}
                    />



                    {/* FORM */}
                    <VStack
                        color={"#464E5F"}

                        gap={4}
                        bg={"white"}
                        zIndex={2}
                        w={{ base: "90vw", lg: "50%" }}
                        textAlign={"start"}
                        border={"2px solid rgba(12, 24, 42, 0.1)"}
                        p={8}
                        borderRadius={"lg"}
                    >
                        <form onSubmit={handleSubmit} style={{ width: "100%" }}>

                            {/* NAME + PHONE */}
                            <HStack w={"100%"}>
                                <VStack w={"50%"}>
                                    <Text fontSize={"1rem"} fontWeight={700} w="100%">
                                        الاسم الكامل
                                    </Text>
                                    <Input
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData((f) => ({ ...f, name: e.target.value }))
                                        }
                                        bg="rgba(12, 24, 42, 0.1)"
                                        border="none"
                                        borderRadius={"lg"}
                                        placeholder="الاسم الكامل"
                                    />
                                </VStack>

                                <VStack w={"50%"}>
                                    <Text fontSize={"1rem"} fontWeight={700} w="100%">
                                        رقم الجوال
                                    </Text>
                                    <Input
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData((f) => ({ ...f, phone: e.target.value }))
                                        }
                                        type="number"
                                        bg="rgba(12, 24, 42, 0.1)"
                                        border="none"
                                        borderRadius={"lg"}
                                        placeholder="رقم الجوال"
                                    />
                                </VStack>
                            </HStack>

                            {/* EMAIL + COMPANY */}
                            <HStack w={"100%"}>
                                <VStack w={"50%"}>
                                    <Text fontSize={"1rem"} fontWeight={700} w="100%">
                                        البريد الإلكتروني
                                    </Text>
                                    <Input
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData((f) => ({ ...f, email: e.target.value }))
                                        }
                                        type="email"
                                        bg="rgba(12, 24, 42, 0.1)"
                                        border="none"
                                        borderRadius={"lg"}
                                        placeholder="البريد الإلكتروني"
                                    />
                                </VStack>

                                <VStack w={"50%"}>
                                    <Text fontSize={"1rem"} fontWeight={700} w="100%">
                                        اسم الشركة
                                    </Text>
                                    <Input
                                        value={formData.company}
                                        onChange={(e) =>
                                            setFormData((f) => ({ ...f, company: e.target.value }))
                                        }
                                        bg="rgba(12, 24, 42, 0.1)"
                                        border="none"
                                        borderRadius={"lg"}
                                        placeholder="اسم الشركة"
                                    />
                                </VStack>
                            </HStack>

                            {/* EVENT TYPE */}
                            <VStack w={"100%"}>
                                <Text fontSize={"1rem"} fontWeight={700} w="100%">
                                    نوع الفعالية
                                </Text>
                                <Input
                                    value={formData.eventType}
                                    onChange={(e) =>
                                        setFormData((f) => ({ ...f, eventType: e.target.value }))
                                    }
                                    bg="rgba(12, 24, 42, 0.1)"
                                    border="none"
                                    borderRadius={"lg"}
                                    placeholder="مؤتمر، معرض، ندوة..."
                                />
                            </VStack>

                            {/* EVENT DETAILS */}
                            <VStack w={"100%"}>
                                <Text fontSize={"1rem"} fontWeight={700} w="100%">
                                    تفاصيل الفعالية
                                </Text>
                                <Input
                                    value={formData.eventDetails}
                                    onChange={(e) =>
                                        setFormData((f) => ({ ...f, eventDetails: e.target.value }))
                                    }
                                    h="100px"
                                    bg="rgba(12, 24, 42, 0.1)"
                                    border="none"
                                    borderRadius={"lg"}
                                    placeholder="أخبرنا المزيد عن فعاليتك..."
                                />
                            </VStack>

                            {/* SUBMIT BUTTON */}
                            <Button
                                as="button"
                                type="submit"
                                disabled={isSubmitting}
                                _hover={{ transform: "scale(105%)", bg: "#ffbd67ff" }}
                                w={"100%"}
                                fontWeight={"700"}
                                p={3}
                                color={"#0C182A"}
                                bg={"#DC9C46"}
                                borderRadius={"md"}
                            >
                                {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
                            </Button>
                        </form>

                    </VStack>

                    <VStack w={{ base: "90vw", lg: "40%" }} borderRadius={"lg"} bg={"rgba(12, 24, 42, 1)"} color={"white"} p={12} gap={8} zIndex={2}>
                        <Text fontSize={"1.5rem"} w={"100%"} textAlign={"start"} fontWeight={700}> معلومات التواصل </Text>
                        <VStack w={"100%"}>
                            <HStack justifyContent={"space-between"} w={"90%"}> <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"lg"}>
                                <FaPhone color="rgba(220, 156, 70, 1)" size={"1.5rem"} /> </Box> <VStack w={"90%"} textAlign={"start"} >
                                    <Text w={"80%"} color={"rgba(255, 255, 255, 0.7)"}> الهاتف</Text> <Text w={"80%"}> +966558176660</Text>
                                </VStack>
                            </HStack>
                            <HStack justifyContent={"space-between"} w={"90%"}>
                                <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"lg"}>
                                    <MdMail color="rgba(220, 156, 70, 1)" size={"1.5rem"} />
                                </Box>
                                <VStack w={"90%"} textAlign={"start"} > <Text w={"80%"} color={"rgba(255, 255, 255, 0.7)"}> البريد الالكتروني</Text>
                                    <Text w={"80%"}> info@solosexecutive.sa</Text>
                                </VStack>
                            </HStack>
                            <HStack justifyContent={"space-between"} w={"90%"}>
                                <Box bg={"rgba(255, 255, 255, 0.1)"} p={2} borderRadius={"lg"}>
                                    <LuMapPin color="rgba(220, 156, 70, 1)" size={"1.5rem"} />
                                </Box> <VStack w={"90%"} textAlign={"start"} >
                                    <Text w={"80%"} color={"rgba(255, 255, 255, 0.7)"}>العنوان</Text>
                                    <Text w={"80%"}> المملكة العربية السعودية</Text>
                                </VStack>



                            </HStack>
                        </VStack>
                    </VStack>
                </HStack>

            </VStack>

        </VStack>)
};
