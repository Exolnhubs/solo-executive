import { Box, Stack, VStack, Link } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "../store/slices/navSlice";
import type { RootState } from "../store";
import { selectLanguage } from "../store/slices/languageSlice";
import { FaAngleDown } from "react-icons/fa";
import { useState, useRef, useEffect, type RefObject } from "react";

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function listener(event: MouseEvent | TouchEvent) {
      const el = ref.current;
      if (!el || el.contains(event.target as Node)) return;
      handler(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export const Navbar = () => {
  const dispatch = useDispatch();
  const { activeLink, links } = useSelector((state: RootState) => state.nav);
  const lang = useSelector(selectLanguage);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => {
    setOpenDropdown(null);
  });

  // ✅ Fixed smooth scroll handler with URL update
  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    const alt = "#" + href.substring(1);
    // Update URL hash if it's an anchor
    if (alt.startsWith("#")) {
      window.history.pushState(null, "", alt);

      if (alt === "#" || alt === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        dispatch(setActiveLink(alt));
        setOpenDropdown(null);
        return;
      }

      const section = document.querySelector(alt);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        dispatch(setActiveLink(alt));
        setOpenDropdown(null);
      }
    } else {
      // If href is not an anchor (like "/"), do nothing or route normally
      console.warn(`Skipping invalid scroll target: ${alt}`);
    }
  };


  // Toggle dropdown on click (for arrow icon only)
  const handleDropdownToggle = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === href ? null : href);
  };

  // Handle link click with dropdown
  const handleLinkWithDropdown = (href: string) => (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // If clicking the arrow icon, just toggle dropdown
    if (target.tagName === 'svg' || target.tagName === 'path') {
      e.preventDefault();
      e.stopPropagation();
      setOpenDropdown(openDropdown === href ? null : href);
    } else {
      // If clicking the link text, scroll to section
      handleScroll(href)(e);
    }
  };

  return (
    <Stack direction="column" zIndex={2} position="relative">
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "1rem", md: "2rem", xl: "3.5rem" }}
        color="white"
      >
        {links.map((link) => {
          const isDropdownOpen = openDropdown === link.href;

          return (
            <Box key={link.href} position="relative">
              <Link
                href={link.href}
                onClick={
                  link.subNav && link.subNav.length > 0
                    ? handleLinkWithDropdown(link.href)
                    : handleScroll(link.href)
                }
                fontSize="1.5rem"
                lineHeight="100%"
                fontWeight="500"
                bg={useColorModeValue("transparent", "gray.400")}
                color={
                  activeLink === link.href
                    ? useColorModeValue("#b3b3b3ff", "gray.100")
                    : useColorModeValue("white", "gray.400")
                }
                _hover={{ color: useColorModeValue("#226CFF", "gray.100") }}
                _active={{ color: useColorModeValue("#226CFF", "gray.100") }}
                display="inline-flex"
                alignItems="center"
                gap="0.3rem"
                cursor="pointer"
              >
                {lang === "en" ? link.en : link.ar}
                {link.subNav && link.subNav.length > 0 ? (
                  <Box
                    as="span"
                    onClick={(e) => handleDropdownToggle(link.href, e)}
                    cursor="pointer"
                    display="inline-flex"
                    alignItems="center"
                  >
                    <FaAngleDown
                      size="0.8rem"
                      style={{
                        transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </Box>
                ) : null}
              </Link>

              {/* SubNav dropdown */}
              {link.subNav && link.subNav.length > 0 && isDropdownOpen && (
                <VStack
                  ref={dropdownRef}
                  position="absolute"
                  top="100%"
                  mt={2}
                  bg={useColorModeValue("white", "gray.700")}
                  boxShadow="md"
                  borderRadius="md"
                  overflow="hidden"
                  align="stretch"
                  minW="200px"
                  zIndex={10}
                >
                  {link.subNav.map((subLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      textAlign="start"
                      px={4}
                      py={2}
                      onClick={handleScroll(subLink.href)}
                      fontSize="1.2rem"
                      fontWeight="500"
                      color={
                        activeLink === subLink.href
                          ? useColorModeValue("#b3b3b3ff", "gray.100")
                          : useColorModeValue("gray.800", "gray.200")
                      }
                      _hover={{ bg: useColorModeValue("gray.100", "gray.600") }}
                    >
                      {lang === "en" ? subLink.en : subLink.ar}
                    </Link>
                  ))}
                </VStack>
              )}
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};