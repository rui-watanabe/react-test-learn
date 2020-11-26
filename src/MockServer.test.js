import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import MockServer from "./MockServer";

//モックサーバーの定義
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({username: "Max dummy"}));
  })
);

beforeAll(() => server.listen());//最初にサーバーを立てる
afterEach(() => {
  server.resetHandlers();
  cleanup();
});//各テストの後にはサーバーの情報を初期化する
afterAll(() => server.close());//全てのテストが終わったらサーバーを落とす

describe("Mocking API", () => {
  it("Should display fetched data correctly and button disabled(fetch success)", async () => {
    render(<MockServer />);//MockServerコンポーネントをレンダリング
    userEvent.click(screen.getByRole("button"));//ボタンを取得してクリック
    expect(await screen.findByRole("heading")).toHaveTextContent("Max dummy");//hタグのテキストMax dummyが表示されることを確認
    expect(screen.getByRole("button")).toHaveAttribute("disabled");//ボタンがdisabledになっていることを確認
  })
  it("Should display error message, no render heading and button abled (fetched failure)", async () => {
    server.use(
      rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
      return res(ctx.status(404));//サーバー接続時にエラーを返す
    }));
    render(<MockServer />);//MockServerコンポーネントをレンダリング
    userEvent.click(screen.getByRole("button"));//ボタンを取得してクリック
    expect(await screen.findByTestId("error")).toHaveTextContent("Fetching Failed");//testidに設定したテキストFetching Failedが表示されることを確認
    expect(await screen.queryByRole("heading")).toBeNull();//hタグのテキストがないことを確認
    expect(screen.getByRole("button")).not.toHaveAttribute("disabled");//ボタンがdisabledになっていないことを確認
  })
})

