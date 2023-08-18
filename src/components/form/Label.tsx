interface propsLabel {
    label: string
}

export default function Label(props: propsLabel) {
    return (
        <label className="text-primary-500 font-medium text-base">
            {props.label}
        </label>
    )
}