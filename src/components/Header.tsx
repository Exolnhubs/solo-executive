import { HStack, Box, IconButton, VStack, Image } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ChakraLink } from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      as="header"
      zIndex={2}
      color="white"
      position="absolute"
      top={0}
      mt={6}
      w="90%"
      px={4}
    >
      <HStack justify="space-between" align="center">
        {/* Logo */}
        <ChakraLink href="/">
          <Image src="./solo.webp" alt="Logo" w="60px" h="100%" />
        </ChakraLink>
        {/* Desktop Navbar + Actions: show ONLY on lg and up */}
        <HStack display={{ base: "none", lg: "flex" }} maxW={"50%"} justifyContent={"space-between"} gap={6} align="center">
          <Navbar />

        </HStack>

        {/* Mobile Hamburger: show UP TO md (hidden on lg and above) */}
        <IconButton
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          display={{ base: "flex", lg: "none" }}
          variant="ghost"
          color="white"
          onClick={() => setMenuOpen((s) => !s)}
          zIndex={5}
        >
          {menuOpen ? <FaTimes size="1.5rem" /> : <FaBars size="1.5rem" />}
        </IconButton>
      </HStack>

      {/* Mobile Menu (visible only when menuOpen AND on md and below) */}
      {menuOpen && (
        <VStack
          ref={menuRef} // 👈 attach ref here
          mt={4}
          p={4}
          gap={6}
          align="stretch"
          bg="blackAlpha.900"
          borderRadius="lg"
          display={{ base: "flex", lg: "none" }}
        >
          <Navbar />
        </VStack>
      )}
    </Box>
  );
};
