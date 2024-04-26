import { FC } from "react"
interface Props {
  label: {
    type: string;
    name?: string;
    value?: number;
    placeholder?: string;
    isActive: boolean
  };
  updateFunc?: (value: string) => void;
  updateRadio: (e: any) => void
}
const Radio:FC<Props> = ({label, updateFunc, updateRadio}) => {
  const { type, name, value, placeholder, isActive } = label
  return (
    <label>
      <input type="radio" name="radio" id={type} checked={isActive} onChange={(e) => updateRadio(e)} /> 
      { type === "text" ? name : type === "input" ? <input className="text-black" type="text" placeholder={placeholder} value={value} onChange={(e) => updateFunc && updateFunc(e.target.value)} /> : null}
      <span className="checkmark"></span>
    </label>
  )
}

export default Radio