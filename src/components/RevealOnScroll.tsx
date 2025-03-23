import { ReactNode, useEffect, useRef } from "react"

type TRevealOnScrollProps = {
    children: ReactNode
}
export const RevealOnScroll = ({children}: TRevealOnScrollProps)=>{
    const ref = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                ref.current?.classList.add("visible")
            }
        },{threshold: 0.2, rootMargin: "0px 0px -50px 0px"})
        //threshold: %element appear before activation
        //rootMargin: mo rong/thu nho vung quan sat

        if(ref.current) observer.observe(ref.current)
        return ()=> observer.disconnect()
    })

    return (
        <div ref={ref} className="reveal">
            {children}

        </div>
    )
}