import {
    createUserScenario,
    createSystemScenario,
    createSaluteRequest,
    createSaluteResponse,
    createScenarioWalker,
    createMatchers,
    SaluteRequest,
    NLPRequest,
    NLPResponse,
} from '@salutejs/scenario';
import { SaluteMemoryStorage } from '@salutejs/storage-adapter-memory';

import {
    noMatchHandler,
    runAppHandler,
} from './handlers';

const { action, regexp, text } = createMatchers<SaluteRequest>();

const userScenario = createUserScenario({
    Hi: {
            match: text("Привет"),
            handle: ({res}) => {
                res.appendBubble("Привет! Как у тебя дела?")
                res.setPronounceText("Привет! Как у тебя дела?")
                
        },
        children: {
            HowAreYou: {
                match: text("Тебе правда интересно?"),
                handle: ({res}) => {
                    res.appendBubble("Да, мы же не в Америке!");
                    res.setPronounceText("Да, мы же не в Америке!");
                }
            }
        }
    },
    DontTryTooMuch: {
        match: text("Не переусердствуй"),
        handle: ({res}) => {
            res.appendBubble("Это сложно, но буду стараться!")
            res.setPronounceText("Это сложно, но буду стараться!")
            
        }
    }
});

const scenarioWalker = createScenarioWalker({
    systemScenario: createSystemScenario({
        RUN_APP: runAppHandler,
        NO_MATCH: noMatchHandler,
    }),
    userScenario,
});

const storage = new SaluteMemoryStorage();

export const handleNlpRequest = async (request: NLPRequest): Promise<NLPResponse> => {
    const req = createSaluteRequest(request);
    const res = createSaluteResponse(request);

    const sessionId = request.uuid.userId;
    const session = await storage.resolve(sessionId);

    await scenarioWalker({ req, res, session });
    await storage.save({ id: sessionId, session });
    console.log("handleNlpRequest: ", res.message);
    return res.message;
};
