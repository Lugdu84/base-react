import { ChangeEvent} from 'react'

type InputProps = {
    value: string
    label: string
    name: string
    type: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    }
export default function Input( { value, label, name, type, onChange }: InputProps) {
  return (
      <>
        <label htmlFor={name}>{label}</label>
        <input className="border border-gray-400" name={name} type={type} value={value} onChange={onChange} />
    </>
  )
}

