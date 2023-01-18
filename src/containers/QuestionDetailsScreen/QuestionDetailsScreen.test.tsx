import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import QuestionDetailsScreen from './QuestionDetailsScreen'
import store from '../../store'
import { appTheme } from '../../theme/Theme'
import { findByTestAttr } from '../../utils/test.utils'

const setup = () => {
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <QuestionDetailsScreen />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<QuestionDetailsScreen />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup()
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('test render question inner screen wrapper without error', () => {
    const component = findByTestAttr(wrapper, 'question-inner-wrapper')
    expect(component.exists()).toBe(true)
  })

  test('test question title', () => {
    const component = findByTestAttr(wrapper, 'question-title')
    expect(component.exists()).toBe(true)
  })

  test('test question back button', () => {
    const component = findByTestAttr(wrapper, 'question-back-button')
    expect(component.exists()).toBe(true)
  })

  test('test question detail component', () => {
    const component = findByTestAttr(wrapper, 'question-detail-component')
    expect(component.exists()).toBe(true)
  })
})
