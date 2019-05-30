import React from 'react';
import { DragSource } from 'react-dnd';
import './source.css';

const components = [
    {id:1 ,text:'input'},
    {id:2 ,text:'checkbox'},
    {id:3 ,text:'select'},
    {id:4 ,text:'button'},
    {id:5 ,text:'button'},
    {id:6 ,text:'button'},
    {id:7 ,text:'button'},
    {id:8 ,text:'button'},
    {id:9 ,text:'button'},
]
// const components = [
//     'input',
//     'checkbox',
//     'select',
//     'button'
// ]
class Source extends React.Component{
    render(){
        return(
            <div className="source">
            <ul>
            {
                components.map((component)=>{
                    return <ListItem id={component.id} key={component.id} component={component.text}/>
                })
            }
            </ul>
            </div>
        )
    }
}

const spec = {
    beginDrag(props, monitor, component) {
        // { component: 'input' }
        const item = { ...props};
        return item;
    }
};

const collect = (connect, monitor)=>{
  return {
    connectDragSource: connect.dragSource()
  };
}


const ListItem = DragSource("form-elements",spec,collect)(props=>{
    
    const { connectDragSource, component } = props;
    return connectDragSource(<li>{component}</li>)
});


export default Source