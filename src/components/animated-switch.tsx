import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Details from '../pages/details';
import Home from '../pages/home';

const AnimatedSwitch = () => {
    const location = useLocation()

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <TransitionGroup component={null}>
            <CSSTransition
                key={location.key}
                classNames="animation"
                timeout={300}
            >
                <Routes key={location.key}>
                    <Route path="/:type/id:id" element={<Details />}/>
                </Routes>
            </CSSTransition>
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </TransitionGroup>
    )
}

export default AnimatedSwitch
