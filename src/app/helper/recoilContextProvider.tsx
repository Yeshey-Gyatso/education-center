"use client";

import { RecoilRoot, atom } from "recoil";
export const preloaderState = atom({
 key: "Preloader",
 default: false,
});

export default function RecoilContextProvider({ children }: { children: React.ReactNode }) {
 return <RecoilRoot>{children}</RecoilRoot>;
}