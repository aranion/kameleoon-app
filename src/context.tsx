import { createContext, ReactElement, useCallback, useState } from "react"
import { Status } from "./components/ResultList/Item"
import { SERVER_URL } from "./configUrlSer"

export const ContextData = createContext({})

interface Props {
  children: ReactElement
}

export interface Test {
  id: number;
  name: string;
  type: string;
  status: string;
  siteId: number;
}

export interface Site {
  id: number;
  url: string;
}

export interface Data {
  tests: Test[];
  test: Test;
  setTests: Function;
  isLoading: boolean;
  setIsLoading: Function;
  sites: Site[];
  setSites: Function;
  searchWord: string;
  setSearchWord: Function;
  filterTests: Test[]; 
  setFilterTests: Function;
  resetFilter: Function;
  sortTests: Function;
  fetchTests: Function;
  fetchTest: Function;
}

export function Context(props: Props) {
  const [tests, setTests] = useState([])
  const [test, setTest] = useState({} as Test)
  const [filterTests, setFilterTests] = useState([])
  const [sites, setSites] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const resetFilter = () => {
    setFilterTests(tests)
    setSearchWord('')
  }

  const sortTests = (name: string, isRevers: boolean) => {

    const sortFn = (a: string | number, b: string | number): number => {
      if( a > b ) return 1
      else if( a < b ) return -1
      else return 0
    }

    const replace  = (value: string): number => {
      return {
        [Status.ONLINE]: 1,
        [Status.PAUSED]: 2,
        [Status.STOPPED]: 3,
        [Status.DRAFT]: 4
      }[value.toLocaleUpperCase()] || 0
    } 

    if(name === 'status' && !isRevers) {
      setFilterTests([...filterTests.sort((a,b) => sortFn(replace(a[name]), replace(b[name])))])
    } else if(isRevers) {
      setFilterTests([...filterTests.reverse()])
    } else {
      setFilterTests([...filterTests.sort((a,b) => sortFn(a[name], b[name]))])
    }
  }

  const fetchTests = useCallback(() => {
    fetch(`${SERVER_URL}/tests`)
    .then(res => res.json())
    .then(res => {
      setTests(res)
      setFilterTests(
        res.filter((item: Test) => (new RegExp(`${searchWord}`, 'ig')).test(item.name))
      )
    })
    .then(() =>
      fetch(`${SERVER_URL}/sites`)
        .then(res => res.json())
        .then(res => setSites(res))
    )
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }, [setTests, setIsLoading, setSites, setFilterTests, searchWord])

  const fetchTest = useCallback((id: string) => {
    fetch(`${SERVER_URL}/tests/${id}`)
    .then(res => res.json())
    .then(res => setTest(res))
    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))
  }, [setTest, setIsLoading])

  const value: Data = {
    tests, 
    test,
    isLoading,
    sites, 
    searchWord, 
    filterTests, 
    setFilterTests,
    setSearchWord,
    setSites,
    setTests, 
    setIsLoading,
    resetFilter,
    sortTests,
    fetchTests,
    fetchTest
  }

  return (
    <ContextData.Provider value={value}>
      {props.children}
    </ContextData.Provider>
  )
}