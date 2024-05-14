import {
  ListItem,
  NameAndCommentContainer,
  NameText,
  CommentText,
  HorizontalLine,
} from './styledComponents'

const NoteItem = props => {
  const {commentDetails} = props
  const {name, commentText} = commentDetails

  return (
    <>
      <ListItem>
        <NameAndCommentContainer>
          <NameText>{name}</NameText>
          <CommentText>{commentText}</CommentText>
        </NameAndCommentContainer>
      </ListItem>
      <HorizontalLine />
    </>
  )
}

export default NoteItem
