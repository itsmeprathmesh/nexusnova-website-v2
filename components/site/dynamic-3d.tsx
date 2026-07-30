"use client";

import dynamic from "next/dynamic";

export const DynamicBackground3D = dynamic(() => import("@/components/site/Background3D"), { ssr: false });
export const DynamicLoader = dynamic(() => import("@/components/site/Loader"), { ssr: false });
