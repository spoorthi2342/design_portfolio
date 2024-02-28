"use client"

import css from "./styles/Home.module.css";
import { Canvas } from "@react-three/fiber";
import Floor from "./components/Floor";
import LightBulb from "./components/LightBulb";
import Box from "./components/Box";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Draggable from "./components/Draggable";
import {Suspense} from "react";
export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.2} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
        <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
        </Suspense>
        </Draggable>
        <OrbitControls />
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
