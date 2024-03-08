import { cleanup } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { Header } from "../../components/Header";
import Main from "../Main";
import { SocialFooter } from "../../components/SocialFooter";


describe("DrummerHouse", () => {
  afterEach(cleanup);
  it("should render header correctly", () => {
    <Header />;
  });
  it("should render main correctly", () => {
    <Main />;
  });
  it("should render socialFooter correctly", () => {
    <SocialFooter/>
  });
});
