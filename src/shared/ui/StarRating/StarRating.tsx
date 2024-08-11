import { memo, useState } from "react";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./StarRating.module.scss";
import StarIcon from "../../assets/icons/star.svg";

const cx = classNamesBind(s);

interface StarRatingProps {
  value?: number;
  maxValue?: number;
  size?: number;
  disabled?: boolean;
  className?: string;
  onChange: (value: number) => void;
}

export const StarRating = memo(function StarRating({
  value = 0,
  maxValue = 5,
  size = 30,
  disabled,
  className,
  onChange,
}: StarRatingProps) {
  const [selectedRating, setSelectedRating] = useState(value);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleMouseEnter = (index: number) => () => {
    if (disabled) {
      return;
    }

    setHoveredRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = (index: number) => () => {
    if (disabled) {
      return;
    }

    const selectedRating = index + 1;

    if (value === selectedRating) {
      return;
    }

    setSelectedRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <span className={cx("", [className])}>
      {[...Array(maxValue)].map((_, index) => (
        <StarIcon
          key={index}
          className={cx("star-icon", {
            filled: hoveredRating
              ? index < hoveredRating
              : index < selectedRating,
            disabled,
          })}
          onMouseEnter={handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick(index)}
          width={size}
          height={size}
        />
      ))}
    </span>
  );
});
