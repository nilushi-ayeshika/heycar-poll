import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import QuestionChoicesList from './QuestionChoicesList.component'
import store from '../../../store'
import { appTheme } from '../../../theme/Theme'
import { findByTestAttr } from '../../../utils/test.utils'

const choicesList = [
  {
    choice: 'Swift',
    url: '/questions/1/choices/1',
    votes: 2048,
  },
  {
    choice: 'Saloon',
    url: '/questions/1/choices/3',
    votes: 234,
  },
]

const id = '23'
const className = 'className'
const placeholderCount = 3
const dataLoading = false
const data: any = []
const onHandleVoteClick = jest.fn()
const checkedChoiceId = false

const defaultProps = {
  id,
  className,
  placeholderCount,
  data,
  dataLoading,
  onHandleVoteClick,
  checkedChoiceId,
}

const defaultPropsForAvailableData = {
  ...defaultProps,
  data: choicesList,
}
const setup = (props: any) => {
  const setupProps = { ...props }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <QuestionChoicesList {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<QuestionChoicesList />', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = setup(defaultProps)
  })

  test('test question choices list wrapper', () => {
    const component = findByTestAttr(wrapper, 'question-choices-list-wrapper')
    expect(component.exists()).toBeTruthy()
  })

  describe('for empty data', () => {
    beforeEach(() => {
      wrapper = setup(defaultProps)
    })
    afterAll(() => {
      wrapper.unmount()
    })
    test('default data empty message should be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'question-choices-no-data-message')
      expect(emptyMessageElement.length).toBe(1)
    })
    test('question choices item card should not be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'question-choices-item')
      expect(rowRecords.length).toBe(0)
    })
  })

  describe('for available data', () => {
    beforeEach(() => {
      wrapper = setup(defaultPropsForAvailableData)
    })
    afterAll(() => {
      wrapper.unmount()
    })
    test('default data empty message should not be shown', () => {
      const emptyMessageElement = findByTestAttr(wrapper, 'question-choices-no-data-message')
      expect(emptyMessageElement.length).toBe(0)
    })
    test('question choices item card should  be shown', () => {
      const itemList = findByTestAttr(wrapper, 'question-choices-item')
      expect(itemList.length).toBeGreaterThan(0)
    })
  })
})
