declare namespace yellowhead {
  type Todo = {
    id: number,
    title: string,
    description: string,
    createdAt: string,
    updatedAt: string
  }

  type Credential = {
    email: string;
    password: string;
  }

  type APIOption = {
    url?: string,
    endpoint: string,
    method: 'GET' | 'UPDATE' | 'PUT' | 'POST' | 'DELETE',
    query: any,
    withoutAuthorization?: boolean
  }
}