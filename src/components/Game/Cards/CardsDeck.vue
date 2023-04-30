<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import SingleCard from "./SingleCard.vue";
import { ref } from "vue";

const leftDeck = ref(null);
useSwipe(leftDeck, {
  passive: true,
  onSwipe(e: TouchEvent) {
    toggleLeftDeck(e);
  },
});
const rightDeck = ref(null);
useSwipe(rightDeck, {
  passive: false,
  onSwipe(e: any) {
    toggleRightDeck(e);
  },
});
function toggleRightDeck(e: any) {
  const cardDecks = document.querySelectorAll(".deck");
  e.currentTarget.classList.toggle("unrollRight");
  cardDecks[0].classList.remove("unrollLeft");
}
function toggleLeftDeck(e: any) {
  const cardDecks = document.querySelectorAll(".deck");
  e.currentTarget.classList.toggle("unrollLeft");
  cardDecks[1].classList.remove("unrollRight");
}
</script>

<template>
  <div class="deck leftDeck" data-deck="0" ref="leftDeck">
    <SingleCard />
    <SingleCard />
    <SingleCard />
  </div>
  <div class="deck rightDeck" data-deck="1" ref="rightDeck">
    <SingleCard />
    <SingleCard />
    <SingleCard />
  </div>
</template>

<style scoped lang="scss">
.deck {
  position: absolute;
  display: flex;
  top: 0;
  width: 23vw;
}
.leftDeck {
  left: 0;
  :first-child {
    left: 10px;
  }
  :nth-child(2) {
    left: 30px;
  }
  :nth-child(3) {
    left: 60px;
  }
}
.rightDeck {
  z-index: 10;

  right: 0;
  :first-child {
    right: 10px;
  }
  :nth-child(2) {
    right: 30px;
  }
  :nth-child(3) {
    right: 60px;
  }
}

.unrollLeft {
  z-index: 11;
  :first-child {
    left: 10px;
  }
  :nth-child(2) {
    left: 100%;
  }
  :nth-child(3) {
    left: calc(200% - 10px);
  }
}
.unrollRight {
  :first-child {
    right: 10px;
  }
  :nth-child(2) {
    right: 100%;
  }
  :nth-child(3) {
    right: calc(200% - 10px);
  }
}
</style>
