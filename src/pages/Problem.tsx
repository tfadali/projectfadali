import React from 'react'
import { useParams } from 'react-router-dom'
import { problems } from '../models/problems'

export const Problem = () => {
    const { id } = useParams<{id: string}>()
    const problem = problems[parseInt(id) - 1]
    return (
        <div>
            {problem.text}
        </div>
    )
}