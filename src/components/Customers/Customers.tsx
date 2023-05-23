import React, { useState } from 'react'
import customers from '../../customers_temp.json'
import { CustomersTable } from './CustomersComponents'

export default function Customers({ }) {
    const [filter, setFilter] = useState('')
    const customersData = customers.customers

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value)
    }
    return (
        <div className='dashboard'>
            <div className='dashboard__header'>
                <div>
                    <h1>All Customers</h1>
                    <div>Active Members</div>
                </div>
                <div className='inputWrapper'><input type="text" placeholder='Search' value={filter} onChange={(e) => { inputHandler(e) }} /></div>
            </div>
            <CustomersTable data={customersData} filter={filter} />
        </div>
    )
}