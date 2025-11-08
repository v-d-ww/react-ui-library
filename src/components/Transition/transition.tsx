import React, { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'


// interface TransitionProps extends CSSTransitionProps{
//   animation?:string
// }
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  children: ReactNode;
  unmountOnExit?: boolean;
  appear?: boolean;
}
export default function Transition(props: TransitionProps) {
  const {
    children,
    classNames,
    animation,
    wrapper,
    unmountOnExit = true,
    appear = true,
    ...restProps

  } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      unmountOnExit={unmountOnExit}
      appear={appear}
      wrapper={wrapper}
      {...restProps}
    >
      <div>{children}</div>
    </CSSTransition>
  )

}
