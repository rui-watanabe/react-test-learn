import reducer, {fetchDummy} from '../src/features/customCounter/customCounterSlice';

describe("extraReducers", () => {
  const initialState = {
    mode: 0,
    value: 1
  }
  it("Should output 100 + payload when fulfilled", () => {
    const action = { type: fetchDummy.fulfilled.type, payload: 5};
    const state = reducer(initialState, action);
    expect(state.value).toEqual(105);
  })
})
