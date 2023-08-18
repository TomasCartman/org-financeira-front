import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import FormItem from "@/components/form/FormItem";
import Input from "@/components/form/Input";
import Label from "@/components/form/Label";

export default function Index() {
    return (
        <>
            <div className="h-screen">
                <div className="h-screen w-full flex flex-col justify-center items-center">
                    <Navbar title="Organização Financeira" />
                    <div className={`flex flex-col justify-start items-center h-full w-1/4 m-2`}>
                        <h1 className="">Faça o login para acessar sua conta</h1>
                        <div className={`flex flex-col justify-center items-center w-full gap-5`}>
                            <FormItem label="E-mail" type="text" />
                            <FormItem label="Senha" type="password" />
                            <Button buttonName="Login" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}