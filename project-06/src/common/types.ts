export interface IFeedback {
  id: string;
  email: string;
  text: string;
}

export interface IFeedbackPageProps {
  feedbackItems: IFeedback[];
}
