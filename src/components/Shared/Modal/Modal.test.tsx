import { mount } from 'enzyme'

import Modal from './Modal.component'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const modalIsOpen = false
const afterOpenModal = jest.fn()
const closeModal = jest.fn()
const style = {}
const children = {}

const defaultProps = {
  className,
  modalIsOpen,
  afterOpenModal,
  closeModal,
  style,
  children,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return mount(<Modal {...setupProps} />)
}

describe('<Modal/>', () => {
  test('test modal component render', () => {
    const wrapper = setup(defaultProps)
    const element = findByTestAttr(wrapper, 'modal-component')
    expect(element.exists()).toBeTruthy()
  })
})
