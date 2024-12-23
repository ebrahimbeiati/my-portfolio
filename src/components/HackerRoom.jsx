import { useGLTF, useTexture } from '@react-three/drei';

export function HackerRoom(props) {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb');
  const textures = {
    monitor: useTexture('textures/desk/monitor.png'),
    screen: useTexture('textures/desk/screen.png'),
  };

  const materialOverrides = {
    screens: textures.screen,
    computer_mat: textures.monitor,
    tv_mat: textures.monitor,
  };

  const meshMappings = [
    { geometry: nodes.screen_screens_0.geometry, material: materials.screens },
    { geometry: nodes.screen_glass_glass_0.geometry, material: materials.glass },
    { geometry: nodes.table_table_mat_0_1.geometry, material: materials.table_mat },
    { geometry: nodes.table_table_mat_0_2.geometry, material: materials.computer_mat, override: 'computer_mat' },
    { geometry: nodes.table_table_mat_0_3.geometry, material: materials.server_mat },
    { geometry: nodes.table_table_mat_0_4.geometry, material: materials.vhsPlayer_mat },
    { geometry: nodes.table_table_mat_0_5.geometry, material: materials.stand_mat },
    { geometry: nodes.table_table_mat_0_6.geometry, material: materials.mat_mat },
    { geometry: nodes.table_table_mat_0_7.geometry, material: materials.arm_mat },
    { geometry: nodes.table_table_mat_0_8.geometry, material: materials.tv_mat, override: 'tv_mat' },
    { geometry: nodes.table_table_mat_0_9.geometry, material: materials.cables_mat },
    { geometry: nodes.table_table_mat_0_10.geometry, material: materials.props_mat },
    { geometry: nodes.table_table_mat_0_11.geometry, material: materials.ground_mat },
    { geometry: nodes.table_table_mat_0_12.geometry, material: materials.key_mat },
  ];

  return (
    <group {...props} dispose={null}>
      {meshMappings.map(({ geometry, material, override }, index) => (
        <mesh key={index} geometry={geometry} material={material}>
          {override && <meshMatcapMaterial map={materialOverrides[override]} />}
        </mesh>
      ))}
    </group>
  );
}

useGLTF.preload('/models/hacker-room.glb');
