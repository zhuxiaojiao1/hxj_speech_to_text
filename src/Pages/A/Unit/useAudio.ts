import { SetStateAction, useEffect, useInsertionEffect, useRef, useState } from "react";

export const useAudio = (): [
    string[],
    boolean,
    React.Dispatch<SetStateAction<boolean>>,
    boolean,
    React.Dispatch<SetStateAction<boolean>>,
] => {
    const [text, setText] = useState<string[]>([]);
    const [startStatus, setStartStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    const startStatusRef = useRef(startStatus);

    useInsertionEffect(() => {
        startStatusRef.current = startStatus;
    }, [startStatus]);

    useEffect(() => {
        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let recognition;

        const fn = () => {
            if (!Recognition) {
                alert("当前浏览器不支持");
                return;
            }

            recognition = new Recognition();

            //设置语言类型
            recognition.lang = "zh";

            //启动
            recognition.start();

            //设备开始
            recognition.onaudiostart = (e) => {
                console.log("onaudiostart", e);
                setLoading(false);
            };

            //设备结束
            recognition.onaudioend = (e) => {
                console.log("onaudioend", e);
                recognition.stop();
                setLoading(false);
                if (startStatusRef.current) {
                    fn();
                }
            };

            recognition.onspeechstart = (e) => {
                console.log("onspeechstart", e);
            };
            recognition.onspeechend = (e) => {
                console.log("onspeechend", e);
            };

            recognition.onnomatch = (e) => {
                console.log("onnomatch", e);

                setText((pre) => {
                    const arr = [...pre];
                    arr.push("语音识别失败");
                    return [...arr];
                });
            };
            recognition.onresult = (e) => {
                console.log("onresult", e);
                setText((pre) => {
                    const arr = [...pre];
                    arr.push((e.results?.[0]?.[0]?.transcript as string) ?? "");
                    return [...arr];
                });
            };

            recognition.onerror = (e) => {
                console.log("onerror", e);
            };
            recognition.onend = (e) => {
                console.log("onend", e);
                setLoading(false);
            };
        };

        if (startStatus) {
            fn();
        }
        return () => {
            recognition?.stop();
        };
    }, [startStatus]);
    return [text, startStatus, setStartStatus, loading, setLoading];
};
