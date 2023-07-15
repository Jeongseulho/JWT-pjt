import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "../App";

describe("App", () => {
  it("should render with the title visible", () => {
    render(<App />);
    const element = screen.getByText(/Vite \+ React/i);
    expect(element).toBeInTheDocument();
  });
});
