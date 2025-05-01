
const answers = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    id: 2,
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    id: 3,
    question: "What is the currency of Japan?",
    answer: "Japanese yen",
  },
  {
    id: 4,
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest",
  },
  {
    id: 5,
    question: "What is the largest ocean in the world?",
    answer: "Pacific Ocean",
  },
  {
    id: 6,
    question: "What is the currency of the United States?",
    answer: "US dollar",
  },
  {
    id: 7,
    question: "What is the capital of Australia?",
    answer: "Canberra",
  },
  {
    id: 8,
    question: "What is the currency of the United Kingdom?",
    answer: "British pound",
  },
  {
    id: 9,
    question: "What is the largest country in the world?",
    answer: "Russia",
  },
  {
    id: 10,
    question: "What is the currency of China?",
    answer: "Chinese yuan",
  },
]

async function getAnswers() {
  return answers;
}

export default async function Home() {
  return (
    <main className="container mx-auto">
      <h1>AnswerSpace</h1>
    </main>
  );
}
