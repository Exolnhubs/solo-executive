import { HStack, VStack, Text, Box } from "@chakra-ui/react";
import { ServiceCard } from "./ServiceCard";
import { type ServiceProps } from "./ServiceCard";


export const Services: ServiceProps[] = [
    {
        title: "تصميم وتنفيذ الأجنحة والأكشاك",
        description: {
            en: "Smart Financial & Accounting Management.",
            ar: `تصميم ثلاثي الأبعاد، هوية بصرية للركن، مواد وبناء، أثاث وتجهيزات، تجربة زائر (Journey)، مناطق تفاعل وأنشطة، وتركيب وفك.
مخططات 3D مع لوحات مواد وألوان.
تنفيذ وتسليم "جاهز للاستقبال" وفق كود المعارض.
كتيّب تشغيل للركن (Staffing / Script / Flow).
تناسب: العلامات التي تريد جناحاً "يبيع" لا "يزين".`,
        },
        icon: "/1.webp",
        overlay: "#1E9241",
        href: "/services/exolnix",
    },
    {
        title: "إدارة الفعاليات من الألف إلى الياء",
        description: {
            en: "Creative Marketing & Brand Identity.",
            ar: `إدارة شاملة تغطي الإستراتيجية، التخطيط الزمني، الميزانية، التوريد، التصاريح، العمليات الميدانية، إدارة المتحدثين والرعاة، وتقرير ما بعد الفعالية.
خطة تنفيذ مفصلة (Timeline + RACI + مخاطر).
لوحة متابعة مباشرة يوم الفعالية (Run of Show).
تقرير أداء بعدي (حضور، تفاعل، رضا، توصيات).
تناسب: الشركات التي تريد مسؤولاً واحداً "ينام مرتاح" — نستلم ونُسلّم.`,
        },
        icon: "/2.webp",
        overlay: "#DC0800",
        href: "/services/exomark",
    },
    {
        title: "تنظيم المعارض المحلية والدولية",
        description: {
            en: "Digital Transformation & Technology Solutions.",
            ar: `تخطيط مساحة، مسارات الزوار، نظام تسجيل واعتماد، إدارة العارضين والرعاة، رُخص وتصاريح، بروتوكول الافتتاح والختام.
خرائط تدفق وخطط سلامة وإخلاء معتمدة.
حزم رعاية وكتالوغ عارضين، ونظام اعتراضات / دعم.
لوحة مؤشرات يومية (Footfall, Dwell Time, Conversion).
تناسب: الهيئات والشركات التي تقيس العائد بالبيانات.`,
        },
        icon: "/3.webp",
        overlay: "#FED036",
        href: "/services/exonext",
    },
    {
        title: "تنظيم المؤتمرات والندوات وورش العمل",
        description: {
            en: "Business Consulting & Organizational Development.",
            ar: `إدارة المحتوى والأجندة، اختيار المتحدثين، إدارة الدعوات والتسجيل، غرف الترجمة، مسار المتدربين، وتصوير ومواد لاحقة (Post-Event).
أجندة مُحكمة مرتبطة بأهداف واضحة.
دليل متحدثين وميسّرين، وجلسات محسوبة زمنياً.
مواد تسليم (عروض، تسجيلات، مذكرات تنفيذية).
تناسب: الجهات التي تريد قيمة معرفية قابلة للتطبيق لا عرضاً شكلياً.`,
        },
        icon: "/4.webp",
        overlay: "#FC8000",
        href: "/services/exobiz",
    },
    {
        title: "الدعوات والبروتوكول والتنسيق مع الجهات الرسمية",
        description: {
            en: "Brand and Creative Strategy Division.",
            ar: `قوائم كبار الشخصيات، مسارات وصول ومقاعد، بروتوكولات الاستقبال والتقديم، الهدايا الرسمية، إدارة التصاريح والارتباطات الحكومية.
دفتر بروتوكول مفصل (Seating, Flag, Anthem, Order).
نقاط اتصال موحدة مع الجهات ذات العلاقة.
فريق استقبال مدرّب وسيناريوهات بديلة.
تناسب: الفعاليات رفيعة المستوى التي لا تحتمل الهفوات.`,
        },
        icon: "/5.webp",
        overlay: "#9841FD",
        href: "/services/exotale",
    },
    {
        title: "خدمات التسويق والترويج الإعلامي للفعاليات",
        description: {
            en: "Brand and Creative Strategy Division.",
            ar: `إستراتيجية ترويج قبل / أثناء / بعد، إدارة المحتوى والقنوات (سوشيال / إيميل / علاقات عامة / مؤثرين)، مواد تصميم وإنتاج سريع، تغطية مباشرة.
خطة محتوى ووسائط، ورسائل مقنعة لكل شريحة.
لوحة تحكم لحملات الأداء (Reach, CTR, RSVPs, CPA).
مكتبة صور / فيديو قصيرة قابلة لإعادة الاستخدام.
تناسب: من يريد مقاعد ممتلئة وجمهوراً مناسباً بتكلفة اكتساب مُنضبطة.`,
        },
        icon: "/head.webp",
        overlay: "#9841FD",
        href: "/services/exotale",
    },
    {
        title: "خدمات الضيافة واللوجستيات",
        description: {
            en: "Brand and Creative Strategy Division.",
            ar: `قوائم طعام وضيافة، إدارة موردين، تنسيق تنقّل وإقامة، مسارات استقبال وخدمات ميدانية، إدارة مخزون ومنافذ بيع إن وُجدت.
خطة ضيافة مفصلة حسب أوقات الذروة.
جدول تنقّل وإقامة للضيوف والمتحدثين.
فريق عمليات ميداني + قادة ورديات + نظام بلاغات.
تناسب: الفعاليات التي يتساوى فيها "حُسن الضيافة" مع روعة البرنامج.`,
        },
        icon: "/3.webp",
        overlay: "#9841FD",
        href: "/services/exotale",
    },
    {
        title: "تأجير الأنظمة السمعية والبصرية",
        description: {
            en: "Brand and Creative Strategy Division.",
            ar: `أنظمة صوت احترافية، شاشات LED، إضاءة مسرحية، منصات وتركيب، هندسة صوت وصورة، بث مباشر / ترجمة فورية، وفِرَق تشغيل معتمدة.
مخطط تقني (Signal Flow / Stage Plot) وفحوصات مسبقة.
تشغيل يوم الفعالية مع مهندس رئيسي و Backups.
تسجيل وتسليم ملفات حسب الحاجة.
تناسب: من يريد جودة تقنية ثابتة بلا "مفاجآت" في اللحظة الحرجة.`,
        },
        icon: "/6.webp",
        overlay: "#9841FD",
        href: "/services/exotale",
    },
];
export const OurServices = () => {


    return (
        <VStack w={"80%"} mt={8} style={{ contentVisibility: "auto" }} // 👈 huge perf boost
            justifyContent={"center"} alignItems={"center"} gap={8}>
            <Text fontSize={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }} fontWeight="bold">خدماتنا وتفاصيلها</Text>
            <Box w="100px" borderBottom={"4px solid rgba(220, 156, 70, 1)"} />
            <HStack w={"100%"} align={"stretch"} color={"white"} flexDir={{ base: "column", md: "row" }} justify={"center"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {Services.map((service, index) => (
                    <ServiceCard service={service} key={index} />
                ))}
            </HStack>
        </VStack>
    )
}