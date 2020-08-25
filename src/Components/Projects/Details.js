import React from 'react'

const Details = (props) => {
    const id = props.match.params.id; 
    return (
        <div className="container section details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id} </span>
                    <p>Tootsie roll sweet carrot cake macaroon. Marzipan cotton candy gingerbread brownie wafer jelly beans cake. Macaroon candy canes marshmallow muffin. Biscuit cheesecake oat cake caramels. Donut croissant lemon drops donut pastry. Fruitcake caramels cotton candy cotton candy candy biscuit. Pie carrot cake donut soufflé soufflé gingerbread cupcake soufflé candy canes. Candy toffee macaroon apple pie candy carrot cake sugar plum fruitcake. Tootsie roll danish tootsie roll powder muffin gingerbread dragée. Cake pudding biscuit marshmallow lemon drops. Jelly beans cake tootsie roll tiramisu donut candy canes. Croissant chupa chups chupa chups liquorice gummi bears.
                    </p>
                    <div className="card-action">
                        <div>Posted by UNKNOWN</div>
                        <div>DATED</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Details
