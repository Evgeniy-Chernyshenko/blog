import {
  FormEvent,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { BrowserView, MobileView } from "react-device-detect";
import { classNamesBind } from "@/shared/lib/classNames/classNames";
import s from "./RatingCard.module.scss";
import { Card } from "@/shared/ui/Card";
import { StarRating } from "@/shared/ui/StarRating";
import { Modal } from "@/shared/ui/Modal";
import { TextBlock } from "@/shared/ui/TextBlock";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";
import { HStack, VStack } from "@/shared/ui/Stack";

const cx = classNamesBind(s);

interface RatingCardProps {
  value?: number;
  title?: string;
  hasFeedback?: boolean;
  feedbackTitle?: string;
  disabled?: boolean;
  onEvaluaiton: (value: number, feedbackValue?: string) => void;
  className?: string;
}

export const RatingCard = memo(function RatingCard({
  value = 0,
  title,
  hasFeedback = true,
  feedbackTitle,
  disabled = false,
  onEvaluaiton,
  className,
}: RatingCardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>();
  const { t } = useTranslation();
  const [evaluationValue, setEvaluationValue] = useState(0);

  const handleChangeRating = useCallback(
    (value: number) => {
      setEvaluationValue(value);

      if (hasFeedback) {
        setIsOpenModal(true);
      } else {
        onEvaluaiton(value);
      }
    },
    [hasFeedback, onEvaluaiton],
  );

  const handleCloseModal = useCallback(() => {
    setIsOpenModal(false);

    onEvaluaiton(evaluationValue);
  }, [evaluationValue, onEvaluaiton]);

  const handleCancel = useCallback(() => {
    setIsOpenModal(false);

    onEvaluaiton(evaluationValue);
  }, [evaluationValue, onEvaluaiton]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsOpenModal(false);

      const feedbackValue = inputRef.current?.value.trim();

      if (feedbackValue) {
        onEvaluaiton(evaluationValue, feedbackValue);
      } else {
        onEvaluaiton(evaluationValue);
      }
    },
    [evaluationValue, onEvaluaiton],
  );

  const onLoadModal = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpenModal) {
      return;
    }

    onLoadModal();
  }, [isOpenModal, onLoadModal]);

  return (
    <Card className={cx("", [className])}>
      <VStack gap={16} align="center">
        {title && <TextBlock title={title} />}

        <StarRating
          value={evaluationValue || value}
          onChange={handleChangeRating}
          disabled={disabled}
        />
      </VStack>

      {hasFeedback && (
        <>
          <BrowserView>
            <Modal isOpen={isOpenModal} onClose={handleCloseModal}>
              <VStack gap={16}>
                {feedbackTitle && <TextBlock text={feedbackTitle} />}

                <form onSubmit={handleSubmit}>
                  <VStack gap={16}>
                    <Input ref={inputRef} placeholder={t("Ваш отзыв")} />

                    <HStack className={cx("modal-buttons")}>
                      <Button
                        type="button"
                        theme="outlined-red"
                        onClick={handleCancel}
                      >
                        {t("Отмена")}
                      </Button>
                      <Button type="submit" theme="background-inverted">
                        {t("Отправить")}
                      </Button>
                    </HStack>
                  </VStack>
                </form>
              </VStack>
            </Modal>
          </BrowserView>

          <MobileView>
            <Drawer
              isOpen={isOpenModal}
              onClose={handleCloseModal}
              onShow={onLoadModal}
            >
              <VStack gap={16}>
                {feedbackTitle && <TextBlock text={feedbackTitle} />}

                <form onSubmit={handleSubmit} className={cx("form")}>
                  <VStack gap={16} fullwidth>
                    <Input
                      ref={inputRef}
                      placeholder={t("Ваш отзыв")}
                      className={cx("input")}
                    />

                    <HStack fullwidth>
                      <Button
                        type="submit"
                        theme="background-inverted"
                        fullwidth
                      >
                        {t("Отправить")}
                      </Button>
                    </HStack>
                  </VStack>
                </form>
              </VStack>
            </Drawer>
          </MobileView>
        </>
      )}
    </Card>
  );
});
