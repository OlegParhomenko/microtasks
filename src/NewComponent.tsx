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
            {props.topCars.map((CarFromTopCars, index) => (
                <tr key={index}>
                    <th>{CarFromTopCars.manufacturer}</th>
                    <th>{CarFromTopCars.model}</th>
                </tr>
            ))}
        </table>)
}

// let [students, setStudents] = useState([
//         {id: 1, name: "James", age: 8},
//         {id: 2, name: "Robert", age: 18},
//         {id: 3, name: "John", age: 28},
//         {id: 4, name: "Michael", age: 38},
//         {id: 5, name: "William", age: 48},
//         {id: 6, name: "David", age: 58},
//         {id: 7, name: "Richard", age: 68},
//         {id: 8, name: "Joseph", age: 78},
//         {id: 9, name: "Thomas", age: 88},
//         {id: 10, name: "Charles", age: 98},
//         {id: 11, name: "Christopher", age: 100},
//     ]
// )

// export let topCars = [
//     {manufacturer: 'BMW', model:'m5cs'},
//     {manufacturer:'Mercedes', model:'e63s'},
//     {manufacturer:'Audi', model:'rs6'}
// ]
