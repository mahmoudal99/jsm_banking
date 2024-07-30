'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { set, z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from "./CustomInput";
import { Loader2 } from "lucide-react";
import { authFormSchema } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";

export default function AuthForm({ type } : { type : string }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = authFormSchema(type);

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })
    
    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        try {
            if(type === 'sign-up'){
              const newUser = await signUp(values);
              setUser(newUser);
            }
            if(type === 'sign-in'){
                const response = await signIn({
                    email: values.email,
                    password: values.password,
                });
                if(response){
                    setUser(response.data);
                    router.push('/')
                }
            }
        }catch(e){
            console.log(e)
        }finally{
            setIsLoading(false);
        }
    }

    return (
        <section className="auth-form">
            <header className="flex flex-col gap-5 md:gap-8">
                <Link href="/" className="cursor-pointer flex items-center gap-1">
                    <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
                    <h1 className="text-26 font-semibold font-ibm-plex-serif text-black-1">
                        Horizon
                    </h1>
                </Link>
                <div className="flex flex-col gap-1 md:gap-3">
                    <h1 className="text-24 font-semibold lg:text-36 text-gray-900">
                        {user ? 'Link Account' :  type === 'sign-up' ? 'Sign Up' : 'Sign In'}
                        <p className="text-16 font-normal text-gray-500">
                            {user ? 'Link your account to get started.' : 'Please enter your details.'}
                        </p>
                    </h1>
                </div>
                {user ? (
                    <div>
                        {/* TODO: Link Account */}
                    </div>
                ) : (
                    <>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                      {type === 'sign-up' && (
                        <>
                            <div className="flex gap-4">
                                <CustomInput 
                                control={form.control}
                                name="firstName"
                                label="First Name"
                                placeholder="Enter your first name"
                                />
                                <CustomInput 
                                control={form.control}
                                name="lastName"
                                label="Last Name"
                                placeholder="Enter your last name"
                                />
                            </div>
                            <CustomInput
                              control={form.control}
                              name="address1"
                              label="Address"
                              placeholder="Enter your specific address"
                            />
                            <CustomInput
                              control={form.control}
                              name="city"
                              label="City"
                              placeholder="Enter your city"
                            />
                            <div className="flex gap-4">
                                <CustomInput 
                                    control={form.control}
                                    name="state"
                                    label="State"
                                    placeholder="Ex: CA"
                                />
                                <CustomInput 
                                    control={form.control}
                                    name="postalCode"
                                    label="Postal Code"
                                    placeholder="Ex: 94105"
                                />
                            </div>
                            <div className="flex gap-4">
                                <CustomInput 
                                    control={form.control}
                                    name="dob"
                                    label="Date of Birth"
                                    placeholder="Ex: 1990-01-01"
                                />
                                <CustomInput 
                                    control={form.control}
                                    name="ssn"
                                    label="SSN"
                                    placeholder="Ex: 123-45-6789"
                                />
                            </div>
                        </>
                      )}
                      <CustomInput 
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                      />
                      <CustomInput 
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                      />
                      <div className="flex flex-col gap-4">
                        <Button type="submit" disabled={isLoading} className="form-btn">
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" /> &nbsp;
                                    Loading...
                                </>
                            ) : type === 'sign-up' ? 'Sign Up' : 'Sign In'}
                        </Button>
                      </div>
                    </form>
                  </Form>
                    <footer className="flex justify-center gap-1">
                        <p className="text-14 font-normal text-gray-600">
                            {type === 'sign-in'
                            ? "Don't have an account?"
                            : "Already have an account?"}
                        </p>
                        <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className="form-link">
                            {type === 'sign-in' ? 'Sign up' : 'Sign in'}
                        </Link>
                    </footer>
                  </>
                )}
            </header>
        </section>
    )
}