import { shallow } from 'enzyme'

import Text from './Text.component'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const size = '12px'
const weight = 'bold'
const onClick = jest.fn()
const callbackValue = jest.fn()
const color = '#ccc'
const cursor = 'pointer'
const textAlign = 'right'
const margin = '10px'
const textDecoration = ''
const textTransform = ''
const lineHeight = '12px'
const lineClamp = ''
const letterSpacing = '2px'
const children = {}

const defaultProps = {
  size,
  weight,
  color,
  textAlign,
  margin,
  textDecoration,
  textTransform,
  lineHeight,
  lineClamp,
  letterSpacing,
  className,
  onClick,
  cursor,
  callbackValue,
  children,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<Text {...setupProps} />)
}

describe('<Text/>', () => {
  const wrapper = setup(defaultProps)
  test('test text component render', () => {
    const element = findByTestAttr(wrapper, 'text-component')
    expect(element.exists()).toBeTruthy()
  })
})
