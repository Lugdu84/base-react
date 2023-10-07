import React from 'react'

type CGUCheckboxProps = {
    checked: boolean;
    onCheck: (isChecked: boolean) => void;
}

export const CGUCheckbox = ({ checked, onCheck }: CGUCheckboxProps) => {
    
  return (
    <input type="checkbox" checked={checked} onChange={(e) => onCheck(e.target.checked)} />
  )
}
