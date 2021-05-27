import React, {useRef, useState} from 'react'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Route from './Route'
import Translate from './Translate'
import Header from './Header'

const items = [
    {
        title: 'OI?',
        content: 'Não tem oi pra você bb :)'
    },
    {
        title: 'Que jogo você gosta?',
        content: 'Path of Exile é o que jogo atualmente'
    },
    {
        title: 'Você ta ferrado?',
        content: 'Com toda certeza'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'The Color Of Blue',
        value: 'blue'
    }
]

const App = () => {
    const [showDropdown, setShowDropdown] = useState(true)
    const [selected, setSelected] = useState(options[0])

    return (
        <div className='ui container'>
            <Header></Header>
            <Route path='/'>
                <Accordion items={items} />
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown label='Select a Color'
                options={options}
                selected = {selected}
                onSelectedChange = {setSelected}  />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}

export default App