export interface Exercise {
  title: string;
  description: string[];
  objective: string;
  isCorrect(): boolean;
}
