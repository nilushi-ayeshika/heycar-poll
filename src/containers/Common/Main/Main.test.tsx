import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Main from './Main'
import store from '../../../store'
import { appTheme } from '../../../theme/Theme'
import { findByTestAttr } from '../../../utils/test.utils'

const setup = () => {
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <Main />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<Main />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup()
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('test render main container without error', () => {
    const component = findByTestAttr(wrapper, 'main-container')
    expect(component.exists()).toBe(true)
  })

  test('test render route component without error', () => {
    const component = findByTestAttr(wrapper, 'route-config-component')
    expect(component.exists()).toBe(true)
  })

  test('test render toast component without error', () => {
    const component = findByTestAttr(wrapper, 'toast-component')
    expect(component.exists()).toBe(true)
  })
})
