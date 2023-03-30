import { Fragment, useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback/index';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IFeedback, IFeedbackPageProps } from '@/common/types';

function FeedbackPage(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const [feedbackData, setFeedbackData] = useState<IFeedback>();

  function loadFeedbackHandler(id: string) {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      }); // /api/some-feedback-id
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}{' '}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<IFeedbackPageProps> = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: {
      feedbackItems: data,
    },
  };
};

export default FeedbackPage;
