import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/providers/storeProvidertemp";

export const useAppDispatch = () => useDispatch<AppDispatch>();
