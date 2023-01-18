import React from 'react'

export interface CardProps {
  className?: string
  title: string
  publishedAt: string
  choices: number
  callbackValue?: any
  onClick?: (callbackValue: any, event: any) => any
  icon?: React.ReactNode
}

export interface IQuestion {
  question: string
  published_at: string
  url: string
  choices: IChoices[]
}

export interface IChoices {
  choice: string
  url: string
  votes: number
}
