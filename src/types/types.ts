import { svgCollection } from "../assets/img/svgCollection"

export interface CustomerProps{
    name: string, 
    company: string,
    phone: string,
    mail: string,
    country: string,
    status: boolean
}
export type LayaoutProps = {
    children: JSX.Element | JSX.Element[] | string | undefined
}

export type userProps = {
    name: string,
    position?: string | undefined,
    img: string
}
export type NavItemProps = {
    iconId: keyof svgCollection,
    children: string | JSX.Element | undefined | never[]
    isActive?: boolean | undefined
}

export type TableProps = {
    data: CustomerProps[],
    filter: string
}