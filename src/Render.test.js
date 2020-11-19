import React from "react";
import { render, screen } from "@testing-library/react";
import Render from "./Render";

describe("Rendering", () => {
  it("Should render all the elements correctly", () => {
    render(<Render />);
    // screen.debug();
    // screen.debug(screen.getByRole("heading"))
    expect(screen.getByRole("heading")).toBeTruthy();//hタグの取得
    expect(screen.getByRole("textbox")).toBeTruthy();//textタイプのinputタグを主六
    expect(screen.getAllByRole("button")[0]).toBeTruthy();//ボタン要素の1つ目を取得
    expect(screen.getAllByRole("button")[1]).toBeTruthy();//ボタン要素の2つ目を取得
    screen.debug(screen.getByText("Learn"));//途中で値をみるデバックも可能
    expect(screen.getByText("Learn")).toBeTruthy();//textの検索（falseの場合エラーを返す）
    expect(screen.queryByText("Code Camp")).toBeNull();//queryByは要素が存在しないことを確認
    expect(screen.getByTestId("testId")).toBeTruthy();//idで取得
  });
});
