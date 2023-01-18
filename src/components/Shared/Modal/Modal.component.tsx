import React from 'react'
import Modal from 'react-modal'

import { ModalProps } from './Modal.types'
import { ModalWrapper } from './Modal.theme'

const AddNewQuestion: React.FC<ModalProps> = (props) => {
  const { className, modalIsOpen, afterOpenModal, closeModal, style, children } = props
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className={className}
      style={style}
      ariaHideApp={false}
      data-test="modal-component"
    >
      <ModalWrapper>{children}</ModalWrapper>
    </Modal>
  )
}

export default AddNewQuestion
