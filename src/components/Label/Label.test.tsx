import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Label } from "./Label";

describe("Label component", () => {
  test("renders label text", () => {
    render(<Label text="Username" />);
    expect(screen.getByText("Username")).toBeVisible();
  });

  test("applies color style", () => {
    render(<Label text="Colored" color="red" />);
    const label = screen.getByText("Colored");
    expect(label).toHaveStyle("color: red");
  });
});
