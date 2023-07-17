export interface listeningTestCU {
  conversationNo: number;
  testContent: listeningTestCUContent[];
}

export interface listeningTestCUContent {
  question: string;
  answer: string;
  isCorrect: boolean;
}
