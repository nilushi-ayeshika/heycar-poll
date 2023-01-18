import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import AddNewQuestion from './AddNewQuestion.component'
import store from '../../../store'
import { appTheme } from '../../../theme/Theme'
import { findByTestAttr } from '../../../utils/test.utils'

const className = 'className'
const onSubmitSuccess = false

const defaultProps = {
  className,
  onSubmitSuccess,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <AddNewQuestion {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<AddNewQuestion />', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = setup(defaultProps)
  })

  test('test add new question wrapper', () => {
    const component = findByTestAttr(wrapper, 'add-new-question-wrapper')
    expect(component.exists()).toBeTruthy()
  })
  test('test add new question form', () => {
    const component = findByTestAttr(wrapper, 'add-new-question-form')
    expect(component.exists()).toBeTruthy()
  })
  test('test question field ', () => {
    const component = findByTestAttr(wrapper, 'question-field')
    expect(component.exists()).toBeTruthy()
  })
  test('test question field error', () => {
    const component = findByTestAttr(wrapper, 'question-field-error')
    expect(component.exists()).toBeTruthy()
  })
  test('test question choices fields', () => {
    const component = findByTestAttr(wrapper, 'question-choices-fields')
    expect(component.exists()).toBeTruthy()
  })
  test('test question choices field item(s)', () => {
    const component = findByTestAttr(wrapper, 'question-choices-field-item')
    expect(component.length).toBeGreaterThan(0)
  })
  test('test question choices field error ', () => {
    const component = findByTestAttr(wrapper, 'question-choices-field-error')
    expect(component.exists()).toBeTruthy()
  })
  test('test question choices add more button ', () => {
    const component = findByTestAttr(wrapper, 'question-choices-field-add-more')
    expect(component.exists()).toBeTruthy()
  })
  test('test question add submit button', () => {
    const component = findByTestAttr(wrapper, 'add-new-question-submit-button')
    expect(component.exists()).toBeTruthy()
  })
})
