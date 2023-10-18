import { Select, SelectItem } from "@nextui-org/react";

type SelectChoiceProps = {
    label: string
    items: string[]
    isDisabled?: boolean
    onChange?: (val: string) => void
}

function SelectChoice({ label, items, isDisabled, onChange }: SelectChoiceProps) {
    if (!items) return <></>
    return (
        <Select
            label={label}
            className="max-w-xs"
            isDisabled={isDisabled}
            onChange={(event) => onChange && onChange(event?.target?.value)}
        >
            {items.map((item: string) => <SelectItem key={item} value={item}>{item}</SelectItem>)}
        </Select>
    )

}

export default SelectChoice