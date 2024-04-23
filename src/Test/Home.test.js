import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../Home/Home";

describe("Home", () => {
  it("renders the header", () => {
    render(<Home />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders the footer", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /FAQ/i })).toBeInTheDocument();
  });

  it("renders the home link", () => {
    render(<Home />);
    expect(
      screen.getByText(/surf the wave of cutting-edge gadgets/i)
    ).toBeInTheDocument();
  });

  it("renders the shop now section", () => {
    render(<Home />);
    expect(screen.getByText(/300/i)).toBeInTheDocument();
  });

  it("renders the gear up button", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: /gear up/i })
    ).toBeInTheDocument();
  });

  it("renders the dive in button", () => {
    render(<Home />);
    expect(
      screen.getByRole("button", { name: /dive in/i })
    ).toBeInTheDocument();
  });
});
