import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import QuestionsScreen from './QuestionsScreen'
import store from '../../store'
import { appTheme } from '../../theme/Theme'
import { findByTestAttr } from '../../utils/test.utils'

const setup = () => {
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <QuestionsScreen />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<QuestionsScreen />', () => {
  let wrapper: any

  beforeAll(() => {
    wrapper = setup()
  })

  afterAll(() => {
    wrapper.unmount()
  })

  test('test render questions screen wrapper without error', () => {
    const component = findByTestAttr(wrapper, 'questions-screen-wrapper')
    expect(component.exists()).toBe(true)
  })

  test('test questions title', () => {
    const component = findByTestAttr(wrapper, 'questions-title')
    expect(component.exists()).toBe(true)
  })

  test('test add new question button', () => {
    const component = findByTestAttr(wrapper, 'add-new-button')
    expect(component.exists()).toBe(true)
  })

  test('test question list component', () => {
    const component = findByTestAttr(wrapper, 'questions-component')
    expect(component.exists()).toBe(true)
  })

  test('test add new question modal on initail state', () => {
    const component = findByTestAttr(wrapper, 'add-new-question-modal')
    expect(component.exists()).toBe(false)
  })
})
