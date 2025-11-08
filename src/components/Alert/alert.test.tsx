import React from 'react'
import { fireEvent, render, screen, waitFor, within } from "@testing-library/react"
import Alert, { AlertProps } from './alert'


const testAlertProp: AlertProps = {
  title: 'testAlert',
  closable: true,
  customClose: '关闭',
  type: 'primary'
}


const testSuccessAlertProp: AlertProps = {
  closable: true,
  customClose: '关闭',
  type: 'success'
}

describe('test Alert component', () => {
  it('should render the correct default Alert', async () => {
    render(<Alert {...testAlertProp}>Nice</Alert>)

    const parentNode = screen.getByTestId('test-alert')
    const element = within(parentNode).getByText('Nice')

    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('P')
    expect(element).toHaveClass('alert-message')

    expect(parentNode).toHaveClass('alert alert-primary')

    const titleElement = within(parentNode).getByText('testAlert')
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass('alert-title')


    const iconElement = screen.getByText('关闭')
    fireEvent.click(iconElement)
    await waitFor(() => {
      expect(element).not.toBeInTheDocument()
    })
  })

  it('should render the correct component based on different props', async () => {
    render(<Alert {...testSuccessAlertProp}>Nice</Alert>)
    const element = screen.getByText('Nice')

    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('P')
    expect(element).toHaveClass('alert-message')
    const parentNode = screen.getByTestId('test-alert')
    expect(parentNode).toHaveClass('alert alert-success')

    const iconElement = screen.getByText('关闭')
    expect(iconElement).toBeInTheDocument()
    fireEvent.click(iconElement)
    await waitFor(() => {
      expect(element).not.toBeInTheDocument()
    })
  })
})