export interface response {
    question: string,
    response: string,
}

export interface formResponse {
    userWhoResponded: string,
    date: string,
    questionsAndResponses: response[],
}

export interface question {
    id: string,
    question: string,
    description?: string,
    inputField: string,
}

export interface form {
    title: string,
    description: string,
    questions: question[],
    responses: formResponse[]
}

export interface usersInterface {
    userId: string,
    name: string,
    pfpUrl?: string,
    password: string,
    forms: form[]
}