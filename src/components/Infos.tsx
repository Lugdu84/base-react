import React, { useState, useEffect, memo } from 'react'

const InfosMemo = memo( function Infos() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{ display: show ? 'block' : 'none' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam et impedit illo, odit deleniti culpa sit voluptas sapiente officiis ratione cumque dicta quam nobis cum deserunt exercitationem sequi sed? Qui!
        </div>
    )
})

export default InfosMemo