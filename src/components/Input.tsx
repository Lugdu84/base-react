import React, { ComponentPropsWithoutRef} from 'react'

type InputProps = {
  label: string
    } & ComponentPropsWithoutRef<"input">
export default function Input({ label , ...props }: InputProps) {
  const { name } = props
  return (
      <>
        <label htmlFor={name}>{label}</label>
        <input className="border border-gray-400" { ...props} />
    </>
  )
}

