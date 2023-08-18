import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import FormItem from "@/components/form/FormItem";
import Link from "next/link";
import { useState } from "react";


export default function Index() {
    const [login, setLogin] = useState<{email: string, password: string}>({
        email: '',
        password: ''
    })

    const onChangeEmailInput = (event: any) => {
        const eventValue: string = event.target.value
        setLogin({...login, email: eventValue, })
    }

    const onChangePasswordInput = (event: any) => {
        const eventValue: string = event.target.value
        setLogin({...login, password: eventValue, })
    }

    return (
        <div className="h-screen">
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <Navbar title="Organização Financeira" />
                <div className={`flex flex-col justify-start items-center h-full w-1/4 m-2`}>
                <div className="mt-28">
                    <Title title="Faça o login para acessar sua conta" />
                </div>
                    <h2 className={`
                            mb-32 text-center text-sm
                        `}>
                        Ainda não tem uma conta?
                        <span className="text-primary-500 ml-1 cursor-pointer hover:font-semibold">
                            <Link href={'/register'}>Crie aqui</Link>
                        </span>
                    </h2>
                    <div className={`flex flex-col justify-center items-center w-full gap-5`}>
                        <FormItem 
                            label="E-mail" 
                            inputType="email"
                            inputValue={login.email}
                            onChangeInput={onChangeEmailInput} />
                        <FormItem 
                            label="Senha" 
                            inputType="password"
                            inputValue={login.password}
                            onChangeInput={onChangePasswordInput} />
                    </div>
                    <div className="mt-10">
                        <Button buttonName="Login" />
                    </div>
                </div>
            </div>
        </div>
    )
}