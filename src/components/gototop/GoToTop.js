import React from 'react';
import './gototop.css'
import { useEffect, useRef } from 'react';
const GoToTop = () => {
    const toTopRef = useRef()
    useEffect(() => {
        const changeStyle = () => {
            let footer = document.querySelector('#footer')
            let footerRect = footer.getBoundingClientRect()
            let toTopRefRect = toTopRef.current.getBoundingClientRect()

            if (footerRect.top - toTopRefRect.top < 0) {
                toTopRef.current.classList.add('changeStyle')
            } else {
                toTopRef.current.classList.remove('changeStyle')
            }
        }
        window.addEventListener("scroll", changeStyle)
        return () => {
            window.removeEventListener("scroll", changeStyle)
        }
    }, [])

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <div className="gototop" onClick={handleGoToTop} ref={toTopRef}>
            <i class='bx bx-arrow-to-top'></i>
        </div>
    );
};

export default GoToTop;