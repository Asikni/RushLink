interface AboutButton{
    children : string,
    className?: string

}

export const Button = ({children, className }: AboutButton ) =>{
    return(
        <div>
            <button className={className}>{children}</button>
        </div>
    )
}