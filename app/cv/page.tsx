import type { Metadata } from "next";
import { site } from "@/content/site";
import Home from "../page";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV of Bibek Gyawali, B.E. Electronics and Communication Engineering graduate from Tribhuvan University, Kathmandu. Research, experience, skills, and certifications.",
  alternates: { canonical: site.url },
};

export default function CVPage() {
  return <Home />;
}
