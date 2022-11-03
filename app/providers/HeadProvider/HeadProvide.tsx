import NextNProgress from 'nextjs-progressbar';
import {accentColor, bgColor} from "@config/constants";
import Head from "next/head";
import Favicons from "./FavIcons";
import {FC, ReactNode} from "react";
import 'nextjs-progressbar/'

const HeadProvider: FC<{children: ReactNode}> = ({children}) => {
    return (
        <>
            <NextNProgress
                color={accentColor}
                stopDelayMs={300}
                height={3}
            />
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
                <Favicons/>
                <meta name="theme-color" content={"#181B1E"}/>
                <meta name="theme-color" content={"#181B1E"}/>
                <meta name="msapplication-navbutton-color" content={"#181B1E"}/>
                <meta name="apple-mobile-app-status-bar-style" content={"#181B1E"}/>
            </Head>
            {children}
        </>
    );
};

export default HeadProvider;
