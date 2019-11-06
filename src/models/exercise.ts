export interface Exercise {
  title: string;
  description: string[];
  objective: string;
  isComplete(): boolean;
}
