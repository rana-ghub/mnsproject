
import React, { useState, useEffect, FC } from 'react';
import axios from 'axios';
import '../assets/scss/Parent.scss';
import Arrow from '../assets/svg/arrow.svg';

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

  const rotateSvg = () => {
    if (!isLoaded) {
      let img = document.getElementById(`${items?.id}`) as HTMLElement;
      img.style.transform = 'rotate(270deg)';
    }
    else {
      let img = document.getElementById(`${items?.id}`) as HTMLElement;
      img.style.transform = 'rotate(90deg)';
    }
  }

  return (
    <div data-testid="p-1">
      <div className="container" data-testid="p-2" onClick={() => { setIsLoaded(!isLoaded); }}>
        <div className="heading" onClick={() => { rotateSvg(); }}>
          <img src={Arrow} key={items?.id} id={items?.id.toString()} alt="arrow" />{items?.name}
        </div>
        {
          <div className="wrapper">
            {isLoaded ?
              <ul data-testid="p-3">
                <table className="table">
                  <thead className="row">
                    <tr>
                      <td><span><b>Delivery</b></span></td>
                      <td><span><b>Cost</b></span></td>
                      <td><span><b>Details</b></span></td>
                    </tr>
                  </thead>
                  {componentData.map(data => (

                    <li key={data.id.toString()} className="main">
                      <tbody>
                        <td>{data.Delivery}</td>
                        <td><b>{data.Cost}</b></td>
                        <td>{data.Details}</td>
                      </tbody>
                    </li>
                  ))}
                </table>
              </ul> : null
            }
          </div>
        }
      </div>
    </div>
  );
}

export default Parent;