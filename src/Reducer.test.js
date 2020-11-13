import reducer, {increment, incrementByAmount} from '../src/features/customCounter/customCounterSlice';

describe("Reducer of ReduxToolKit", () => {
  describe("increment action", () => {
    let initialState = {
      mode: 0,
      value: 1,
    }
    it("Should increment by 1 with mode 0", () => {
      const action = {type: increment.type};
      const state = reducer(initialState, action);
      expect(state.value).toEqual(2);
    })
    it("Should increment by 100 with mode 1", () => {
      initialState = {
        mode: 1,
        value: 1,
      }
      const action = {type: increment.type};
      const state = reducer(initialState, action);
      expect(state.value).toEqual(101);
    })
    it("Should increment by 10000 with mode 2", () => {
      initialState = {
        mode: 2,
        value: 1,
      }
      const action = {type: increment.type};
      const state = reducer(initialState, action);
      expect(state.value).toEqual(10001);
    })
  })
})