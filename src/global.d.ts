declare module "*.worker.ts" {
    class WebpackWorker extends Worker {
        constructor();
    }
    export default WebpackWorker;
}

declare module "*.scss" {
    const data: Record<string, string>;
    export default data;
}

declare class AudioWorkletProcessor {
    constructor();
}

declare const registerProcessor: (spaceName: string, c: AudioWorkletProcessor) => void;

interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    SpeechGrammarList: any;
    SpeechRecognitionEvent: any;
    webkitSpeechGrammarList: any;
    webkitSpeechRecognitionEvent: any;
}

declare module "*.worklet.ts" {
    const exportString: string;
    export default exportString;
}
