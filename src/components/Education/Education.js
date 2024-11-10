import React from 'react'
import { education } from '../../portfolio'
import './Education.css'

const Education = () => {
    if (!education.academic.length && !education.courses.length) return null

    return (
    <section className='section education' id='education'>
        <h2 className='section__title'>{education.title}</h2>
        <p className='section__desc'>{education.description}</p>

        <div className='education__section'>
        <h3 className='h3__edu'>Academic Background</h3>
        <ul className='education__list'>
            {education.academic.map((item) => (
            <li key={item.id} className='education__item'>
                <h4>{item.degree} - {item.institution}</h4>
                <span>{item.duration}</span>
                <p>{item.details}</p>
            </li>
            ))}
        </ul>
        </div>

        <div className='education__section'>
        <h3 className='h3__edu'>Courses</h3>
        <ul className='education__list'>
            {education.courses.map((course) => (
            <li key={course.id} className='education__item'>
                <h4>{course.title} - {course.provider}</h4>
                <span>{course.duration}</span>
                <p>{course.details}</p>
            </li>
            ))}
        </ul>
        </div>
    </section>
    )
}

export default Education
