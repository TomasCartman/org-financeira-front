import Label from "@/components/form/Label"
import Input from "@/components/form/Input"

interface propsFormItem {
    label: string,
    inputType: 'text' | 'password' | 'email',
    inputValue: string,
    onChangeInput: (event: any) => void
}

export default function FormItem(props: propsFormItem) {
    return (
        <div className="w-full">
            <Label label={props.label}/>
            <Input inputType={props.inputType} onChangeInput={props.onChangeInput}
                inputValue={props.inputValue} />
        </div>
    )
}