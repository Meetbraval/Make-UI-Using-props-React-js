function Card(props) {

    return (

        <>
            <div className="card">
                <img src={props.imgsrc} className="card-img-top" style={{width:"100%",height:"300px"}} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.sname}</li>
                    <li className="list-group-item">{props.vname}</li>
                    <li className="list-group-item">{props.source}</li>
                </ul>
                <div className="card-body">
                    <a href={props.linka} className="card-link">link</a>
                    <a href={props.linkb} className="card-link">link</a>
                </div>
            </div>


        </>




    );
}

export default Card;
