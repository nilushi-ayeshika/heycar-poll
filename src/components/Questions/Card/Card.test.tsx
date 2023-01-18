import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Card from './Card.component'
import store from '../../../store'
import { appTheme } from '../../../theme/Theme'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const title = 'title'
const onClick = jest.fn()
const callbackValue: any = {}
const icon = 'icon'
const choices = 5
const publishedAt = '2021/11/22'

const defaultProps = {
  className,
  title,
  onClick,
  callbackValue,
  icon,
  choices,
  publishedAt,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <Card {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<Card />', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = setup(defaultProps)
  })

  test('test card component load', () => {
    const component = findByTestAttr(wrapper, 'card-component')
    expect(component.exists()).toBeTruthy()
  })
  test('test card icon title', () => {
    const component = findByTestAttr(wrapper, 'card-icon-title')
    expect(component.exists()).toBeTruthy()
  })
  test('test card title', () => {
    const component = findByTestAttr(wrapper, 'card-title')
    expect(component.exists()).toBeTruthy()
  })
  test('test card published at', () => {
    const component = findByTestAttr(wrapper, 'card-published-at')
    expect(component.exists()).toBeTruthy()
  })
  test('test card chouces count', () => {
    const component = findByTestAttr(wrapper, 'card-choices-count')
    expect(component.exists()).toBeTruthy()
  })
})
