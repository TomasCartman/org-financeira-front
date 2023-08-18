interface ButtonProps {
    buttonName: string
}

export default function Button(props: ButtonProps) {
    return (
        <button className={`
            border py-2 px-11 rounded-xl
            bg-white text-primary-500 border-primary-500
            hover:bg-primary-500 hover:text-white hover:border-slate-50
        `}>
            {props.buttonName}
        </button>
    )
}