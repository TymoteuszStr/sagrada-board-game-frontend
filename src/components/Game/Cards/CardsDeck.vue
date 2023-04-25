<script setup lang="ts">
import SingleCard from "./SingleCard.vue";

function toggleCards(e: any) {
  const cardDecks = document.querySelectorAll(".deck");
  const isRightDeck = !!Number(e.currentTarget.dataset.deck);
  if (isRightDeck) e.currentTarget.classList.toggle("unrollRight");
  else e.currentTarget.classList.toggle("unrollLeft");

  if (isRightDeck) cardDecks[0].classList.remove("unrollLeft");
  else cardDecks[1].classList.remove("unrollRight");
}
</script>

<template>
  <div class="deck leftDeck" @click="toggleCards" data-deck="0">
    <SingleCard />
    <SingleCard />
    <SingleCard />
  </div>
  <div class="deck rightDeck" @click="toggleCards" data-deck="1">
    <SingleCard />
    <SingleCard />
    <SingleCard />
  </div>
</template>

<style scoped lang="scss">
.deck {
  position: absolute;
  display: flex;
  top: 450px;
  width: 100px;
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
  :first-child {
    left: 10px;
  }
  :nth-child(2) {
    left: 100px;
  }
  :nth-child(3) {
    left: 190px;
  }
}
.unrollRight {
  :first-child {
    right: 10px;
  }
  :nth-child(2) {
    right: 100px;
  }
  :nth-child(3) {
    right: 190px;
  }
}
</style>
