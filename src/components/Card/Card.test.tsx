import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./Card";

describe("Card component", () => {
  test("renders card with title", () => {
    render(<Card title="Sample Card" content="This is a test card" />);
    expect(screen.getByText("Sample Card")).toBeVisible();
  });

  test("applies disabled style when disabled", () => {
    render(
      <Card
        title="Disabled Card"
        content="This card should appear faded"
        disabled
      />
    );
    const card = screen.getByTestId("card");
    expect(card).toHaveStyle("opacity: 0.6");
  });
});
