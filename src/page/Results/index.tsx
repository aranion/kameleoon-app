import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Back, Header, Loading } from '../../components'
import { ContextData, Data } from '../../context'

export function Results() {
  const { fetchTest, isLoading } = (useContext(ContextData) as Data)

  const params = useParams()

  useEffect (() => {
    fetchTest(params.testId)
  }, [fetchTest, params.testId])

  return (
    <>
      <Header title="Results"/>
      {isLoading
        ? <Loading />
        : <div>Order basket redesing</div>
      }
      <Back />
    </>
  )
}