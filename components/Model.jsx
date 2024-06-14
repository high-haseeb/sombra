import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/Diamond.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions['DiamondAction.001'].play()
    // actions['DiamondAction.001'].loop
  },[])

  let targetX;
  let targetY;
  useFrame(({ pointer }) => {
    targetY = pointer.y ;//* 0.001;
    targetX = pointer.x ;//* 0.001;

    if (group.current) {
      group.current.rotation.y += 0.05 * (targetX - group.current.rotation.y);
      group.current.rotation.x += 0.05 * (targetY - group.current.rotation.x);
    }
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh name="Sombra_LOGO_BLACK001" geometry={nodes.Sombra_LOGO_BLACK001.geometry} material={materials.Sombra_LOGO_BLACK} />
      <mesh
        name="Diamond"
        geometry={nodes.Diamond.geometry}
        material={materials["Website  Glass Material"]}
        position={[0, 0.056, -0.022]}
        scale={568.853}
      />
    </group>
  );
}

useGLTF.preload("/models/Diamond.glb");
