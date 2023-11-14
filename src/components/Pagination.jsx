import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

export function CircularPagination({
  active,
  onPaginate,
  onNext,
  onPrev,
  totalPages,
}) {
  // getItemProps 함수를 수정하여 외부에서 받은 active 상태를 사용합니다.
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => onPaginate(index),
    className: "rounded-full",
  });

  // 페이지네이션 버튼을 생성하는 로직을 추가합니다.
  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
    <IconButton key={index} {...getItemProps(index + 1)}>
      {index + 1}
    </IconButton>
  ));

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={onPrev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">{paginationButtons}</div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={onNext}
        disabled={active === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
