import React, { Component } from 'react';
import Navi from './Navi';
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col }  from "reactstrap"


export default class App extends Component {

  state={currentCategory :""}

  changeCategory = category =>{
    this.setState({currentCategory: category.categoryName});
};  
  render(){
      let productInfo = {title: "ProductList"};
       let categoryInfo= {title: "CategorList"};
    return (
      <div> 
        <Container> 
          <Row>
            
            <Navi/>
          </Row>
          <Row>
            <Col xs="3">
            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
            <ProductList info={categoryInfo}/>
            </Col>
          </Row>
        </Container>
        
        </div>
    );
  }
}

