interface propsTitle {
    title: string
}

export default function Title(props: propsTitle) {
    return (
        <h1 className={`
            font-semibold text-center text-4xl
          text-primary-500
        `}>{props.title}</h1>
    )
}