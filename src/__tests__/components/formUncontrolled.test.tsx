import { render, screen, fireEvent } from '@testing-library/react'
import { FormUnControlled } from '../../components/FormUncontrolled'

describe('FormUnControlled', () => {
  it('should render the form with the correct inputs', () => {
    render(<FormUnControlled />)
   const nameInput = screen.getByTestId('name') as HTMLInputElement
    const cguInput = screen.getByTestId('checked') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: 'Envoyer' }) as HTMLButtonElement
    expect(nameInput.type).toBe('text')
    expect(nameInput.value).toBe('')
    expect(cguInput.type).toBe('checkbox')
    expect(cguInput.checked).toBe(false)
    expect(submitButton.type).toBe('submit')
  })

  it('should log the form data when submitted', () => {
    const consoleSpy = vitest.spyOn(console, 'log')
    render(<FormUnControlled />)
    const nameInput = screen.getByTestId('name') as HTMLInputElement
    const cguInput = screen.getByTestId('checked') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: 'Envoyer' }) as HTMLButtonElement

    fireEvent.change(nameInput, { target: { value: 'John Doe' } })
    fireEvent.click(cguInput)
    fireEvent.click(submitButton)

    expect(consoleSpy).toHaveBeenCalledWith('name', 'John Doe')
    expect(consoleSpy).toHaveBeenCalledWith('checked', true)
  })
})