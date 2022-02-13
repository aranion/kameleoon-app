import { useContext, useEffect } from "react";
import { Header, ResultList, Search } from "../../components";
import { SERVER_URL } from "../../configUrlSer";
import { ContextData, Data, Test } from "../../context";

export function Main() {
  const { 
    filterTests,
    isLoading,
    searchWord,
    sites,
    setIsLoading, 
    setTests,
    setSites,
    setFilterTests
  } = (useContext(ContextData) as Data)

  useEffect( () => {
    fetch(`${SERVER_URL}/tests`)
      .then(res => res.json())
      .then(res => {
        setTests(res)
        setFilterTests(res.filter((item: Test) => {
            const regExp = new RegExp(`${searchWord}`, 'ig')
            return regExp.test(item.name)
        }))
      })
      .then(() => 
        fetch(`${SERVER_URL}/sites`)
        .then(res => res.json())
        .then(res => setSites(res))
      )
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [setTests, setIsLoading, setSites, setFilterTests, searchWord])
  
  return (
    <>
      <Header title="Dashboard"/>
      <Search />
      {isLoading ? <div>Loading...</div> : <ResultList filterTests={filterTests} sites={sites}/> }
    </>
  )
}