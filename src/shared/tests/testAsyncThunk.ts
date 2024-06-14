import { Dispatch, AsyncThunkAction } from "@reduxjs/toolkit";
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

export class TestAsyncThunk<Args, ReturnValue, RejectValue> {
  dispatch: Dispatch;

  getState: () => StateSchema;

  constructor(
    public asyncTunk: AsyncThunkType<Args, ReturnValue, RejectValue>,
  ) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async call(args: Args) {
    const action = this.asyncTunk(args);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
