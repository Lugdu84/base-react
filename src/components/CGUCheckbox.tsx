
type CGUCheckboxProps = {
    checked: boolean;
    onCheck: () => void;
}

export const CGUCheckbox = ({ checked, onCheck} : CGUCheckboxProps) => {
  return (
    <input type="checkbox" checked={checked} onChange={onCheck} />
  )
}
