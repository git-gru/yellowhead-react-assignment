import { getToken } from '@store/selectors/auth'
import merge from 'lodash/merge'

const absoluteUrl = new RegExp('^(?:[a-z]+:)?//', 'i')

const defaultOptions = {
  url: 'https://academeez-login-ex.herokuapp.com/api',
  endpoint: '',
  method: 'GET',
  query: {},
  withoutAuthorization: false
}

const API = async (option: yellowhead.APIOption, getState: () => any) => {
  const {
    url,
    endpoint,
    method,
    query,
    withoutAuthorization
  } = merge({}, defaultOptions, option)

  const fullUrl = absoluteUrl.test(endpoint) ? endpoint : `${url}${endpoint}`
  const token = getToken(getState())

  let headers = {
    'Content-Type': 'application/json'
  }

  if (!withoutAuthorization) {
    merge(headers, {
      'Authorization': `Bearer ${token}`
    })
  }

  let params = {
    method,
    headers
  }

  if (method !== 'GET' && method !== 'DELETE') {
    merge(params, {
      body: JSON.stringify(query)
    })
  }

  return await fetch(
    fullUrl,
    params as any
  )
    .then(response => response.json())
    .catch(error => error)
}

export default API;