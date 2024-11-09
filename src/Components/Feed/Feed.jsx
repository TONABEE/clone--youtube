import React from "react";
import "./Feed.css";
import { Link } from 'react-router-dom'
import { API_KEY, value_converter } from "../../data";
import moment from 'moment';


const Feed = ({category}) => {

    const [data, setData] = React.useState([])
    const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }

    React.useEffect(()=>{
        fetchData();
    },[category])


  return (
    <div className="feed">
            {data.map((item,index)=>{
                return(
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                <img src={item.snippet.thumbnails.medium.url} alt="" />
                <h2>{item.snippet.title}</h2>
                <h3>{item.snippet.channelTitle}</h3>
                <p>{value_converter(item.statistics.viewCount)} views &bull;{moment(item.snippet.publishedAt).fromNow()} </p>
                {/* <p>{item.statistics.viewCount} views &bull;{item.snippet.publishedAt} </p> */}
             </Link>
                )
            })}
            
            
    </div>
  )
}

export default Feed;









// import React from "react";
// import "./Feed.css";
// import thumbnail1 from '../../assets/thumbnail1.png';
// import thumbnail2 from '../../assets/thumbnail2.png';
// import thumbnail3 from '../../assets/thumbnail3.png';
// import thumbnail4 from '../../assets/thumbnail4.png';
// import thumbnail5 from '../../assets/thumbnail5.png';
// import thumbnail6 from '../../assets/thumbnail6.png';
// import thumbnail7 from '../../assets/thumbnail7.png';
// import thumbnail8 from '../../assets/thumbnail8.png';
// import { Link } from 'react-router-dom'

// const Feed = () => {
//   return (
//     <div className="feed">
//             <Link to={`video/20/4521`} className="card">
//                 <img src={thumbnail1} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//              </Link>

//             <div className="card">
//                 <img src={thumbnail2} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail3} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>
            
//             <div className="card">
//                 <img src={thumbnail4} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail5} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail6} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>   
//             </div>

//             <div className="card">
//                 <img src={thumbnail7} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail8} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail1} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail2} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail3} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>
            
//             <div className="card">
//                 <img src={thumbnail4} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail5} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail6} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>   
//             </div>

//             <div className="card">
//                 <img src={thumbnail7} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>

//             <div className="card">
//                 <img src={thumbnail8} alt="" />
//                 <h3>How to make a website using HTML and CSS</h3>
//                 <h3>Code with Simon</h3>
//                 <p>15k views &bull; 2days ago</p>
//             </div>
            
//     </div>
//   )
// }

// export default Feed;