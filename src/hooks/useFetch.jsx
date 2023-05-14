import React, { useEffect, useState } from 'react'

 export function useFetch(url) {
 const [data , setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
        const request = await fetch(url)
        const data = await request.json()
        setData(data)
    }

    fetchData()
  },[url])

 return {data}

}

 
