import type {FC} from "react";
import './Star.css'

type StarsPropsType = {
    rating:number
}
const StarsRatingComponent:FC<StarsPropsType> = ({rating}) => {

    const stars = Math.max(0,Math.round(rating / 2))
    return (
        <div className='stars'>
            {[1,2,3,4,5].map((star) =>(
                <span key={star} className={star <= stars ? 'active' : 'inactive'}>&#9733;</span>
            ))}

        </div>
    );
};

export default StarsRatingComponent;