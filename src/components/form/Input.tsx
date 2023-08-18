interface propsInput {
    inputType: 'text' | 'password' | 'email',
    inputValue: string,
    onChangeInput: (event: any) => void
}

export default function Input(props: propsInput) {
    return (
        <input 
            className={`
                border border-primary-500 w-full h-8
                p-2 rounded-xl text-black py-5
                bg-almostWhite
                focus:outline-1 focus:outline-primary-500
            `}
            type={props.inputType}
            value={props.inputValue}
            onChange={props.onChangeInput} />
    )
}