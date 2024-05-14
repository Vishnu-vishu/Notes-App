// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  Form,
  TextContainer,
  NoteContainer,
  CustomButton,
  CommentList,
  Container,
  Head,
  Paragraph,
} from './styledComponents'

const Notes = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => setName(event.target.value)

  const onChangeCommentText = event => setCommentText(event.target.value)

  const NoresultFound = () => (
    <Container>
      <img
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <Head>No Notes Yet</Head>
      <Paragraph>Notes you add will appear here</Paragraph>
    </Container>
  )

  const onAddComment = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentsList(prevCommentsList => [...prevCommentsList, newComment])
    setName('')
    setCommentText('')
  }

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onAddComment}>
        <TextContainer
          type="text"
          placeholder="Title"
          value={name}
          onChange={onChangeName}
        />
        <NoteContainer
          placeholder="Take a Note..."
          value={commentText}
          onChange={onChangeCommentText}
          rows="6"
        />
        <CustomButton type="submit">Add</CustomButton>
      </Form>
      {commentsList === [] ? (
        NoresultFound
      ) : (
        <CommentList>
          {commentsList.map(eachComment => (
            <NoteItem key={eachComment.id} commentDetails={eachComment} />
          ))}
        </CommentList>
      )}
    </MainContainer>
  )
}
export default Notes
