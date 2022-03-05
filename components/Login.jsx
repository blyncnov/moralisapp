import Image from "next/image";
import { useMoralis } from "react-moralis"
import Logo from "../public/moralis.svg";
import styles from "../styles/Home.module.css";

const Login = () => {

    const { authenticate, authError, isWeb3Enabled, user, enableWeb3, Moralis } = useMoralis();

    const WalleConectAuthenticate = () => {
        const user = authenticate({
            provider: "walletconnect",
            chainId: 56,
            mobileLinks: [
                "metamask",
                "trust",
                "rainbow",
                "argent",
                "pillar"
            ],
            signingMessage: "blyncnov greets ya"
        })
        console.log('====================================');
        console.log(user);
        console.log('====================================');
    }

    return (
        <>
            <div className={styles.login__container}>
                <div className={styles.login__container__form}>
                    <div className={styles.logo}>
                        <Image width="46" src={Logo} height="38" alt="moralis-logo" />
                    </div>
                    {authError && <p >{authError.name} <br />
                        <span>{authError.message}</span>
                    </p>}
                    <div className={styles.form__login}>
                        <div className={styles.form__login__title}>
                            <button onClick={authenticate} className={styles.button}>Connect Wallet</button>
                        </div>
                        <div className={styles.form__login__title}>
                            <button onClick={WalleConectAuthenticate} className={styles.button}>Connect With Wallet Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login