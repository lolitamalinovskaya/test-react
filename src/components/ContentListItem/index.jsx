import React from "react";

const ContentListItem = ({content}) => {
    return content.map((item) =>
        <>
            <figure>
                <img src={item.image} className="images" alt="Image"/>
            </figure>
            <figcaption>
            {item.name}
            </figcaption>
            <figcaption>
            {item.status}
            </figcaption>
            <figcaption>
            {item.species}
            {item.type}
            </figcaption>
        </>
    );
};

export default ContentListItem;
