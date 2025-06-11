import React, { useEffect, useState } from "react";
import Axios from 'axios';

function GET() {
    const [data, setData] = useState([]);
    const [id, setId] = useState(1);
    const [currentid, setCurrentid] = useState(1);

    function showData() {
        setCurrentid(id)
    }
    useEffect(() => {
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res=>{
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [currentid])
    return(
        <div>
            รหัส id : <input type="number" value={id} onChange={e => setId(e.target.value)} /> <br />
            <button type="button" onClick={showData}>อ่านข้อมูล</button>
            <table border='1'>
                <tr>
                    <th>รหัส</th>
                    <th>ชื่อ</th>
                    <th>รายละเอียด</th>
                </tr>

                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.body}</td>
                </tr>

            </table>
        </div>
    )
}
export default GET;
