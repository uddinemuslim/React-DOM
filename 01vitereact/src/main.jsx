import React, { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyElement() {
//     const ReactElement = {
//         type: 'a',
//         props: {
//             href: 'https://www.google.com',
//             target: '_blank'
//         },
//         Children: 'click me to visit google'
//     }
//     return ReactElement
// }
let Greet = 'Good Afternoon'
const ReactElement2 = React.createElement(
    'a',
    {
        href: 'https://a2ztuition.moslem.in/',
        target: "_blank"
    },
    'Click me to visit Tuition Centre',
    Greet
)



createRoot(document.getElementById('root'))
.render(
    ReactElement2
)
