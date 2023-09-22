import Link from "next/link";

// Assets
import BookLogo from "@/assets/book.svg";
import Widget from "./Widget";

export default function BlogWidget() {
  return (
    <Widget svg={BookLogo}>
      I made a blog! Go check it out{" "}
      <Link href="https://blog.cytronicoder.com">here!</Link>
    </Widget>
  );
}
