import ContentLoader from 'react-content-loader'

import { ListContentLoaderStyles } from './QuestionListContentLoader.theme'

const QuestionListContentLoader = () => (
  <ListContentLoaderStyles>
    <ContentLoader
      speed={2}
      width={400}
      height={20}
      viewBox="0 0 400 20"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="580" cy="223" r="8" />
      <rect x="8" y="-3" rx="5" ry="5" width="315" height="20" />
      <circle cx="589" cy="226" r="8" />
      <rect x="456" y="224" rx="5" ry="5" width="220" height="10" />
      <circle cx="587" cy="221" r="8" />
      <rect x="506" y="219" rx="5" ry="5" width="220" height="10" />
      <circle cx="582" cy="225" r="8" />
      <rect x="465" y="217" rx="5" ry="5" width="220" height="10" />
    </ContentLoader>
  </ListContentLoaderStyles>
)

export default QuestionListContentLoader
