interface propsNavbar {
    title: string
}

export default function Navbar(props: propsNavbar) {
    return (
        <div className={`
          bg-white w-full h-[70px]
            flex items-center
            shadow-lg
        `}>
            <p className="m-6 font-black text-2xl text-primary-500">
                {props.title}
            </p>
        </div>
    )
}