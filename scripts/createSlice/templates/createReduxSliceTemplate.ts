export const createReduxSliceTemplate = (
  slice: string,
  sliceLower: string,
) => `import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ${slice}Schema } from "../types/${sliceLower}Schema";

const initialState: ${slice}Schema = {};

const ${sliceLower}Slice = createSlice({
  name: "${sliceLower}",
  initialState,
  reducers: {
    reducerName(state, action: PayloadAction<string>) {
    },
  },
});

export const {
  actions: ${sliceLower}Actions,
  reducer: ${sliceLower}Reducer,
} = ${sliceLower}Slice;`;
