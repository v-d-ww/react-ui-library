import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import Tabs, { TabsProps } from './tabs'
import TabsItem from './tabsItem'

const testProps: TabsProps = {
  defaultIndex: 0,
  styleType: 'underline',
  onSelect: jest.fn()
}

const generateTabs = (props: TabsProps) => {
  return (
    <Tabs {...props}>
      <TabsItem label="card1">this is card one</TabsItem>
      <TabsItem label="card2">this is content two</TabsItem>
      <TabsItem label="disabled" disabled={true}>this is content three</TabsItem>
    </Tabs>
  )
}

const mockStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    .tabs-content { display: none; }
    .tabs-content.tabs-content-active { display: block; }
  `;
  document.head.appendChild(style);
};

describe('test Tabs and TabsItem component in default(underline) mode', () => {

  it('should render correct Tabs and TabsItem based on default props', () => {
    render(generateTabs(testProps))
    mockStyles()
    const activeLabel = screen.getByText('card1')
    const activeContent = screen.getByText('this is card one')
    expect(activeLabel).toHaveClass('tabs-label tabs-label-active')
    expect(activeContent).toBeVisible()
    const label2 = screen.getByText('card2')
    fireEvent.click(label2)
    const content2 = screen.getByText('this is content two')
    expect(activeContent).not.toBeVisible()
    expect(content2).toBeVisible()
    const label3 = screen.getByText('disabled')
    fireEvent.click(label3)
    const content3 = screen.getByText('this is content three')
    expect(content3).not.toBeVisible()
  })
})