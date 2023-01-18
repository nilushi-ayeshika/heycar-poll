import { shallow } from 'enzyme'

import RadioButton from './RadioButton.component'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const checked = false
const onClick = jest.fn()
const callbackValue = jest.fn()
const disabled = false
const name = 'name'

const defaultProps = {
  className,
  onClick,
  callbackValue,
  checked,
  disabled,
  name,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return shallow(<RadioButton {...setupProps} />)
}

describe('<RadioButton/>', () => {
  const wrapper = setup(defaultProps)
  test('test radion button component render', () => {
    const element = findByTestAttr(wrapper, 'radio-button')
    expect(element.exists()).toBeTruthy()
  })
})
