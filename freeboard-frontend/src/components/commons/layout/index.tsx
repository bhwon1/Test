import LayoutBanner from "./banner";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNav from "./navigation/LayoutNav.container";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNav />
      <div>{props.children}</div>
    </>
  );
}
