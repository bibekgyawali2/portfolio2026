import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function NotFound() {
  return (
    <>
      <PageHeader
        kicker="404"
        title="There is nothing at this address."
        lede="The page may have been renamed, or the link may be wrong."
      />
      <p>
        <Link href="/">Back to the front page</Link>
      </p>
    </>
  );
}
