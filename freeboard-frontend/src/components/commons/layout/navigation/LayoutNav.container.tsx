import type { MouseEvent } from "react";
import { useRouter } from "next/router";
import LayoutNavUI from "./LayoutNav.presenter";

export default function LayoutNav() {
  const router = useRouter();

  const onClickMenu = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof Element) void router.push(e.target.id);
  };

  return (
    <>
      <LayoutNavUI onClickMenu={onClickMenu} />
    </>
  );
}
