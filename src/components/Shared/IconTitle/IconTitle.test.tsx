import { shallow } from 'enzyme'

import IconTitle from './IconTitle.component'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const icon = 'icon'
const backgroundColor = '#ccc'
const margin = '10px'
const padding = '10px'
const isLightIcon = true
const children = {}

const defaultProps = {
  className,
  icon,
  backgroundColor,
  children,
  margin,
  padding,
  isLightIcon,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<IconTitle {...setupProps} />)
}

describe('<IconTitle/>', () => {
  const wrapper = setup(defaultProps)
  test('test icon title component render', () => {
    const element = findByTestAttr(wrapper, 'icon-title-component')
    expect(element.exists()).toBeTruthy()
  })
  test('test icon ', () => {
    const element = findByTestAttr(wrapper, 'icon')
    expect(element.exists()).toBeTruthy()
  })
})
