import { useState } from "react";
import { ListGroup, ListGroupItem, Col } from "reactstrap";
import Product from "./Product";

export default function Categories() {
    const [categories, setCategories] = useState([

      {categoryColor:"pink", categorySize:[1,1,1],},
      {categoryColor:"blue", categorySize:[2,2,2]},
      {categoryColor:"yellow", categorySize:[3,3,3]}



    ]);
    const [productColor, setProductColor] = useState([""]);
    const [productAttach, setProductAttach] = useState([""]);
    const [productArgs, setProductArgs] = useState([""]);


    function setColor(category) {
        setProductColor(category.categoryColor)
     

    }
    function setArgs(category) {
        setProductArgs(category.categorySize)

    }

    return (
        <>
          
            <Col xs="4">
                <ListGroup>
                    {
                        categories.map((category) => (
                            <ListGroupItem onClick={() =>setArgs(category)-setColor(category)} key={category.categorySize}>{category.categoryColor}</ListGroupItem>
                            
                            ))
                            
                    }
                </ListGroup>
                
            </Col>
            <Col xs="8"><Product boxColor={productColor} args={productArgs} /></Col>


        </>
    )
}
