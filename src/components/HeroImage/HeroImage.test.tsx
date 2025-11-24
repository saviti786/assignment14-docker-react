import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HeroImage } from "./HeroImage";

describe("HeroImage component", () => {
  test("renders hero image and title", () => {
    render(<HeroImage src="/storybook/happy.jpg" alt="Be Happy" title="Stay Happy Always" />);
    expect(screen.getByText("Stay Happy Always")).toBeVisible();
  });

  test("applies disabled style", () => {
    render(<HeroImage src="/storybook/happy.jpg" alt="Be Happy" title="Disabled" disabled data-testid="hero-wrapper" />);
    const wrapper = screen.getByTestId("hero-wrapper");
    expect(wrapper).toHaveStyle("opacity: 0.6");

  });
});
