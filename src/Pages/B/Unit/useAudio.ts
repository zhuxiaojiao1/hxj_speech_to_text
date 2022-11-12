import { useEffect } from "react";
/**
 * 获取设备失败
 */
const getMediaFail = (e: unknown) => {
    console.log("设备打开失败");
};

/**
 * 获取设备成功
 */
const getMediaSuccess = (e: MediaStream, audioContext: AudioContext) => {
    const workletNode = new window.AudioWorkletNode(audioContext, "audioWorker");
    workletNode.connect(audioContext.destination);
    workletNode.port.onmessage = function (event) {
        console.log(event);
    };
    // const mediaStream = this.context.createMediaStreamSource(stream);
    // this.mediaStream = mediaStream;
    // this.recorder.onaudioprocess = (e) => {
    //     console.log(e);
    //     this.sendData(e.inputBuffer.getChannelData(0));
    // };
};

export const start = () => {
    const audioContext = new window.AudioContext();
    // void audioContext.audioWorklet.addModule(worklet).then((res) => {
    //     console.log(res);
    // });

    const { mediaDevices } = window.navigator;

    if (!mediaDevices.getUserMedia) {
        console.log("没有设备权限");
    }
    mediaDevices
        .getUserMedia({
            audio: true,
            video: false,
        })
        .then((e) => {
            getMediaSuccess(e, audioContext);
        })
        .catch((e) => {
            getMediaFail(e);
        });
};

export const useAudio = () => {
    useEffect(() => {
        console.log("");
    }, []);
};
