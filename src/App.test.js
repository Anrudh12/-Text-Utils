import {render,screen } from "@testing-library/react";
import App from "./App";
//modular approach
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); //The jest-dom utility library provides this function  whether the element is present in the documnet or not 
});
