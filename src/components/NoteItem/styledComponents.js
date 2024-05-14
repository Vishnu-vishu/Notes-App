import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
  margin-top: 20px;
  list-style-type: none;
`

export const NameAndCommentContainer = styled.div`
  margin-left: 12px;
  border: 1px solid #d8d8d8;
`

export const NameText = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 0px;
`

export const CommentText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 12px;
`

export const HorizontalLine = styled.hr`
  border: 1px solid #cbd5e140;
`
