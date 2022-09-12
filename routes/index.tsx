/** @jsx h */
import { h, createRef } from "preact";
import Input from "../islands/Input.tsx";

export default function Home() {
  const input = createRef();

  const btnClickHandler = () => {
    const aEle = document.querySelector("a") as HTMLAnchorElement;
    if (aEle != undefined)
      aEle.href = input?.current?.value
        ? `jobs/${input?.current?.value}`
        : "/error";
    aEle.click();
  };
  return (
    <div>
      <a href="https://www.active-connector.com/">
        <img src="/logo.png" alt="Active Connector company logo" />
      </a>
      <h2>Skill Test (Software Engineer)</h2>
      <Input />
    </div>
  );
}
