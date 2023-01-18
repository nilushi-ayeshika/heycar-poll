export interface IDetails {
  id: number
  data: IDetailsChoiceData
  loading: boolean
}

export interface IDetailsChoiceData {
  question: string
  published_at: string
  url: string
  choices: IDetailListChoices[]
}

export interface IDetailListChoices {
  choice: string
  url: string
  votes: number
}
