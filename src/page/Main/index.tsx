import { useContext, useEffect } from "react";
import { Header, Loading, ResultList, Search } from "../../components";
import { ContextData, Data } from "../../context";

export function Main() {
  const { 
    filterTests,
    isLoading,
    sites,
    fetchTests
  } = (useContext(ContextData) as Data)

  useEffect(() => {
    fetchTests()
  }, [fetchTests])
  
  return (
    <>
      <Header title="Dashboard"/>
      <Search />
      {isLoading ? <Loading /> : <ResultList filterTests={filterTests} sites={sites}/> }
    </>
  )
}