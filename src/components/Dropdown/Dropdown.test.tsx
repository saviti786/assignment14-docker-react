import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./Dropdown";

const options = ["Option 1", "Option 2", "Option 3"];

describe("Dropdown component", () => {
  test("renders dropdown with options", () => {
    render(<Dropdown options={options} />);
    expect(screen.getByRole("combobox")).toBeVisible();
    expect(screen.getByText("Option 1")).toBeVisible();
  });

  test("applies disabled styles when disabled is true", () => {
    render(<Dropdown options={options} disabled />);
    const select = screen.getByRole("combobox");
    expect(select).toBeDisabled();
    expect(select).toHaveStyle("opacity: 0.6");
  });
});
