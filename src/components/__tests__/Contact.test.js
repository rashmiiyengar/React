import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("ContactUs testcases Grouped", () => {
  test("Should load Contact Us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Verify that Contact page has Submit Button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    const text = screen.getByText("Subject");
    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });

  test("Verify that Contact page has 'Name' Placeholder", () => {
    render(<Contact />);

    const placeholderText = screen.getByPlaceholderText("Name");
    expect(placeholderText).toBeInTheDocument();
  });
});

it("Should load 3 input boxes in Contact page ", () => {
  //Render Component
  render(<Contact />);

  //Querying
  const inputBoxes = screen.getAllByRole("textbox");

  //Assert
  expect(inputBoxes.length).toBe(4);
});
//it and test both are same
it("Should not load any input boxes other than 3", () => {
    //Render Component
    render(<Contact />);
  
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
  
    //Assert
    expect(inputBoxes.length).not.toBe(2);
  });