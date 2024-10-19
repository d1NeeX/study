import React from 'react';

const ContentItem = (props) => {
    return (
        <div>
            <div>
                <div>
                    {props.setOfLabels.map((item, index) =>
                        <div key={item.id} className="card m-3">
                            <img src={`https://picsum.photos/${200 + index}/100`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.cardTitle.slice(0, 30)}</h5>
                                <p className="card-text">{item.cardText.slice(0, 50)}</p>
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
}

export default ContentItem;