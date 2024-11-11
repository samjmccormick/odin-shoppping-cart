import { render, screen } from "@testing-library/react";
import Root from "../src/components/root";
import { describe, it } from "vitest";

describe("Root component", () => {
  it("renders root component", () => {
    render(<Root />);
  });

  screen.getByText("Shop");
});
