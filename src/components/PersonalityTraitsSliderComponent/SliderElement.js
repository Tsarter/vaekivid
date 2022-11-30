import "./SliderElement.css";
import {useEffect, useId} from "react";

export default function SliderElement({val, color, max, min}) {
    const compId = useId();

    useEffect(() => {
        const comp = document.getElementById(compId);
        comp.background = color
    })

    if (val >= 0) {
        return (
            <div className="SliderElement">
                <div id={compId} className="Painted" style={{
                    width: `${val * max + 50}%`,
                    background: color}}
                />
            </div>
        );
    }
    if (val < 0) {
        return (
            <div className="SliderElement">
                <div id={compId} className="Painted" style={{
                    width: `${val * min + 50 ? val * min + 50 : 2}%`,
                    background: color}}
                />
            </div>
        );
    }


}