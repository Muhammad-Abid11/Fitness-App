import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignInPage from "../pages/sign_in";
class AppRouter extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<SignInPage />} />
                    </Routes>
                </BrowserRouter>

            </div>

        )
    }
}

export default AppRouter;