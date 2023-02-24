import React from 'react'
import { StarWarsPerson } from './StarWarsPerson';

export const StarWarsPeopleList = ({ people }) => {
    const peopleList = people.map(person => {
        return <StarWarsPerson key={person.name} person={person} />;
    });

    return (
        <div className="row">
            {peopleList}
        </div>
    );
}
