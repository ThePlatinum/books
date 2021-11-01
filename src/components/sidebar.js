import React from "react"
import { Badge, Button, Input, InputGroup } from "reactstrap"

export default class SideBar extends React.Component{

  state = {
    categories : []
  }

  componentDidMount(){
    const sources = 'http://localhost:5000/categories'
    fetch(sources)
    .then(responce => responce.json())
    .then(data => {
      this.setState({categories : data})
    })
  }

  categoriesClicked=(which)=>{
    this.props.categoriesSelect(which)
  }

  render(){
    return(
      <div className='sidebar'>
        <div className='set'>
          <h5>Search</h5>
          <div className='tabed'>
            <InputGroup>
              <Input />
              <Button>
                Go
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className='set'>
          <h5>Categories</h5>
          <div className='tabed'>
            {this.state.categories.map((item,i)=>{
              return(
                <p key={i} onClick={ ()=>this.categoriesClicked(item._id) }> {item._id} <Badge className='counts' color='danger'> {item.count} </Badge></p>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}