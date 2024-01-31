import styles from '../../styles/Home.module.css'

import React from 'react'

import { gql, GraphQLClient } from 'graphql-request';
//import { useSpeechSynthesis } from 'react-speech-kit';

export default async function Quiz() {
    
    const hygraph = new GraphQLClient(process.env.GRAPHQL_API_URL)

    const { wordLists } = await hygraph.request(`
    {
        wordLists {
            id
            slug
            userName
            words
          }
    }`)
    
    return (
        <>
        <h1>Quiz Page</h1>
        {wordLists.map((wordList) => {
            return (
                <div key={wordList.id}>
                    <h2>{wordList.userName}</h2>
                    <p>{wordList.words}</p>
                </div>
            )
        })}
        </>
    )
}