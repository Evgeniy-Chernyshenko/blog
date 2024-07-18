import { Flex, FlexProps } from "../Flex/Flex";

export const VStack = (props: Omit<FlexProps, "direction">) => {
  return <Flex {...props} direction="column" />;
};
