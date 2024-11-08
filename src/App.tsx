import React, {useState} from 'react';
import {Button} from "./components/Button";

// import {NewComponent, topCars} from "./NewComponent";

function App() {
//    const myFristSubscriber = (event: React.MouseEvent<HTMLButtonElement>) =>{
//        console.log("hello! I am Vasya")
//    }
//
//    const mySecondSubcriber = (event: React.MouseEvent<HTMLButtonElement>) => {
//        console.log('hello! I am Ivan')
//    }

const onClickHandler= (name: string) => {
    console.log(name)
}

const Button1Foo = (subscriber: string, age: number) =>{
    console.log(subscriber, age)
}

    const Button2Foo = (subscriber: string) =>{
        console.log(subscriber)
    }

    const Button3Foo = () =>{
        console.log("TROLOLOL")
    }

    return (
        <div>
            {/*<button onClick={(event) => {console.log("hello!")}}>MyYoutubeChannelButton1</button>*/}
            <Button title={'MyYoutubeChannelButton-1'} callback={() => Button1Foo ('HERO', 21)}/>
            <Button title={'MyYoutubeChannelButton-2'} callback={() => Button2Foo ("U NOT HERO")}/>
            <Button title={'Stupid BUTTON'} callback={() => Button3Foo()}/>
            {/*<button>MyYoutubeChannelButton-1</button>*/}
            {/*<button onClick={(event: React.MouseEvent<HTMLButtonElement>) => onClickHandler ('Ivan')}>MyYoutubeChannelButton-2</button>*/}

        </div>
        // <NewComponent topCars={topCars}/>

    );
}

export default App;


// export const NewComponent = (props: NewComponentType) => {
//
//     return (
//         <ul>
//             {props.students.map((objectFromStudentArray, index) => {
//
//                 return (
//                     <li key={objectFromStudentArray.id}>
//                         <span>{objectFromStudentArray.name}</span>
//                         <span> age :{objectFromStudentArray.age}</span>
//                     </li>
//                 )
//             })}
//         </ul>
//     )
// }