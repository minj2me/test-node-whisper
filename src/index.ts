import path from 'path'
import { nodewhisper } from 'nodejs-whisper'

// Need to provide exact path to your audio file.
const filePath = path.resolve(__dirname, 'test_sound.wav')
//scp kan02@x2gpu.eastai.tech:/home/kan02/work/node_js /Users/mac/Documents/work/node_js/test-whisper

//scp -r /Users/mac/Documents/work/node_js/test-whisper kan02@x2gpu.eastai.tech:/home/kan02/work/node_js/

const test = async () => {
    await nodewhisper(filePath, {
        modelName: 'tiny', //Downloaded models name
        autoDownloadModelName: 'tiny', // (optional) autodownload a model if model is not present
        verbose: true,
	removeWavFileAfterTranscription: false,
	whisperOptions: {
            outputInText: false, // get output result in txt file
            outputInVtt: false, // get output result in vtt file
            outputInSrt: true, // get output result in srt file
            outputInCsv: false, // get output result in csv file
            translateToEnglish: false, //translate from source language to english
            wordTimestamps: false, // Word-level timestamps
            timestamps_length: 20, // amount of dialogue per timestamp pair
            splitOnWord: true, //split on word rather than on token
        },
    })
};

// Model list
const MODELS_LIST = [
    'tiny',
    'tiny.en',
    'base',
    'base.en',
    'small',
    'small.en',
    'medium',
    'medium.en',
    'large-v1',
    'large',
]

test();
