import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface NavLink {
  href: string;
  label: string;
  en: string;
  ar: string;
  subNav?: NavLink[];
}

interface NavState {
  links: NavLink[];
  activeLink: string;
  isArabic: boolean;
}

const initialState: NavState = {
  links: [
    { href: "/", label: "Home", en: "Home", ar: "الرئيسية" },
    {
      href: "/Services", label: "Services", en: "Services", ar: "خدماتنا", subNav: [
      ]
    },
    { href: "/projects", label: "projects", en: "Previous projects", ar: "أعمالنا" },
    { href: "/about", label: "About", en: "About", ar: "من نحن" },
    { href: "/contact", label: "Contact", en: "Contact", ar: "تواصل معنا" },
  ],
  activeLink: "/",
  isArabic: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setActiveLink: (state, action: PayloadAction<string>) => {
      state.activeLink = action.payload;
    },
    setArabic: (state, action: PayloadAction<boolean>) => {
      state.isArabic = action.payload;
      state.links = state.links.map((link) => ({
        ...link,
        label: action.payload ? link["ar"] ?? link.label : link["en"] ?? link.label,
      }));
    },
  },
});

export const { setActiveLink, setArabic } = navSlice.actions;
export default navSlice.reducer;
