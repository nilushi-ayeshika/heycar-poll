import { shallow } from 'enzyme'

import Button from './Button.component'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const backgroundColor = '#ccc'
const margin = '10px'
const padding = '10px'
const children = {}
const onClick = jest.fn()
const callbackValue = jest.fn()
const disabled = false
const startIcon = 'startIcon'
const endIcon = 'endIcon'
const width = '30px'
const maxWidth = '50px'
const minWidth = '10px'
const fullWidth = '100%'
const height = '5px'
const textColor = '#ccc'
const size = '12px'
const hoverColor = '#fff'
const type = 'text'

const defaultProps = {
  className,
  children,
  onClick,
  callbackValue,
  disabled,
  startIcon,
  endIcon,
  width,
  maxWidth,
  minWidth,
  fullWidth,
  height,
  padding,
  backgroundColor,
  textColor,
  size,
  hoverColor,
  margin,
  type,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<Button {...setupProps} />)
}

describe('<Button/>', () => {
  const wrapper = setup(defaultProps)
  test('test button component render', () => {
    const element = findByTestAttr(wrapper, 'button-component')
    expect(element.exists()).toBeTruthy()
  })
  test('test start icon ', () => {
    const element = findByTestAttr(wrapper, 'button-start-icon')
    expect(element.exists()).toBeTruthy()
  })
})
