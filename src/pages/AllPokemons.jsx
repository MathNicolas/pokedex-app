import React from 'react';
import { Link } from 'react-router-dom';
export default function SignIn() {
   
    return (
        <div className="flex justify-center items-center h-screen bg-custom-gray">
            <div className="p-8 space-y-6 w-96 text-white bg-custom-blue rounded-xl">

                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-bold text-center">
                        Login
                    </h1>
                </div>


                <div className="flex items-center justify-center h-8">
                    <div className="h-[1px] w-12 bg-custom-border-gray"></div>
                    <p className="text-custom-text-gray pl-4 pr-4">Entre com outras contas</p>
                    <div className="h-[1px] w-12 bg-custom-border-gray"></div>
                </div>

                <div className="flex justify-center gap-3">
                </div>
                <div className="flex justify-center ">
                <p className="text-custom-text-gray">Não tem uma conta? <Link to="/cadastro" className="text-white ">Cadastrar-se</Link></p>
                </div>
            </div>
        </div>
    )
}