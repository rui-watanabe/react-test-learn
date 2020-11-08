import React from "react";
import { findByText, render, screen} from "@testing-library/react";
import UseEffectRender from "./UseEffectRender";

describe("useEffect Rendering", () => {
  it("Should render only after async function resolved", async () => {
    render(<UseEffectRender />)
    expect(screen.queryByText(/I am/)).toBeNull()
    expect(await screen.findByText(/I am/)).toBeInTheDocument()
  })
})