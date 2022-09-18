import { useEffect, useState } from "react";

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY)
        }
        
        // listener calls update function
        window.addEventListener('scroll', updatePosition)

        updatePosition();

        return () => window.removeEventListener('scroll', updatePosition);

    }, []);

    return scrollPosition;
}