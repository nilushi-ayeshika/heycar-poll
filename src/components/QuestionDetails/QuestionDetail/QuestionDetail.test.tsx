import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import QuestionDetail from './QuestionDetail.component'
import store from '../../../store'
import { appTheme } from '../../../theme/Theme'
import { findByTestAttr } from '../../../utils/test.utils'

const questionData = {
  question: 'Favourite programming language?',
  published_at: '2014-11-11T08:40:51.620Z',
  url: '/questions/1',
  choices: [
    {
      colour: 'Swift',
      url: '/questions/1/choices/1',
      votes: 2048,
    },
  ],
}

const id = '23'
const loading = false
const data = questionData

const defaultProps = {
  id,
  loading,
  data,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <QuestionDetail {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<QuestionDetail />', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = setup(defaultProps)
  })

  test('test question detail wrapper', () => {
    const component = findByTestAttr(wrapper, 'question-detail-wrapper')
    expect(component.exists()).toBeTruthy()
  })
  test('test question icon', () => {
    const component = findByTestAttr(wrapper, 'question-icon')
    expect(component.exists()).toBeTruthy()
  })
  test('test question title', () => {
    const component = findByTestAttr(wrapper, 'question-title')
    expect(component.exists()).toBeTruthy()
  })
  test('test question choices component', () => {
    const component = findByTestAttr(wrapper, 'question-choices-component')
    expect(component.exists()).toBeTruthy()
  })
  test('test question choices vote button', () => {
    const component = findByTestAttr(wrapper, 'question-vote-button')
    expect(component.exists()).toBeTruthy()
  })
})
