class RandomNoiseProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        console.log("inputs", inputs);
        console.log("outputs", outputs);
        console.log("parameters", parameters);
        return true;
    }
}

registerProcessor("audioWorker", RandomNoiseProcessor);
