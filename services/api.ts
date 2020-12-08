import merge from 'lodash/merge'

interface Option {
  url?: string,
  endpoint: string,
  method: 'GET' | 'UPDATE' | 'PUT' | 'POST' | 'DELETE',
  query: any,
  withoutAuthorization?: boolean
}

const absoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i')

const defaultOptions = {
  url: 'https://academeez-login-ex.herokuapp.com/api',
  endpoint: '',
  method: 'GET',
  query: {},
  withoutAuthorization: false
}

export default async (option: Option, getState: () => any) => {
  const {
    url,
    endpoint,
    method,
    query,
    withoutAuthorization
  } = merge({}, defaultOptions, option)

  const fullUrl = absoluteUrl.test(endpoint) ? endpoint : `${url}${endpoint}`

  return await fetch(
    fullUrl,
    {
      method,
      body: JSON.stringify(query),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(response => response.json())
}