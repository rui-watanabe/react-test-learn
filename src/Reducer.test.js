import reducer, {increment, incrementByAmount} from '../src/features/customCounter/customCounterSlice';

describe("Reducer of ReduxToolKit", () => {
  describe("increment action", () => {
    let initialStatte = {
      mode: 0,
      value: 1,
    }
    it("Should increment by 1 with mode 0", () => {
      const action = {type: increment.type};
      const state = reducer(initialStatte, action);
      expect(state.value).toEqual(2);
    })
  })
})