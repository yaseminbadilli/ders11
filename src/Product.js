import React from "react";
import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import { ListGroup, ListGroupItem } from "reactstrap";


export default function Product(props) {


    
    return (
        <>
            <ListGroup>
                <ListGroupItem>tekli kovalar
                   <Canvas>
                    <OrbitControls/>
                    <mesh position={[2, 2, 3]}>
                        <boxGeometry attach="geometry" args={[1, 1, 1]} />
                        <meshBasicMaterial attach="material" color="hotpink" />
                    </mesh>
                    <mesh position={[0, 0, 0]}>
                        <boxGeometry attach="geometry" args={[1, 1, 1]}/>
                        <meshBasicMaterial attach="material" color="blue" />
                    </mesh>
                    <mesh position={[-2, -2, -3]}>
                        <boxGeometry attach="geometry" args={[1, 1, 1]}/>
                        <meshBasicMaterial attach="material" color={props.boxColor} />
                    </mesh>
                    
                   </Canvas>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}
