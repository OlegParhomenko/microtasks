import React from 'react';

type NewComponentType = {
    students: StudentType[];
}

type StudentType = {
    id: number,
    name: string,
    age: number,
}


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

type CarComponentType = {
    topCars: topCarsProps[]
}

type topCarsProps = {
    manufacturer: string
    model: string
}

export const NewComponent = (props: CarComponentType) => {

    return (
        <table>
            {props.topCars.map((Car, index) => (
                <tr key={index}>
                    <th>{Car.manufacturer}</th>
                    <th>{Car.model}</th>
                </tr>
            ))}
        </table>)
}

