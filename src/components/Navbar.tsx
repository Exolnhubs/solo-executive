import { Box, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useSelector, useDispatch } from "react-redux";
import { setActiveLink } from "../store/slices/navSlice"; import type { RootState } from "../store";
import { selectLanguage } from "../store/slices/languageSlice";
// import { FaAngleDown } from "react-icons/fa";
import { useState, useRef, useEffect, type RefObject } from "react";
import { Link as RouterLink } from "react-router-dom";

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

  const [, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => {
    setOpenDropdown(null);
  });

  return (
    <Stack direction="column" zIndex={2} position="relative">
      <Stack
        direction={{ base: "column", md: "column", lg: "row" }}
        gap={{ base: "1rem", md: "2rem", xl: "3.5rem" }}
        color="white"
      >
        {links.map((link) => {
          return (
            <Box key={link.href} position="relative">
              <RouterLink
                to={link.subNav ? "#" : link.href} onClick={() =>
                  dispatch(setActiveLink(link.href))
                }
              >
                <Box
                  fontSize="1.5rem"
                  lineHeight="100%"
                  borderBottom={
                    link.label != "Contact" ?
                      activeLink === link.href
                        ? "2px solid #DC9C46"
                        : "none" : "none"
                  }
                  fontWeight={
                    activeLink === link.href
                      ? 700
                      : 500
                  }
                  bg={useColorModeValue("transparent", "gray.400")}
                  color={
                    link.label != "Contact" ?
                      activeLink === link.href
                        ? "#DC9C46"
                        : "#0C182A" : "#0C182A"
                  }
                  _hover={{ color: link.label != "Contact" ? "#DC9C46" : "" }}
                  display="inline-flex"
                  alignItems="center"
                  gap="0.3rem"
                  cursor="pointer"
                >
                  {link.label != "Contact" ? <Box p={4}>{lang === "en" ? link.en : link.ar} </Box> : <></>}
                  {link.label == "Contact" ? <Box bg={`#DC9C46`} p={4} borderRadius={"2xl"}>{lang === "en" ? link.en : link.ar}</Box> : null}
                </Box>
              </RouterLink>
            </Box>
          );
        })}
      </Stack>
    </Stack >
  );
};