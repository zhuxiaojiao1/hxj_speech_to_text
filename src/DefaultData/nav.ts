//原生API
import A from "../Pages/A";
/**
 * 讯飞API
 */
import B from "../Pages/B";

export const navList = [
    {
        content: "SpeechRecognition —— 原生",
        children: A,
    },
    {
        content: "讯飞 —— 第三方",
        children: B,
    },
    {
        content: "火山引擎 —— 第三方",
        children: A,
    },
    {
        content: "百度 —— 第三方",
        children: A,
    },
];
