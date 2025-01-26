import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Controller = (props) => {
  const controllerRef = useRef();
  const { nodes, materials } = useGLTF("/models/red_controller_icon.glb");

  // bounce animation
  useGSAP(() => {
    gsap.to(controllerRef.current.position, {
      y: controllerRef.current.position.y + 0.25,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power4.inOut",
    });
  });

  return (
    <mesh {...props} ref={controllerRef} rotation={[180, 0, 0]} scale={0.025}>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials["default"]}
        />
      </group>
    </mesh>
  );
};

useGLTF.preload("/models/red_controller_icon.glb");

export default Controller;
