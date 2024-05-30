import { FC, ReactNode } from "react"

type IProps = {
    children : ReactNode
}

const Content:FC<IProps> = ({children})=>{
    return (
        <div className='px-2 sm:px-6 md:px-10'>
            {children}
        </div>
    )
}

export default Content;