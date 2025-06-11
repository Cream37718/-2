import React, {Component} from "react";

export default class Calender extends Component {
    getDate() {
        const dayNames = ['วันอาทิตย์','วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์']
        const monthName = ['มกราคม','กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม']
        const date = new Date()
        const weekDay = dayNames[date.getDay()]
        const day = date.getDate()
        const month = monthName[date.getMonth()]
        const year = date.getFullYear() + 543

        return `วัน ${weekDay} ที่ ${day} ${month} ${year}`
    }
    render() {
        return <div>{this.getDate()}</div>
    }
}