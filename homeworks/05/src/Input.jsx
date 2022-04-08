import React from "react";

export default function Input() {

    // your task here is to create an input form in which a user will input at least 4 fields: x, y, r and color
    // https://www.w3schools.com/react/react_forms.asp
    // be careful, first three are numbers and the third one is either a dropdown or a color picker

    // return 3 elements:
    // 1st: a button which will add another form on click, meaning a user can add more than one circle
    // 2nd: forms with submit buttons
    // 3rd: svg which will consist of circle elements whose data a user has submitted
    return (
        <div>
            <button>Add another circle</button>
            {/* your forms go here */}
            <svg viewBox="0 0 600 600" style={{maxWidth: 'min(600px, 80vw)', maxHeight: 'min(600px, 80vh)'}}>
                {/* circle elements with x, y coordinate center, r radius and color color */}
                {/* if you want to be fancy, play with fills, outlines, whatever you find fitting */}
            </svg>
        </div>
    )
}