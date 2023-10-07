import React from "react";
import StarRatings from "react-star-ratings";

const Stars = () => {
    return (
        <div>
            <StarRatings
                rating={5}
                starRatedColor="#ffd700"
                numberOfStars={5}
                starDimension="35px"
                starSpacing=""
            />
        </div>
    )
}

export default Stars;