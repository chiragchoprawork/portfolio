
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";

export const SkillComponent = ({ skillImage, skillName }) => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Scene and Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10);
    camera.position.z = 2;

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.02;
    // Geometry and Base Material
    const sphereGeometry = new THREE.SphereGeometry(0.75,16,16);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3, // Adds a matte effect
      metalness: 0.1,
      flatShading:true,
  
    });
    const sphere = new THREE.Mesh(sphereGeometry, baseMaterial);
    scene.add(sphere);

    // Decal for Image
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      skillImage,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;

        const decalMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          depthTest: false,
        });

        const decalPosition = new THREE.Vector3(0, 0, 0.75); // Center of the sphere
        const decalOrientation = new THREE.Euler(0, 0, 0); // No rotation
        const decalScale = new THREE.Vector3(0.5, 0.5, 0.5); // Size of the decal

        const decalGeometry = new DecalGeometry(
          sphere,
          decalPosition,
          decalOrientation,
          decalScale
        );

        const decal = new THREE.Mesh(decalGeometry, decalMaterial);
        scene.add(decal);
      },
      undefined,
      (error) => {
        console.error("Error loading texture:", error);
      }
    );

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Soft ambient light
    scene.add(ambientLight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(2, 2, 2);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1); 
    scene.add(hemiLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01; // Rotate the sphere
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, [skillImage]);

  return (
    <div className="skill-container" ref={containerRef}>
      {skillName && <div className="skill-label">{skillName}</div>}
    </div>
  );
};

