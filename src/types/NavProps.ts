import type { SectionRefs } from "./SectionsRef";
import React from "react";

export type NavbarProps = {
  refs: SectionRefs;
  scrollToSection: (section: React.RefObject<HTMLDivElement>) => void;
};