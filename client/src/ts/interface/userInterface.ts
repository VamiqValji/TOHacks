export interface response {
    question: string,
    response: string,
}

export interface formResponse {
    name: string,
    email: string,
    date: string,
    questionsAndResponses: response[],
}

export interface question {
    id: string,
    question: string,
    description?: string,
}

export interface form {
    ownerUserId: string,
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
    password: string,
    email:string,
    pfpUrl?: string,
    forms: formPointer[]
}