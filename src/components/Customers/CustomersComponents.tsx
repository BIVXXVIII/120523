// @ts-nocheck
import { useEffect, useState } from 'react'
import { CustomerProps, TableProps } from '../../types/types'
import { Pagination } from 'react-pagination-bar'
import 'react-pagination-bar/dist/index.css'


const PaginationCustomers = () => {
    const generetePages = () => {
        const tempgen = []
        for (let i = 0; i < 40; i++) {
            tempgen.push({ id: i + 1 })
        }
        return tempgen
    }
    const pages = generetePages()
    const [currentPage, setCurrentPage] = useState<number>(1)
    const pagePostsLimit = 3;


    return (
        <div className='table__paganation'>
            <span className='table__paganation__info'>Showing data 1 to 8 of 256K entries</span>
            <Pagination
                initialPage={currentPage}
                itemPerPage={pagePostsLimit}
                onChangePage={(pageNumber) => setCurrentPage(pageNumber)}
                totalItems={pages.length}
                pageNeighbours={2}
            />
        </div>
    )
}

export const CustomersTable = ({ data, filter }: TableProps) => {
    const [customersData, setCustomersData] = useState<never[] | CustomerProps[]>([])

    const filterCallback = (customer: CustomerProps) => {
        if (customer.name.toLowerCase().includes(filter.toLowerCase())) {
            return true
        }
        if (customer.company.toLowerCase().includes(filter.toLowerCase())) {
            return true
        }
        if (customer.mail.toLowerCase().includes(filter.toLowerCase())) {
            return true
        }
        if (customer.phone.includes(filter)) {
            return true
        }
        if (customer.country.toLowerCase().includes(filter.toLowerCase())) {
            return true
        }
        if (filter.toLowerCase() === 'active') {
            if (customer.status) {
                return true
            }
        }
        if (filter.toLowerCase() === 'inactive') {
            if (!customer.status) {
                return true
            }
        }
    }


    useEffect(() => {
        setCustomersData(data.filter(filterCallback))
    }, [filter])

    if (filter === '') {
        return (
            <>
                <div className='tableWrapper'>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Company</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th className='table__status'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(customer => (
                                <tr>
                                    <th>{customer.name}</th>
                                    <th>{customer.company}</th>
                                    <th>{customer.phone}</th>
                                    <th>{customer.mail}</th>
                                    <th>{customer.country}</th>
                                    {customer.status ? <th className='table__status'>
                                        <span className='table__status--active'>active</span>
                                    </th> : <th className='table__status' >
                                        <span className='table__status--inactive'>inactive</span>
                                    </th>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <PaginationCustomers />
            </>
        )
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th className='table__status'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {customersData.map(customer => (
                        <tr>
                            <th>{customer.name}</th>
                            <th>{customer.company}</th>
                            <th>{customer.phone}</th>
                            <th>{customer.mail}</th>
                            <th>{customer.country}</th>
                            {customer.status ? <th className='table__status'>
                                <span className='table__status--active'>active</span>
                            </th> : <th className='table__status' >
                                <span className='table__status--inactive'>inactive</span>
                            </th>}
                        </tr>
                    ))}
                </tbody>
            </table>
            <PaginationCustomers />
        </>
    )
}

