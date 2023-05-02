<script setup lang="ts">
import { ColorEnum as CE } from "@/models/enums/colorEnum";
import BoardTemplate from "@/components/Game/Board/BoardTemplate.vue";
export interface IProps {
  userName: string;
  colorNr: number;
  positionNr: number;
  isMainUser?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  isMainUser: false,
});

enum FTE {
  empty,
  color,
  score,
}
const testPattern = [
  { id: 0, type: FTE.empty, dice: undefined },
  { id: 1, type: FTE.empty, dice: undefined },
  { id: 2, type: FTE.empty, dice: undefined },
  { id: 3, type: FTE.color, color: CE.red, dice: undefined },
  { id: 4, type: FTE.score, score: 5, dice: undefined },
  { id: 5, type: FTE.empty, dice: undefined },
  { id: 6, type: FTE.empty, dice: undefined },
  { id: 7, type: FTE.color, color: CE.purple, dice: undefined },
  { id: 8, type: FTE.score, score: 4, dice: undefined },
  { id: 9, type: FTE.color, color: CE.blue, dice: undefined },
  { id: 10, type: FTE.empty, dice: undefined },
  { id: 11, type: FTE.color, color: CE.blue, dice: undefined },
  { id: 12, type: FTE.score, score: 3, dice: undefined },
  { id: 13, type: FTE.color, color: CE.yellow, dice: undefined },
  { id: 14, type: FTE.score, score: 6, dice: undefined },
  { id: 15, type: FTE.color, color: CE.yellow, dice: undefined },
  { id: 16, type: FTE.score, score: 2, dice: undefined },
  { id: 17, type: FTE.color, color: CE.green, dice: undefined },
  { id: 18, type: FTE.score, score: 1, dice: undefined },
  { id: 19, type: FTE.color, color: CE.red, dice: undefined },
];

function hidePanel(e: any) {
  const boardPosition = Number(e.currentTarget.parentNode.dataset.position);
  let className = getTransitionClassName(boardPosition);
  if (className) e.currentTarget.parentNode.classList.toggle(className);
}

function getTransitionClassName(boardPosition: number) {
  let className = "";
  switch (boardPosition) {
    case 1:
      className = "hideToLeft";
      break;
    case 2:
      className = "hideToTop";
      break;
    case 3:
      className = "hideToRight";
      break;
    default:
      break;
  }
  return className;
}
</script>
<template>
  <div class="wrapper" :data-position="props.positionNr">
    <BoardTemplate
      class="boardTemplate"
      :pattern="testPattern"
      :isMainUser="props.isMainUser"
    />
    <div
      class="panel"
      :data-color="props.colorNr"
      @click="hidePanel"
      :data-position="props.positionNr"
    >
      <p class="userName">{{ props.userName }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  width: max-content;
  position: absolute;
  transition: transform 0.3s ease-out;
  .boardTemplate {
    transition: all 0.3s ease-out;
    margin-bottom: 10px;
  }
  &[data-position="1"] {
    left: 4px;
  }
  &[data-position="2"] {
    top: 5px;
  }
  &[data-position="3"] {
    right: 4px;
  }
  &[data-position="0"] {
    bottom: 2px;
  }
}
.panel {
  height: 35px;
  padding: 0 45px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: transform 0.3s ease-out;
  border-radius: 4px;
  cursor: pointer;
  p {
    font-size: 20px;
  }

  &[data-position="1"] {
    transform-origin: 10%;
  }
  &[data-position="3"] {
    transform-origin: 90%;
  }

  &[data-color="0"] {
    background: $board-color-0;
  }
  &[data-color="1"] {
    background: $board-color-1;
  }
  &[data-color="2"] {
    background: $board-color-2;
  }
  &[data-color="3"] {
    background: $board-color-3;
  }
}

.hideToTop {
  transform: translateY(calc(-100% + 45px)) !important;
  .boardTemplate {
    opacity: 0;
  }
}

.hideToLeft {
  .boardTemplate {
    transform: translateX(-100%);
    opacity: 0;
  }
  .panel {
    transform: rotate(-90deg);
  }
}
.hideToRight {
  .boardTemplate {
    transform: translateX(100%);
    opacity: 0;
  }
  .panel {
    transform: rotate(90deg);
  }
}

@media screen and (min-width: $min-desktop-width) {
  .panel {
    height: 50px;

    p {
      font-size: 35px;
    }
  }
}
</style>
