import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import QuestionChoiceCard from './QuestionChoiceCard.component'
import store from '../../../store'
import { appTheme } from '../../../theme/Theme'
import { findByTestAttr } from '../../../utils/test.utils'

const id = '23'
const className = 'className'
const choice = 'name'
const votes = 5
const onVoteClick = jest.fn()
const questionId = '34'
const url = 'url'
const disabled = false
const checkedId = 4
const percentage = 23.2

const defaultProps = {
  id,
  className,
  choice,
  votes,
  onVoteClick,
  questionId,
  url,
  disabled,
  checkedId,
  percentage,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <QuestionChoiceCard {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<QuestionChoiceCard />', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = setup(defaultProps)
  })

  test('test question choice card wrapper', () => {
    const component = findByTestAttr(wrapper, 'question-choice-card-wrapper')
    expect(component.exists()).toBeTruthy()
  })
  test('test choice name', () => {
    const component = findByTestAttr(wrapper, 'choice-name')
    expect(component.exists()).toBeTruthy()
  })
  test('test choice vote', () => {
    const component = findByTestAttr(wrapper, 'choice-vote')
    expect(component.exists()).toBeTruthy()
  })
  test('test choice percentage', () => {
    const component = findByTestAttr(wrapper, 'choice-percentage')
    expect(component.exists()).toBeTruthy()
  })
  test('test vote choice area', () => {
    const component = findByTestAttr(wrapper, 'vote-choice')
    expect(component.exists()).toBeTruthy()
  })
  test('test vote choice radio', () => {
    const component = findByTestAttr(wrapper, 'vote-choice-radio')
    expect(component.exists()).toBeTruthy()
  })
})
