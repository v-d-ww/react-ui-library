import { ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

// interface TransitionProps extends CSSTransitionProps{
//   animation?:string
// }
type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'
type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
  children: ReactNode
}
export function Transition(props: TransitionProps) {
  const {
    children,
    classNames,
    animation,
    wrapper,
    ...restProps

  } = props
  return (
    <CSSTransition
      classNames={classNames ? classNames : animation}
      {...restProps}
    >
      <div>{children}</div>
    </CSSTransition>
  )

}
Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};