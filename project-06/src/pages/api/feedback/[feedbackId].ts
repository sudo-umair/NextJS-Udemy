import { buildFeedbackPath, extractFeedback } from '.';
import { NextApiRequest, NextApiResponse } from 'next';
import { IFeedback } from '@/common/types';

function handler(req: NextApiRequest, res: NextApiResponse) {
  const feedbackId = req.query.feedbackId;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback: IFeedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
