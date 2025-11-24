import type React from "react"

export type NavigationTabs = {
    items: NavigationItem[],
    scrollTo: (sectionRef: React.RefObject<HTMLDivElement | null>) => void
}

export type NavigationItem = {
    label: string,
    elementRef: React.RefObject<HTMLDivElement | null>
}