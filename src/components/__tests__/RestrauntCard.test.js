import RestrauntCard from "../RestrauntCard";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MOCK_DATA } from "../../../mocks/resCardMocks";

it("Should Render Restraunt Card Component card with props data", () => {
  render(<RestrauntCard restaurant={MOCK_DATA} />);

  const text = screen.getByText("Burger King");

  expect(text).toBeInTheDocument();
});