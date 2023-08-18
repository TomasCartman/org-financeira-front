import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Title from "@/components/Title";
import FormItem from "@/components/form/FormItem";
import { useState } from "react";

export default function Index() {
    const [login, setLogin] = useState<{
        email: string, name: string, password: string, passwordAgain: string
    }>({
        email: '',
        name: '',
        password: '',
        passwordAgain: ''
    })

    const onChangeEmailInput = (event: any) => {
        const eventValue: string = event.target.value
        setLogin({ ...login, email: eventValue, })
    }

    const onChangeNameInput = (event: any) => {
        const eventValue: string = event.target.value
        setLogin({ ...login, name: eventValue, })
    }

    const onChangePasswordInput = (event: any) => {
        const eventValue: string = event.target.value
        setLogin({ ...login, password: eventValue, })
    }

    const onChangePasswordAgainInput = (event: any) => {
        const eventValue: string = event.target.value
        setLogin({ ...login, passwordAgain: eventValue, })
    }

    return (
        <div className="h-screen">
            <div className="h-screen w-full flex flex-col justify-center items-center">
                <Navbar title="Organização Financeira" />
                <div className={`flex flex-col justify-start items-center h-full w-1/4 m-2`}>
                    <div className="mt-20 mb-24 ">
                        <Title title="Cadastre-se e começe a usar sua conta" />
                    </div>
                    <div className={`flex flex-col justify-center items-center w-full gap-4`}>
                        <FormItem
                            label="Seu e-mail"
                            inputType="email"
                            inputValue={login.email}
                            onChangeInput={onChangeEmailInput} />
                        <FormItem
                            label="Seu nome"
                            inputType="text"
                            inputValue={login.name}
                            onChangeInput={onChangeNameInput} />
                        <FormItem
                            label="Sua senha"
                            inputType="password"
                            inputValue={login.password}
                            onChangeInput={onChangePasswordInput} />
                        <FormItem
                            label="Sua senha novamente"
                            inputType="password"
                            inputValue={login.passwordAgain}
                            onChangeInput={onChangePasswordAgainInput} />
                    </div>
                    <div className="mt-10">
                        <Button buttonName="Registrar" />
                    </div>
                </div>
            </div>
        </div>
    )
}