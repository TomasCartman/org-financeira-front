import Label from "@/components/form/Label"
import Input from "@/components/form/Input"

interface propsFormItem {
    label: string,
    type: 'text' | 'password'
}

export default function FormItem(props: propsFormItem) {
    return (
        <div className="w-full">
            <Label label={props.label}/>
            <Input type={props.type} />
        </div>
    )
}