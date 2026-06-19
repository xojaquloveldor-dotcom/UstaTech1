import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroScene = () => {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(10, 10, 10);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Isometric House Group
    const houseGroup = new THREE.Group();

    // Main House Body
    const houseGeo = new THREE.BoxGeometry(4, 3, 4);
    const houseMat = new THREE.MeshPhongMaterial({ color: 0x0052cc });
    const houseBody = new THREE.Mesh(houseGeo, houseMat);
    houseGroup.add(houseBody);

    // Roof
    const roofGeo = new THREE.ConeGeometry(3.5, 2, 4);
    const roofMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 2.5;
    roof.rotation.y = Math.PI / 4;
    houseGroup.add(roof);

    // Floating Particles
    const particlesCount = 20;
    const particlesGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const particlesMat = new THREE.MeshBasicMaterial({ color: 0xffa500 });

    const particles = [];
    for (let i = 0; i < particlesCount; i++) {
      const p = new THREE.Mesh(particlesGeo, particlesMat);
      p.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      p.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );
      scene.add(p);
      particles.push(p);
    }

    scene.add(houseGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      houseGroup.rotation.y += (mouseX * 0.5 - houseGroup.rotation.y) * 0.05;
      houseGroup.rotation.x += (mouseY * 0.5 - houseGroup.rotation.x) * 0.05;
      houseGroup.position.y = Math.sin(Date.now() * 0.001) * 0.2;

      particles.forEach(p => {
        p.position.add(p.userData.velocity);
        if (p.position.length() > 8) p.position.set(0, 0, 0);
      });

      renderer.render(scene, camera);
    };

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
};

export default HeroScene;
