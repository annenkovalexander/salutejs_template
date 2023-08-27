# SaluteJS. _Template project_&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;[![Salute](https://developers.sber.ru/docs/img/badges/SaluteJS.png) ](https://developers.sber.ru/docs/ru/va/reference/js-framework/overview)
&emsp;**_SaluteJS_** is opensource framework for virtual assistant scenario creation. SaluteJS is suitable for both CanvasApp and ChatApp. Current project is a template SaluteJS project which contains necessary and sufficient functions to start your own scenario. 

- Start project locally
- Use ngrok utility
- Write down your webhook in SberDevices SmartApp
- Say something to your assistant
- Assistant replies
- ✨Magic ✨

## Features

- It starts
- On start you can see some interesting text suggestions, they won't work. Don't worry
- It replies right if you know secret phrase
- If you don't, it replies right also

## Tech

Current project uses a number of open source projects to work properly:

- [NextJS](https://nextjs.org) - Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
- [SaluteJS](https://developers.sber.ru/docs/ru/va/reference/js-framework/overview) - SaluteJS is opensource framework for virtual assistant scenario creation.

And of course this project itself is open source with a [public repository](https://github.com/annenkovalexander/salutejs_template.git)
 on GitHub.

## Installation

The project requires [Node.js](https://nodejs.org/) v16.8+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/annenkovalexander/salutejs_template.git
cd salutejs_template
npm install
npm run dev
```

For production environments...

```
npm run build
```

## How to make your own template project

&emsp;You can create your own template project from scratch. Let's do it!
1. Create empty project folder
2. Copy all configurations files, including package.json and package-lock.json from current project to your folder
3. Install all dependencies and devDependencies
```
npm install
```
4. Go to https://developers.sber.ru/ and login with your SberID
5. Take and copy your developer token from your_profile/emulator
6. Create smartApp of type CanvasApp. In project customization area copy activation phrase
7. In the **project root** create .env file
8. Create NEXT_PUBLIC_DEV_TOKEN constant and copy token value from section 5
9. Create NEXT_PUBLIC_DEV_PHRASE constant as string sum 'Запусти ' and activation phrase from section 6
10. In the project root create /src folder
11. In the /src folder create /Components, /pages, /scenario folders
12. In the /pages folder create **_index.tsx_** file and /api folder
13. In the /pages/api folder create hook.ts file
14. In the /scenario folder create handlers.ts and scenario.ts files
15. Open **_index.tsx_** file
    15.1 Import React libraries, assistant libraries @salutejs/client and @salutejs/plasma-ui
    15.2 Import GlobalStyles component to work with styles for assistant charachters: Joy, Afina and Sber
    15.3 Define constants for user token and init phrase corresponding to token and phrase from **.env** file
    15.4 Create React-component IndexPage
    &emsp;15.4.1 Implement React hook useEffect
    &emsp;15.4.2 In the hook create assistant instance. **Note:** Assistant instance is responsible for assistant input field, lavasphere display. IndexPage component return statement is responsible for user data diplay.
16. Open **scenario.ts** file
    16.1 Import assistant libraries, event handlers and text classification functions
    16.2 Define text classification functions
    16.3 Define user scenario
    16.4 Create scenario instance
    16.5 Create storage instance
    16.6 Create requests handler instance
17. Open file **handlers.ts** file
    17.1 Import SaluteJS event handlers library
    17.2 Import RUN_APP event handler. **Note:** this event occurs at the start of scenario
    17.3 Import NO_MATCH event handler. **Note:** this event occurs when no user scenario state is defined. Event is globally defined.
18. Open file **hook.ts**
    18.1 Import NextRequest and NLPRequests libraries
    18.2 Import handleNlpRequest function
    18.3 Define requests handler of type NLPRequest
19. Start project
    ```
    npm run dev
    ```
20. With help of tunnel utilities like ngrok you can create external link for your locally started project
    ```
    ngrok http 3000
    ```
21. Open your smartapp on developers.sber.ru
22. Go to customization page and add your webhook: ngrok_url + '/api/hook'
23. Update your start page of your locally started project
24. If you see hi message, you succeed! Congratulations 🏆
    
## License
&emsp;&emsp;**NO LICENCE**

## **Free Software!**
&emsp;&emsp;This is free software. Fill free to use it and share repository in your social media