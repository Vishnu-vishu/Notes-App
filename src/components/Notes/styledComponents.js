// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-family: Bree Serif;
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 5px 10px 10px #d8d8d8;
  height: 40vh;
  width: 40vw;
`

export const TextContainer = styled.input`
  border-width: 0;
  margin-left: 10px;
  margin-bottom: 20px;
`

export const NoteContainer = styled.input`
  border-width: 0;
  margin-left: 10px;
`

export const CustomButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  font-family: Roboto;
  align-self: end;
  margin-top: 30px;
  margin-right: 20px;
  border: 5px solid #4c63b6;
  border-radius: 5px;
`
export const CommentList = styled.ul`
  padding-left: 0;
  list-style-type: none;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Head = styled.h1`
  color: #1e293b;
  font-family: Roboto;
`

export const Paragraph = styled.p`
  color: #aab8c8;
  font-family: Roboto;
`
