import { Flex, FlexProps } from "../Flex/Flex";

export const HStack = (props: Omit<FlexProps, "direction">) => {
  return <Flex {...props} direction="row" />;
};
