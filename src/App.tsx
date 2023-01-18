import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'

import Main from './containers/Common/Main/Main'

import { appTheme } from './theme/Theme'
import GlobalStyles from './theme/GlobalStyles'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <Router>
        <Main />
      </Router>
    </ThemeProvider>
  )
}

export default App
