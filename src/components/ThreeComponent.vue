<script setup>
import {TresCanvas, useRenderLoop} from '@tresjs/core';
import {SRGBColorSpace} from "three";
import {MeshGlassMaterial, OrbitControls} from "@tresjs/cientos";
import {shallowRef} from "vue";
const { onLoop } = useRenderLoop()

const boxRef= shallowRef(null)
const kugel= shallowRef(null)
let kugelfaktor=0.2;

onLoop(({ delta, elapsed }) => {
  if (boxRef.value) {
    boxRef.value.rotation.y += delta;
    boxRef.value.rotation.z = elapsed * 0.2;
    if(kugel.value.position.y>2) kugelfaktor=-0.4;
    else if(kugel.value.position.y<0) kugelfaktor=0.4;
    kugel.value.position.y+=kugelfaktor*delta;
  }
});
</script>

<template>
  <div class="scene">
    <TresCanvas style="margin-top: 100px;" shadows :output-encoding="SRGBColorSpace" window-size>
      <TresAmbientLight :intensity="1" />
      <TresDirectionalLight
          cast-shadow
          :position="[0, 2, 0]"
          :intensity="1"
      />
      <TresPerspectiveCamera :position="[0, -1.5, 30]" />
      <TresMesh
          cast-shadow
          :position="[2, -2, 0]"
          ref="kugel"
      >

        <TresSphereGeometry />
        <MeshGlassMaterial color="#ff0000" />
      </TresMesh>
      <TresMesh ref="boxRef"
                cast-shadow
                :position="[0, 0, 0]"
      >

        <TresBoxGeometry />
        <MeshNormalMaterial color="#00ff00" />
      </TresMesh>
      <TresMesh
          receive-shadow
          :position="[0, -3, 0]"
          :rotation="[-Math.PI / 2, 0, 0]"
      >
        <TresPlaneGeometry :args="[10, 10, 10, 10]" />
        <TresMeshStandardMaterial color="#f7f7f7" />
      </TresMesh>
      <OrbitControls/>
    </TresCanvas>
  </div>
</template>

<style scoped>

</style>