import React from 'react';
import './gototop.css'
import { useEffect, useRef, useState } from 'react';
const GoToTop = () => {
    const toTopRef = useRef()
    const [show, setShow] = useState(false)
    useEffect(() => {
        const changeStyle = () => {

            setShow(document.documentElement.scrollTop > 200 || document.body.scrollTop > 200)

            if (show) { // if gototop show
                let footer = document.querySelector('#footer')
                let footerRect = footer.getBoundingClientRect()
                let toTopRefRect = toTopRef.current.getBoundingClientRect()

                if (footerRect.top - toTopRefRect.top < 0) {
                    toTopRef.current.classList.add('changeStyle')
                } else {
                    toTopRef.current.classList.remove('changeStyle')
                }
            }
        }
        window.addEventListener("scroll", changeStyle)
        return () => {
            window.removeEventListener("scroll", changeStyle)
        }
    }, [show])

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <>
            {
                show ? (
                    <div className="gototop" onClick={handleGoToTop} ref={toTopRef} >
                        <i className='bx bx-arrow-to-top'></i>
                    </div >
                ) : ""
            }
        </>


    );
};

export default GoToTop;