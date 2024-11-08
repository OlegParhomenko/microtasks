import React from 'react';

type ButtonProps = {
    title: string;
    callback: () => void;
}

export const Button = (props: ButtonProps) => {
    const onClickHandler = () => {
        props.callback();
    }
    return (
        <div>
            <button onClick={onClickHandler}>{props.title}</button>
        </div>
    );
};

