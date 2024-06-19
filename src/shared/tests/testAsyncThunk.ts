import { AsyncThunkAction, DeepPartial } from "@reduxjs/toolkit";
import axios, { AxiosStatic } from "axios";
import { StateSchema } from "@/app/providers/StoreProvider";

type AsyncThunkType<Args, ReturnValue, RejectValue> = (
  arg: Args,
) => AsyncThunkAction<
  ReturnValue,
  Args,
  {
    rejectValue: RejectValue;
  }
>;

jest.mock("axios");
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Args, ReturnValue, RejectValue> {
  dispatch: jest.MockedFn<any>;

  getState: () => StateSchema;

  navigate: jest.MockedFn<any>;

  mockedApi: jest.MockedFunctionDeep<AxiosStatic>;

  constructor(
    public asyncTunk: AsyncThunkType<Args, ReturnValue, RejectValue>,
    public state?: DeepPartial<Required<StateSchema>>,
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.navigate = jest.fn();
    this.mockedApi = mockedAxios;
  }

  async call(args: Args) {
    const action = this.asyncTunk(args);
    const result = await action(this.dispatch, this.getState, {
      navigate: this.navigate,
      api: this.mockedApi,
    });

    return result;
  }
}
