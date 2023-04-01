import { ICommentsListProps } from '@/common/types';
import classes from './comment-list.module.css';

function CommentList(props: ICommentsListProps) {
  const { comments, loading } = props;

  console.log('CommentList', comments);
  console.log('CommentList', loading);

  if (loading) {
    return <p className='center'>Loading...</p>;
  }

  if (props.comments.length === 0) {
    return <p className='center'>No comments yet!</p>;
  }

  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <li key={comment._id}>
          <p>{comment.text}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
