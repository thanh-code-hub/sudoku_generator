//testing test1
import React from "react";
import {render} from "react-dom";
import _ from 'lodash';

class Cell extends  React.Component{
    render(){
        return (
            <div className="cell" id={this.props.id}>{this.props.value}</div>
        )
    }
}

const colValues=[[],[],[],[],[],[],[],[],[]];
const rowValue = [1,2,3,4,5,6,7,8,9];
// const rowValue2 = [2,3,4,5,6,7,8,9,1];
// const rowValue3 = [3,4,5,6,7,8,9,1,2];
class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rowValues:[]
        };
    }
    genNo(rowId,i){
        let v;
        let check = rowId/3;
        switch(true){
            case (check <= 1):
                v = i;
                break;
            case (check <= 2):
                if(i+1>=rowValue.length){
                    v= i+1-rowValue.length;
                }
                else{
                    v=i+1;
                }
                break;
            case (check <= 3):
                if(i+2>=rowValue.length){
                    v=i+2-rowValue.length;
                }
                else{
                    v=i+2;
                }
                break;
            // default:
            //     v=rowValue[i];
        }

        let check2 = rowId%3;
        switch (true) {
            case (check2==2):
                v<3 ? v+=6 : v-=3;
                break;
            case (check2==0):
                v<3 ? v=v+3 : v-=3;
                break;
            // default:
            //     v=v;
            //     break;



        }
        console.log(v);
        return rowValue[v];
    }
    genCell(rowId){
        return(
            _.map([...Array(9)],(x,i)=>
                <Cell id={rowId+""+[i+1]} value={this.genNo(rowId,i)} key={i}/>
            )
        )
    }
    render(){
        return(
            <div className="row" id={this.props.id}>
                {
                    this.genCell(this.props.id)
                }
            </div>
        )
    }
}
class Box extends React.Component{
    render(){
        return(
            <div className="box">
                {_.map([...Array(9)],(x,i)=>
                    <Row key={i} id={i+1}/>
                )}
            </div>
        )
    }
}

render(<Box/>, document.getElementById('app'));
