import Link from "next/link";

// Assets
import CakeLogo from "@/assets/cake.svg";
import Widget from "./Widget";

export default function BlogWidget() {
  return (
    <Widget svg={CakeLogo}>
      I made a blog! Go check it out{" "}
      <Link href="https://blog.cytronicoder.com">here!</Link>
    </Widget>
  );
}
