import { VStack, Text, Box } from "@chakra-ui/react";
// import { Image } from "@chakra-ui/react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, Navigation } from "swiper/modules";
// import useSwiperDirectionFix from "../../hooks/useSwiperDirectionFix";
import "swiper/swiper-bundle.css";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../store/slices/languageSlice";
// const images = ["/Partners.webp", "/Partners 2.webp", "/Partners 1.webp", "/Partners 3.webp", "/Partners 4.webp","/Partners 5.webp"];

// Repeat images until we reach 10 slides
// const Slides = Array.from({ length: 6 }, (_, i) => ({
//     img: images[i % images.length],
// }));

export const OurPartners = () => {
    const lang = useSelector(selectLanguage);
    // const { swiperRef, direction, key } = useSwiperDirectionFix();

    return (
        <VStack w="100%" mx="auto" gap={8}>
            <Text color="rgba(220, 156, 70, 1)" fontWeight="700">
                لماذا نحن
            </Text>
            <Text fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }} fontWeight="bold">
                {lang === "en" ? "The ideal partner for your success" : "الشريك الأمثل لنجاح فعاليتك"}
            </Text>
            <Box w="50px" borderBottom={"4px solid rgba(220, 156, 70, 1)"} />

            <Text color={"rgba(70, 78, 95, 1)"}>
                عملاؤنا هم مصدر فخرنا. تعاونا مع جهات حكومية وخاصة رائدة في مختلف المجلات
            </Text>

            {/* <Swiper
                key={key}
                ref={swiperRef}
                direction="horizontal"
                dir={direction}
                modules={[Pagination, Autoplay, Navigation]}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop
                watchOverflow={true}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
                style={{
                    paddingBottom: "2rem",
                    width: "100%",
                }}
            >
                {Slides.map((slide, i) => (
                    <SwiperSlide key={i} style={{ display: "flex", justifyContent: "center" }}>
                        <Box
                            w="120px"
                            h="120px"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Image
                                src={slide.img}
                                alt={`Slide ${i + 1}`}
                                maxW="100%"
                                maxH="100%"
                                objectFit="contain"
                            />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper> */}

            <Box as={"button"} bg={"rgba(220, 156, 70, 1)"} color="black"
                lineHeight={"100%"} fontSize={"1.2rem"} fontWeight={700}
                _hover={{ bg: "rgba(220, 156, 70, 0.8)" }} border="none" border-radius="5px" p={4} borderRadius={8}>
                احجز اجتماع 15 دقيقة
            </Box>
        </VStack>
    );
};
