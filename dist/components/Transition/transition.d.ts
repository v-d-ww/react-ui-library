import React, { ReactNode } from 'react';
import { CSSTransitionProps } from 'react-transition-group/CSSTransition';
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right';
type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    wrapper?: boolean;
    children: ReactNode;
    unmountOnExit?: boolean;
    appear?: boolean;
};
export default function Transition(props: TransitionProps): React.JSX.Element;
export {};
