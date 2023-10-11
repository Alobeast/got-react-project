import React, { useState, useEffect } from 'react'

export default function useFetchData(selection) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiUrl = 'https://www.anapioficeandfire.com/api'

  useEffect(() => {
    if (!selection) {
      return;
    }

    setLoading(true);

    async function fetchData(url) {
      try {
        const res = await fetch(url);
        const jsonData = await res.json();

        if (res.headers.has('Link')) {
          const nextPageUrl = res.headers.get('Link').match(/<(.*?)>; rel="next"/);
          const nextPageExists = nextPageUrl && nextPageUrl.length > 1;

          if (nextPageExists) {
            const nextPageData = await fetchData(nextPageUrl[1]);
            jsonData.push(...nextPageData);
          }
        }

        return jsonData;
      } catch (err) {
        setError(err.message);
      }
    }

    const fetchAllData = async () => {
      const initialUrl = `${apiUrl}/${selection}?page=1&pageSize=50`;
      const allData = await fetchData(initialUrl);
      setData(allData);
      setLoading(false);
    };

    fetchAllData();
  }, [selection]);

  console.log("AGGREGATED DATA: ", data);
  return { data, error, loading };
}
