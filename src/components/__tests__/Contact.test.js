import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"

test("Should load Contact Us Component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Verify that Contact page has Submit Button", () => {
    render(<Contact />);
  
    const button = screen.getByRole("button")
    const text= screen.getByText("Subject")
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
  
  test("Verify that Contact page Name Placeholder", () => {
    render(<Contact />);
  
    const placeholderText = screen.getByPlaceholderText("Name")
    expect(placeholderText).toBeInTheDocument();
  });
  
