import React from 'react'

export interface ModalProps {
  className?: string
  modalIsOpen: boolean
  afterOpenModal?: () => any
  closeModal: () => any
  children: React.ReactNode
  style?: any
}
