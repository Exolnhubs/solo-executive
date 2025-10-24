import { HStack, VStack, Text, Box } from "@chakra-ui/react";

export const WhoWeAre = () => {
  return (
    <VStack id="about">
      <Text color={"rgba(220, 156, 70, 1)"} fontWeight="700" fontSize={"1rem"}>من نحن</Text>
      <Text fontSize={{ sm: "1.5rem", md: "2.5rem" }} fontWeight="700" color={"black"}>نبني تجارب تُحكى… ونقيس أثرها</Text>
      <Box w="100px" borderBottom={"4px solid rgba(220, 156, 70, 1)"} />
      <HStack
        w="90vw"
        justify="space-between"
        align="stretch"
        gap={8}
        flexWrap="wrap"
        mt={{ base: "2rem", lg: "4rem" }}
        mb={{ base: "2rem", lg: "4rem" }}

      >
        {/* Text Section */}
        <VStack w={{ base: "100%", md: "45%" }}
          fontWeight={500}
          whiteSpace="pre-line"
          color="#464E5F" align="start" gap={6} justifyContent={"center"}
          fontSize={{ base: "0.8rem", md: "1rem", lg: "1.2rem" }}
          lineHeight="1.8"
          textAlign={"start"}>
          <Text>
            في التنفيذي المنفرد لا نبيع فعالية؛ نُصمّم تجربة متكاملة تدور حول هدفك التجاري وتُدار بمعايير تشغيل صارمة، من أول فكرة حتى تقرير ما بعد الإغلاق. نعمل كشريك مسؤول أمام النتائج: حضور نوعي، تفاعل ملموس، ومردود يُقاس بالبيانات لا بالصور.
          </Text>
          <Text fontWeight={700}>
            مهمتنا
          </Text>
          <Text>
            تصميم وتشغيل تجارب فعّالة، آمنة، ومحسوبة العائد عبر منظومة خدمات تبدأ من الإستراتيجية وتنتهي بقياس النتائج والتحسين.
          </Text>
          <Text fontWeight={700}>

            رؤيتنا{"\n"}
          </Text>
          <Text>
            تصميم وتشغيل تجارب فعّالة، آمنة، ومحسوبة العائد عبر منظومة خدمات تبدأ من الإستراتيجية وتنتهي بقياس النتائج والتحسين.
          </Text>

          <Box
            as="button"
            bg="rgba(220, 156, 70, 1)"
            color="black"
            fontSize={{ base: "0.9rem", md: "1rem" }}
            px={6}
            py={3}
            borderRadius="md"
            fontWeight="700"
            _hover={{ opacity: 0.9 }}
          >
            اطلب عرض الأسعار خلال 24 ساعة
          </Box>
        </VStack>

        <VStack w={{ base: "100%", md: "40%" }} position="relative" align="center">
          {/* Outer wrapper */}
          <VStack position="relative" w="100%">
            {/* Gradient background that follows content height */}
            <Box
              w="90%"
              borderRadius="lg"
              bg="linear-gradient(to right, rgba(255, 234, 132, 1), rgba(220, 156, 70, 1))"
              p="2px"
              pb="0"
            >
              {/* Dark overlay content box */}
              <Box
                position="relative"
                top="20px"
                left="20px"
                borderRadius="lg"
                bg="rgba(12, 24, 42, 1)"
                zIndex={1}
                boxShadow="xl"
                color="white"
                p={4}
              >
                <VStack
                  w="100%"
                  gap={4}
                  fontSize={{ base: "0.9rem", md: "1rem" }}
                  textAlign="start"
                  align="start"
                >
                  <Text fontWeight="bold">وعدنا</Text>
                  <Text borderBottom="1px solid rgba(255, 255, 255, 0.5)" pb={6}>
                    تخطيط محكم يقلّل الهدر ويرفع العائد على كل ريال.
                    تنفيذ دقيق وآمن بقيادة فرق معتمدة وبروتوكولات واضحة.
                    شفافية كاملة في الميزانيات والتوريد والجداول الزمنية.
                    تقرير أداء بعدي برؤى عملية للتحسين المستمر.
                  </Text>

                  <Text fontWeight="bold">مهمتنا</Text>
                  <Text>
                    عهدنا: مهنية بلا ضجيج، التزام مكتوب نراجعه بعد كل مشروع.
                    الإتقان: الجودة نتيجة لنظام عمل (قوائم فحص، مسؤوليات واضحة، مراجعات).
                    السلامة والمسؤولية: خطط مخاطر وطوارئ وتأمينات وتصاريح قبل أي تشغيل.
                    الشغف الهادئ: نحب ما نعمل، ونُخضعه لاختبار الجدوى قبل أن تراه على الأرض.
                  </Text>
                </VStack>
              </Box>
            </Box>
          </VStack>
        </VStack>

      </HStack >
    </VStack >
  );
};

export default WhoWeAre;