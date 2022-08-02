import { FieldError, UseFormRegister } from 'react-hook-form'

interface IFormInput {
    name: string
    age: string
    email: string
    password: string
}

interface ModalStepThreeI {
    register: UseFormRegister<IFormInput>
    errors: Record<string, FieldError>
}

export default function StepThree({ register, errors }: ModalStepThreeI) {
    return (
        <>
            <input
                type="text"
                placeholder="email"
                {...register('email', {
                    required: {
                        value: true,
                        message: 'This input is required',
                    },
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                        message: 'Input should contain valid adress',
                    },
                })}
            />
            {errors.email?.message}
        </>
    )
}
