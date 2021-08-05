import React from "react";
import ContentListItem from "../ContentListItem";
import Button from "../Button";
import "./index.css";

const ContentList = ({content, onMore}) => {
    const ContentContainer = content.length === 0 ? null : <ContentListItem content={content}/>;
    return (
        <>
            <div className="Content"> {ContentContainer}
            <Button className="Button_more" onClick={onMore}>Load more</Button>
            </div>
        </>
    );
}

export default ContentList;
