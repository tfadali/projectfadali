import React from "react"
import { Link } from "react-router-dom"
import './Problems.css'
import { gql, useQuery } from '@apollo/client'

export const GET_PROBLEMS = gql`
    query {
        problems {
            id
            title
            text
        }
    }
`

export const ProblemsPage = () => {
    const { loading, error, data } = useQuery(GET_PROBLEMS)

    if (loading) return <div>Loading...</div>
    if (error) return <div>`Error! ${error.message}`</div>

    console.log(data.problems)
    data.problems.forEach(console.log)

    return (
        <div>
            <div className="problems">
                <div className="problem-header">
                    <div className="cell">id</div>
                    <div className="cell">Title/Description</div>
                    <div className="cell">Difficulty</div>
                </div>
                {data.problems.map((p: any) =>
                    <div key={p.id} className="problem">
                        <div className="cell">{p.id}</div>
                        <div className="cell"><Link to={`/problems/${p.id}`}>{p.title}</Link></div>
                        <div className="cell">{p.difficulty}</div>
                    </div>
                )}
            </div>
        </div>
    )
}