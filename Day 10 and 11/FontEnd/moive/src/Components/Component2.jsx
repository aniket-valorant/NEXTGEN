import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Component2 = () => {
    const [news, setnews] = useState([]);
    useEffect(() => {
      axios
        .get("http://127.0.0.1:3000/getMoiveData")
        .then((res) => {
          // handle success
          console.log(res.data);
          setnews(res.data);
          //  console.log(res);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }, []);
  return (
    <>
              <div className="my-5">
          <div className="flex justify-evenly items-center flex-wrap">
            {news.map((val) => {
              return (
                <div className="col my-3">
                  <div className="card bg-white rounded-md m-3 " style={{ width: "18rem" }}>
                   
                    <div className="card-body">
                      <h5 className="card-title ">{val.movieName}</h5>
                      <p className="card-text">{val.hero}</p>
                      <p className="card-text">{val.heroine}</p>
                      <p className="card-text">{val.rating}</p>
                      <p className="card-text">{val.year}</p>
                      <p className="card-text">{val.genre}</p>
                      <a
                        href={val.rating}
                        target="_blank"
                        className="btn btn-primary"
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </>
   
  )
}
export default Component2