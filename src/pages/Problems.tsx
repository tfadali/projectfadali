import React from "react"
import { Link } from "react-router-dom"
import { problems } from "../models/problems"
import './Problems.css'

export const ProblemsPage = () => {
    return (
        <div>
            <div className="problems">
                <div className="problem-header">
                    <div className="cell">id</div>
                    <div className="cell">Title/Description</div>
                    <div className="cell">Difficulty</div>
                </div>
                {problems.map(p =>
                    <div className="problem">
                        <div className="cell">{p.id}</div>
                        <div className="cell"><Link to={`/problems/${p.id}`}>{p.title}</Link></div>
                        <div className="cell">{p.difficulty}</div>
                    </div>
                )}
            </div>
        </div>
    )
}