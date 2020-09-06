export interface Feedback {
  title: string;
  name: string | null;
  email: string | null;
  comments: string | null;
  num_stars: number;
  recipient: number;
  created_at: string;
}

export type CreateFeedbackDetails = Omit<Feedback, "created_at">;
