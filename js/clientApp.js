    import React from 'react'
    import ReactDOM from 'react-dom'

    var myTitle = require('./myTitle')
    var div = React.DOM.div
    var h1 = React.DOM.h1

    var titlefactory = React.createFactory(myTitle)
    var myFirstComponent = (
        div(null,
            React.createElement(myTitle, {title: 'This is great', color: 'aquamarine'}),
            titlefactory({title: 'good stuff', color: 'green'}),
            React.createElement(myTitle, {title: 'Props are awesome', color: 'peru'})
        )
    )
    ReactDOM.render(myFirstComponent, document.getElementById('app'))
