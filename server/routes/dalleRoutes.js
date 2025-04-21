import express, { response } from 'express';
import * as dotenv from 'dotenv';
import fs from 'fs'; // <-- Add this import at the top if you want (alternative to fs/promises)
import fetch from 'node-fetch';
import axios from 'axios';
import { PicogenAI } from 'picogenai';


// import Replicate from 'replicate';
// import { GoogleGenAI, Modality } from "@google/genai";
import FormData from 'form-data'; // <-- ADD THIS LINE

// import { OpenAI } from 'openai';
import cors from 'cors'; // Add CORS middleware

import { writeFile } from 'fs/promises';



dotenv.config();

const router = express.Router();

router.use(cors());


// const openai = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });


// const openai = new OpenAI();

// const Replicate = require("replicate");

// const replicate = new Replicate();

// const axios = require('axios');

const picogenai = new PicogenAI({
    apiKey: process.env.PICOGEN_API_KEY,
});

const apiUrl = 'https://api.picogen.io/v1/job/generate';


router.route('/').get((req, res) => {
    res.send('Replicate!');
});

router.route('/').post(async (req, res) => {
    const HF_API_KEY = process.env.HF_API_KEY;

    console.log('Bagrb')
    // console.log(openai.apiKey);
    try {

        const { prompt } = req.body;


        console.log('Abl:');
        console.log('el prompt: ', prompt);

        const width = 512;
        const height = 512;
        const guidance_scale = 7.5;
        const negative_prompt = "blurry, distorted";
        const num_inference_steps = 50;
        const scheduler = "default"; // or whatever is allowed
        const seed = Math.floor(Math.random() * 100000); // random seed for diversity


        console.log('**************************************');
        //
        const response = await fetch(
            "https://router.huggingface.co/replicate/v1/models/black-forest-labs/flux-dev/predictions",
            {
                headers: {
                    Authorization: `Bearer ${HF_API_KEY}`,
                    'Content-Type': 'application/json',
                    // 'x-use-cache': 'false',
                },
                method: 'POST',
                body: JSON.stringify(
                    {
                        input: {
                            "prompt": prompt
                        },
                    }
                ),

            }
        )

        const responseData = await response.json();


        if (!response.ok) {
            console.error('API Error:', responseData);
            return res.status(response.status).json(responseData);
        }

        console.log('Success:', responseData);

        const imageUrl = responseData.output[0]; // Assuming the API returns an array of image URLs

        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.buffer(); // Get the image as a buffer

        await writeFile('output.png', imageBuffer); // Save the image to a file

        // res.status(200).send(responseData);



        console.log('Image generated successfully!');
    } catch (error) {
        // console.log('Error: ', error);
        // res.status(500).send(error?.response.data.error.message);

        console.log('******ERROR*********');
        if (error.response) {
            console.log('Status:', error.response.status);
            console.log('Data:', JSON.stringify(error.response.data, null, 2)); // pretty print
            console.log('Headers:', error.response.headers);
        } else {
            console.log('Error Message:', error.message);
        }
        res.status(500).json({ message: error?.response?.data?.error?.message || 'Something went wrong' });
    }
})

export default router; 