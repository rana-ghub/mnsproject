
import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import './Parent.scss';
import Arrow from './arrow.svg';

interface IChildProps {
  items?: { id: number, value: string; name: string };
}

const Parent: FC<IChildProps> = ({ items }) => {

  const [componentData, setData] = useState<any[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      axios.get(`http://localhost:5000/${items?.value}`)
        .then((result) => {
          setData(result.data);
        })
    }
    catch (err) {
      console.log("Component Data not available");
    }
  });

  const rotateImage =()=> {
    if(!isLoaded){
      let img = document.getElementById(`${items?.id}`) as HTMLElement;
      img.style.transform = 'rotate(270deg)';
    }
    else{
      let img = document.getElementById(`${items?.id}`) as HTMLElement;
      img.style.transform = 'rotate(90deg)';
    }
  }

  return (
    <div data-testid="p-1">
      <div className="container" onClick={() => { setIsLoaded(!isLoaded); }}><div className="heading" data-testid="p-2" onClick= {() => { rotateImage(); }}><img src={Arrow} key={items?.id} id={items?.id.toString()} alt="arrow"/>{items?.name}</div>
        {
          <div className="tick">
            {isLoaded ?
              <ul data-testid="p-3">
                <span className="col1"><b>Delivery</b></span>
                <span className="col1"><b>Cost</b></span>
                <span className="col1"><b>Details</b></span>
                {componentData.map(data => ( //<Child />

                  <li key={data.id.toString()} className="main">
                    <span className="col2 col3">{data.Delivery}</span>
                    <span className="col2 col3"><b>{data.Cost}</b></span>
                    <span className="col2 col3">{data.Details}</span>
                  </li>
                ))}
              </ul> : null
            }
          </div>
        }
      </div>
    </div>
  );
}

export default Parent;