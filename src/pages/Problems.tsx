import React from "react"
import './Problem.css'

const problems = [
    {
        id: 1,
        title: 'Greatest Common Divisor',
        text: 'Compute the greatest common divisor of 92 and 46.',
    },
    {
        id: 2,
        title: 'Least Common multiple',
        text: 'Compute the least common multiple of 92 and 46.',
    },
]

export const ProblemsPage = () => {
    return (
        <div>
                <div className="problems">
                    <div className="problem-header">
                        <div className="cell">id</div>
                        <div className="cell">Title/Description</div>
                        <div className="cell">difficulty</div>
                    </div>
                    {problems.map(p =>
                        <div className="problem">
                            <div className="cell">{p.id}</div>
                            <div className="cell">{p.title}</div>
                        </div>
                    )}
                </div>
        </div>
    )
}