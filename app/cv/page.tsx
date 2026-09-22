import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "CV",
  description:
    "CV of Bibek Gyawali — B.E. Electronics and Communication Engineering, Tribhuvan University, Kathmandu. Research, experience, skills and certifications.",
  alternates: { canonical: "/" },
};

export default function CVPage() {
  return <Home />;
}
