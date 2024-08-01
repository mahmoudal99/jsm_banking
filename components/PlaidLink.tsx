import React, { useCallback, useEffect, useState } from 'react'
import { Button } from "./ui/button";
import { PlaidLinkOnSuccess, PlaidLinkOptions } from "react-plaid-link";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PlaidLink({ user, variant } : PlaidLinkProps ) {

    const router = useRouter();

    const [token, setToken] = useState('');

    useEffect(() => {
        const getLinkToken = async () => {
        const data = await createLinkToken(user);

        setToken(data?.linkToken);
        }

        getLinkToken();
    }, [user]);

    const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
        await exchangePublicToken({
        publicToken: public_token,
        user,
        })

        router.push('/');
    }, [user])
    
    const config: PlaidLinkOptions = {
        token,
        onSuccess
    }

    return (
        <>
            {variant === 'primary' ? (
                <Button className="plaidlink-primary">Connect Bank Account</Button>
            ) : variant === 'ghost' ? (
                <Button>Connect Bank Account</Button>
            ) : (
                <Button>Connect Bank Account</Button>
            )}
        </>
    )
}