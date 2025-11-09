import { render } from "@testing-library/react"
import AutoComplete, { AutoCompleteProps, DataSourceType } from "./autoComplete"
import { fireEvent, screen } from "@testing-library/react"

const testArray = [
  { value: 'ab', number: 11 },
  { value: 'abc', number: 1 },
  { value: 'b', number: 4 },
  { value: 'c', number: 15 },
]

const testProps: AutoCompleteProps = {
  fetchSuggestions: (query: string) => testArray.filter(item => item.value.includes(query)),
  onSelect: jest.fn(),
  placeholder: 'auto-completed'

}
const testProps2: AutoCompleteProps = {
  fetchSuggestions: (query) => { return testArray.filter(item => item.value.includes(query)) },
  onSelect: jest.fn(),
  placeholder: 'auto-completed',
  renderOption: (item: DataSourceType<{ number?: number }>) => <span>{item.value} - {item.number}</span>
}
describe('test AutoComplete component', () => {
  it('test basic AutoComplete behavior', async () => {
    render(<AutoComplete {...testProps}></AutoComplete>)
    const inputNode = screen.getByPlaceholderText('auto-completed')
    fireEvent.change(inputNode, { target: { value: 'a' } })
    const abElement = await screen.findByText('ab')
    expect(abElement).toBeInTheDocument()

    expect(screen.getAllByTestId('test-suggestion').length).toEqual(2)


  })
  it('should provide keyboard support', async () => {
    render(<AutoComplete {...testProps}></AutoComplete>)
    const inputNode = screen.getByPlaceholderText('auto-completed')
    fireEvent.change(inputNode, { target: { value: 'a' } })
    const abElement = await screen.findByText('ab')
    expect(abElement).toBeInTheDocument()

    const firstResult = screen.queryByText('ab')
    const secondResult = screen.queryByText('abc')

    // arrow down
    fireEvent.keyDown(inputNode, { key: 'ArrowDown' })
    expect(firstResult).toHaveClass('is-active')
    // arrow down
    fireEvent.keyDown(inputNode, { key: 'ArrowDown' })
    expect(secondResult).toHaveClass('is-active')
    // arrow up
    fireEvent.keyDown(inputNode, { key: "ArrowUp" })
    expect(firstResult).toHaveClass('is-active')
    // press enter
    fireEvent.keyDown(inputNode, { key: 'Enter' })
    expect(testProps.onSelect).toHaveBeenCalledWith({ value: 'ab', number: 11 })
    expect(screen.queryByText('ab')).not.toBeInTheDocument()

  })
  it('click outside should hide the dropdown', async () => {
    render(<AutoComplete {...testProps}></AutoComplete>)
    const inputNode = screen.getByPlaceholderText('auto-completed')
    fireEvent.change(inputNode, { target: { value: 'a' } })
    const abElement = await screen.findByText('ab')
    expect(abElement).toBeInTheDocument()
    fireEvent.click(document)
    expect(screen.queryByText('ab')).not.toBeInTheDocument()

  })
  it('renderOption should generate the right template', async () => {
    render(<AutoComplete {...testProps2} />)
    const inputNode = screen.getByPlaceholderText('auto-completed')
    fireEvent.change(inputNode, { target: { value: 'a' } })
    const abElement = await screen.findByText('ab - 11')
    expect(abElement).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toEqual(2)

  })

})