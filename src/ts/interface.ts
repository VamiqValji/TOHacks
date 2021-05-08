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
    formId: string,
    title: string,
    description: string,
    questions: question[],
    responses: formResponse[]
}

type formId = string;
export interface formPointer {
    pointer: formId[]
}

export interface usersInterface {
    userId: string,
    name: string,
    pfpUrl?: string,
    password: string,
    forms: formPointer[]
}