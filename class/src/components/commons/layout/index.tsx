import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADER = ["/12-02-libaray-star"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const qqq = {
    width: "30%",
    background: "orange",
  };

  const router = useRouter();
  console.log("============");
  console.log(router.asPath);
  console.log("============");

  const isHiddenHeader = HIDDEN_HEADER.includes(router.asPath); // false 일떄만 보여줘야함

  return (
    <>
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={qqq}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
