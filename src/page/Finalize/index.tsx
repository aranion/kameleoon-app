import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Back, Header, Loading } from "../../components";
import { ContextData, Data } from "../../context";

export function Finalize() {

  const { fetchTest, isLoading } = (useContext(ContextData) as Data)

  const params = useParams()

  useEffect (() => {
    fetchTest(params.testId)
  }, [fetchTest, params.testId])

  return (
    <>
      <Header title="Finalize"/>
      {isLoading
        ? <Loading />
        : <div>Spring promotion</div>
      }
      <Back />
    </>
  )
}