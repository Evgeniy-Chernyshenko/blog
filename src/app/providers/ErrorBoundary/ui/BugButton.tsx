import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button/Button";

export const BugButton = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!hasError) {
      return;
    }

    throw new Error("Test");
  }, [hasError]);

  const handleThrowErrorClick = () => {
    setHasError(true);
  };

  return <Button onClick={handleThrowErrorClick}>!</Button>;
};
