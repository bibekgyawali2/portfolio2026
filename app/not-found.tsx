import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="Page not found"
        meta="404"
        lede="The page may have been moved, renamed, or the link may be incorrect."
      />
      <p>
        <Link href="/">Return to the front page →</Link>
      </p>
    </>
  );
}
