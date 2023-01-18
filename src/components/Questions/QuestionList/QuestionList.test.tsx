import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import QuestionList from './QuestionList'
import store from '../../../store'
import { appTheme } from '../../../theme/Theme'
import { findByTestAttr } from '../../../utils/test.utils'

const questionList = [
  {
    question: 'Favourite programming language?',
    published_at: '2014-11-11T08:40:51.620Z',
    url: '/questions/1',
    choices: [
      {
        choice: 'Swift',
        url: '/questions/1/choices/1',
        votes: 2048,
      },
      {
        choice: 'Python',
        url: '/questions/1/choices/2',
        votes: 1024,
      },
    ],
  },
]

const className = 'className'
const placeholderCount = 3
const dataLoading = false
const data: any = []
const hasMoreData: any = jest.fn()
const onNextPageRequested = jest.fn()

const defaultProps = {
  className,
  placeholderCount,
  dataLoading,
  data,
  hasMoreData,
  onNextPageRequested,
}

const defaultPropsForAvailableData = {
  ...defaultProps,
  data: questionList,
}

const setup = (props: any) => {
  const setupProps = { ...props }
  return mount(
    <Provider store={store}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <QuestionList {...setupProps} />
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

describe('<QuestionList />', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = setup(defaultProps)
  })

  test('test question list initial load', () => {
    const component = findByTestAttr(wrapper, 'question-list-wrapper')
    expect(component.exists()).toBeTruthy()
  })
  test('test question list infinite component', () => {
    const component = findByTestAttr(wrapper, 'question-list-infinite')
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
      const emptyMessageElement = findByTestAttr(wrapper, 'question-list-no-data-message')
      expect(emptyMessageElement.length).toBe(1)
    })
    test('question item card should not be shown', () => {
      const rowRecords = findByTestAttr(wrapper, 'question-list-item')
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
      const emptyMessageElement = findByTestAttr(wrapper, 'question-list-no-data-message')
      expect(emptyMessageElement.length).toBe(0)
    })
    test('question item card should  be shown', () => {
      const itemList = findByTestAttr(wrapper, 'question-list-item')
      expect(itemList.length).toBeGreaterThan(0)
    })
  })
})
