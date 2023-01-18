import styled from 'styled-components'

import { CardProps } from './Card.types'

import { appTheme } from '../../../theme/Theme'

export const CardStyles = styled.div<CardProps>`
  display: flex;
  width: 39.6rem;
  flex-direction: column;
  height: 22.4rem;
  box-shadow: 0px 2px 6px 1px rgba(0, 22, 99, 0.12);
  border-radius: 2rem;
  transition: transform 0.2s;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);

  .card-icon-title {
    background-color: ${appTheme.colors.DEFAULT_CARD_BG};
    padding: 1.8rem;
    min-height: 6.6rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }

  .card-title {
    max-width: 305px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover .overlay {
    opacity: 1;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 2rem;

    svg {
      font-size: 4rem;
      color: ${appTheme.colors.TYPHOGRAPHY_WHITE};
    }
  }

  @media (max-width: 460px) {
    width: 100%;
  }
`

export const CardBody = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  div:nth-child(1) {
    margin-bottom: 2rem;
  }
`

export const OptionWrapper = styled.div`
  display: flex;
`
