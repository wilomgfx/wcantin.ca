import { render, screen } from "@testing-library/react";
import Home from "./index.page";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <Home allPostsData={[{ date: "2023-02-02", id: "id", title: "test" }]} />
    );

    const heading = screen.getByText(/Hi I'm William 👋🏻/i);

    expect(heading).toBeInTheDocument();
  });
});
