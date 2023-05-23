import React from 'react'
import { Aside } from './LayaoutComponents'
import { LayaoutProps } from '../types/types'

export default function Layaout({ children }: LayaoutProps) {
    const userName = 'Evano'
    return (
        <div className='layaout'>
            <Aside />
            <main className='main'>
                <header className='header'>
                    <h2 className='header__title'>Hello {userName} 👋🏼,</h2>
                </header>
                <div className='page'>{children}</div>
            </main>

        </div>)
}