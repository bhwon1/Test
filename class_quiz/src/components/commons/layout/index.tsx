import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./hedaer";
import LayoutNav from "./nav";

const HIDDEN_BANNER = ["/13/one"];

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  const qqq = {
    width: "30%",
    height: "300px",
    background: "orange",
  };

  const router = useRouter();

  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  return (
    <>
      <LayoutHeader />
      {!isHiddenBanner && <LayoutBanner />}
      <LayoutNav />
      <div style={{ display: "flex" }}>
        <div style={qqq}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
