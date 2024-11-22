export namespace Test {
  export interface Model {
    questions: Test.Question[]
    id: number
  }

  export interface Question {
    id: string
    question: string
    test_id: string
    answer: Test.Answer[]
    count_question: number
    slug_img: string
  }

  export interface Answer {
    id: string
    answer: string
    points: string
    question_id: string
  }
}
