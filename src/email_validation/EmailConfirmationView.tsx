import { useEffect, useState } from "react";
import { App } from "realm-web";
import { useSearchParams } from "react-router-dom";
import ConfirmResult from "./ConfirmResult";


function ConfirmEmail() {
    const [state, setState] = useState({
        message: '',
        success: false
    });
    const [searchParams, _] = useSearchParams()

    const appId: string = process.env.REACT_APP_ID || '';
    console.log(appId)
    const app: App = new App({ id: appId });

    const confirmEmail = () => {
        const token = searchParams.get("token") || '';
        const tokenId = searchParams.get("tokenId") || '';
        if (!token || !tokenId) {
            displayResult(ConfirmResult.ERROR)
        }

        app.emailPasswordAuth
            .confirmUser({ token, tokenId }).then(() => displayResult(ConfirmResult.SUCCESS))
            .catch(_ => displayResult(ConfirmResult.ERROR))

    };

    const displayResult = (result: ConfirmResult) => {
        switch (result) {
            case ConfirmResult.SUCCESS:
                setState({ message: 'Your email has ben confirmed.', success: true });
                break;
            default:
                setState({ message: 'Email confirmation failed', success: false });
        }
    };

    useEffect(() => {
        confirmEmail()
    }, []);

    return (
        <div className="bg-white m-auto  p-4 h-[75%] sm:w-1/2 content-center card shadow-md shadow-shadow rounded-md text-center text-text_primary  flex flex-col justify-evenly">
            <h1 className="text-[3rem] text-bold text-primary w-full">Closet</h1>
            <h3 className="text-xl">{state.message}</h3>
            <p className="text-wrap overflow-hidden">{state.success ? `<br\>You can now move to the application and continue login` : `Go back to the application and try again to register`}</p>
        </div>);
}

export default ConfirmEmail;