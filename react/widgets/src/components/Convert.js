import React, {useState, useEffect} from 'react'
import axios from 'axios'

const API = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('')

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: API
                }
            })

            setTranslated(data.data.translation[0].translatedText)
        }
        
    }, [language, text])

    return (
        <div>
            <h1>{translated ? translated : 'Nada Traduzido'}</h1>
        </div>
    )
}

export default Convert