import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed from "react-daum-postcode";
import type { Address } from "react-daum-postcode";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (address: Address) => {
    console.log(address);
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>
      {/* 모달종료방식 - 1. 모달숨기는 방법 (ex,이력서 등)  */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달종료방식 - 2. 삭제하는 방법  (ex, 신용카드, 비밀번호) */}
      {isOpen && (
        <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
