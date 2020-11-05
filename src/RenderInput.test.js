import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderInput from "./RenderInput";


describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<RenderInput />)
    expect(screen.getByRole("button")).toBeTruthy();
  })
})