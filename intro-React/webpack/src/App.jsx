import React from 'react'
import Customers from './customers'

const ButtonA = <button>Customers history</button>
const ButtonB = <button>Sign up customer</button>

const hasCustomer = true;

const App = () => {

    const renderShowHistory = (
        <div>
            <p>Click the button below to show customers history</p>
            {ButtonA}
        </div>
    )

    const renderSignUp = (
        <div>
            <p>Click the button below to sign up a new customer</p>
            {ButtonB}
        </div>
    )

    const handleClick = (e, id) => {
        console.log('Delete customer')
        alert(`Customer's ID: ${id}`)
    }

    const renderCustomers = (customer) => {
        if (hasCustomer) {
            return (
                <div key={`customer-${customer.id}`}>
                    <li>
                        {customer.name} 
                        <button onClick={(e) => handleClick(e, customer.id)}>Delete customer x</button>
                    </li>
                    {customer.skills.map(renderSkills)}
                </div>
            )
        }
    }

    const renderSkills = (skill, index) => {
        return (
            <div style={{paddingLeft: '30px'}} key={`skill-${index}`}>
                <li>
                    {skill}
                </li>
            </div>
        )
    }

    const name = 'Digital Innovation One'

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value)
    }

    const showEvent = (e) => {
        console.log('Event was clicked!!')
        console.log(e)
        alert(name)
    }

    const Button = <button onClick={showEvent}>Show event</button>

    return (
        <div>
            <h1>Digital Innovation One</h1>
            <p>Conditional Rendering</p>
            <br/>
            {hasCustomer ? renderShowHistory : renderSignUp}
            <br/>
            <div>
                {Customers.map(renderCustomers)}
            </div>
            <br/>
            <input onChange={handleChange}/>
            {Button}
        </div>
    );
};

export default App;