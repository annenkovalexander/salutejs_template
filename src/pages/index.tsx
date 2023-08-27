import { useReducer, useState, useRef, useEffect, FormEvent } from 'react';
import {
    AssistantAppState,
    AssistantClientCustomizedCommand,
    AssistantNavigationCommand,
    AssistantSmartAppData,
    CharacterId,
    createAssistant,
    createSmartappDebugger
} from '@salutejs/client';
import {
    Card,
    CardContent,
    Cell,
    Container,
    Row,
    Col,
    DeviceThemeProvider,
    TextBox,
    TextField,
    Checkbox,
} from '@salutejs/plasma-ui';

import { GlobalStyles } from '../Components/GlobalStyles';

// eslint-disable-next-line prefer-destructuring
const NEXT_PUBLIC_DEV_TOKEN = process.env.NEXT_PUBLIC_DEV_TOKEN;
// eslint-disable-next-line prefer-destructuring
const NEXT_PUBLIC_DEV_PHRASE = process.env.NEXT_PUBLIC_DEV_PHRASE;


const IndexPage = () => {

    const assistantStateRef = useRef<AssistantAppState>({});
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        const initializeAssistant = () => {
            if (process.env.NODE_ENV === 'production') {
                return createAssistant({
                    getState: () => assistantStateRef.current,
                });
            }

            if (!NEXT_PUBLIC_DEV_TOKEN || !NEXT_PUBLIC_DEV_PHRASE) {
                throw new Error('');
            }
            return createSmartappDebugger({
                token: NEXT_PUBLIC_DEV_TOKEN,
                initPhrase: NEXT_PUBLIC_DEV_PHRASE,
                getState: () => assistantStateRef.current,
            });
        };

        const assistant = initializeAssistant();

        assistant.on('data', (command: AssistantSmartAppData) => {
            console.log("assistant on", JSON.stringify(command));
            switch (command.type) {
                case 'smart_app_data':
                    console.log("command", JSON.stringify(command));
                    break;
                default:
                    break;
            }
        });
        assistantRef.current = assistant;
    }, []);

    return (
        <DeviceThemeProvider>
            <GlobalStyles character='sber'>
                <html>
                    <h1>Hello, world!</h1>
                </html>
            </GlobalStyles>
        </DeviceThemeProvider>
    );
};

export default IndexPage;
