import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioButton } from "./RadioButton";

describe("RadioButton component", () => {
  test("renders radio button with label", () => {
    render(<RadioButton label="Option 1" name="test" />);
    expect(screen.getByLabelText("Option 1")).toBeVisible();
  });

  test("applies disabled styles when disabled is true", () => {
    render(<RadioButton label="Disabled Option" name="test" disabled />);
    const input = screen.getByLabelText("Disabled Option");
    expect(input).toBeDisabled();
  });
});
