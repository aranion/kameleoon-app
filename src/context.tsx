import { createContext, ReactElement, useState } from "react"

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
}

export function Context(props: Props) {
  const [tests, setTests] = useState([])
  const [filterTests, setFilterTests] = useState([])
  const [sites, setSites] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const resetFilter = () => {
    setFilterTests(tests)
    setSearchWord('')
  }

  const sortTests = (name: string, isRevers: boolean) => {
    if(isRevers) {
      setFilterTests([...filterTests.reverse()])
    }
    else {
      setFilterTests([...filterTests.sort( (a,b) => {
        if( a[name] > b[name]) return 1
        if( a[name] < b[name]) return -1
        return 0
      })])
    }
  }

  const value: Data = {
    tests, 
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
    sortTests
  }

  return (
    <ContextData.Provider value={value}>
      {props.children}
    </ContextData.Provider>
  )
}