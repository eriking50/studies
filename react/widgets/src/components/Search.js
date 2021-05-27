import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('rock')
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://pt.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })

            setResults(data.query.search)
        }
        const timeoutID = setTimeout(() => {
            if (term) {
                search()
            }
        }, 500)

        return () => {
            clearTimeout(timeoutID)
        }

    }, [term])

    const renderedResults = results.map((result) => {
        return (
            <div className='item' key={result.pageid}>
                <div className='right floated content'>
                    <a href={`https://pt.wikipedia.org?curid=${result.pageid}`}
                        className='ui button'>Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui form'>
                <div className='field'>
                    <label>Pesquisa aí</label>
                    <input className='input'
                        onChange={e => setTerm(e.target.value)}
                        type='text' value={term} />
                    <div className='ui celled list'>{renderedResults}</div>
                </div>
            </div>
        </div>
    )
}

export default Search