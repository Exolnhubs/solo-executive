import { HStack, VStack, Text } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { type ServiceProps } from "./ServiceCard";
export const OurServices = () => {
    const Services: ServiceProps[] = [
        {
            title: "EXOLNIX",
            description: { en: "Smart Financial & Accounting Management.", ar: "الإدارة المالية والمحاسبية الذكية." },
            icon: "/1.webp",
            overlay: "#1E9241",
            href: "/services/exolnix"
        },
        {
            title: "EXOMARK",
            description: {
                en: "Creative Marketing & Brand Identity.",
                ar: "الهوية التسويقية والعلامة التجارية الإبداعية."
            },
            icon: "/2.webp",
            overlay: "#DC0800",
            href: "/services/exomark"
        },
        {
            title: "EXONEXT",
            description: {
                en: "Digital Transformation & Technology Solutions.",
                ar: "حلول التحول الرقمي والتكنولوجيا."
            },
            icon: "/3.webp",
            overlay: "#FED036",
            href: "/services/exonext"
        },
        {
            title: "EXOBIZ",
            description: {
                en: "Business Consulting & Organizational Development",
                ar: "الاستشارات الإدارية وتطوير المؤسسات"
            },
            icon: "/4.webp",
            overlay: "#FC8000",
            href: "/services/exobiz"
        },
        {
            title: "EXOTALE",
            description: {
                en: "BRAND AND CREATIVE STRATEGY DIVISION",
                ar: "استراتيجية العلامة التجارية والإبداع"
            },
            icon: "/5.webp",
            overlay: "#9841FD",
            href: "/services/exotale"
        },
                {
            title: "EXOTALE",
            description: {
                en: "BRAND AND CREATIVE STRATEGY DIVISION",
                ar: "استراتيجية العلامة التجارية والإبداع"
            },
            icon: "/head.webp",
            overlay: "#9841FD",
            href: "/services/exotale"
        },
                {
            title: "EXOTALE",
            description: {
                en: "BRAND AND CREATIVE STRATEGY DIVISION",
                ar: "استراتيجية العلامة التجارية والإبداع"
            },
            icon: "/3.webp",
            overlay: "#9841FD",
            href: "/services/exotale"
        },
                {
            title: "EXOTALE",
            description: {
                en: "BRAND AND CREATIVE STRATEGY DIVISION",
                ar: "استراتيجية العلامة التجارية والإبداع"
            },
            icon: "/6.webp",
            overlay: "#9841FD",
            href: "/services/exotale"
        },
    ]
    return (
        <VStack w={"80%"} style={{ contentVisibility: "auto" }} // 👈 huge perf boost
            justifyContent={"center"} alignItems={"center"} gap={8}>
                <Text>{Services.length} Services</Text>

            <HStack w={"100%"} align={"stretch"} color={"white"} flexDir={{ base: "column", md: "row" }} justify={"center"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {Services.map((service, index) => (
                    <ServiceCard service={service} key={index} />
                ))}

            </HStack>
        </VStack>
    )
}