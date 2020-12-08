import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, FormikHelpers } from 'formik';

import { loginWithEmail } from '../store/actions/auth'
import { getToken } from '../store/selectors/auth'

const validateEmail = (values: yellowhead.Credential) => {
  if (!values.email) {
    return {
      email: 'Required'
    };
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    return {
      email: 'Invalid email address'
    }
  }
  return {}
}

const LogIn = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const token = useSelector(getToken)

  const initialValues: yellowhead.Credential = { email: '', password: '' };

  const onSubmit = async (credential: yellowhead.Credential, { setSubmitting }: FormikHelpers<yellowhead.Credential>) => {
    dispatch(loginWithEmail(credential)).then(() => setSubmitting(false))
  }

  // For auto login
  // useEffect(() => {
  //   dispatch(loginWithEmail({ email: "yariv@nerdeez.com", password: '12345678' }))
  // }, [dispatch])

  useEffect(() => {
    if (token) {
      router.push('/todo')
    }
  }, [router, token])

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateEmail}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
      </Formik>
    </div>
  )
}

export default LogIn;