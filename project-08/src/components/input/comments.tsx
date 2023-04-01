import { useContext, useEffect, useState } from 'react';
import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import { IComment, ICommentsProps } from '@/common/types';
import { NotificationContext } from '@/store/notification-context';

function Comments(props: ICommentsProps) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const notificationCtx = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setComments(data.comments);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [showComments, eventId, refresh]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData: IComment) {
    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Your comment is currently being stored into a database.',
      status: 'pending',
    });

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          notificationCtx.showNotification({
            title: 'Success!',
            message: 'Comment added successfully!',
            status: 'success',
          });
        } else {
          notificationCtx.showNotification({
            title: 'Error!',
            message: 'Error adding comment!',
            status: 'error',
          });
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: 'Error adding comment!',
          status: 'error',
        });
      });

    setRefresh((prevStatus) => !prevStatus);
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList loading={isLoading} comments={comments} />}
    </section>
  );
}

export default Comments;
