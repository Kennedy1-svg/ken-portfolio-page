<script setup>
const props = defineProps({
  name: {
    type: String
  }
})
</script>

<template>
  <div>
    <svg
      v-if="name == 'kennedy-icon'"
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="m13.666 1.429l6.75 3.98l.096.063l.093.078l.106.074a3.22 3.22 0 0 1 1.284 2.39l.005.204v7.284c0 1.175-.643 2.256-1.623 2.793l-6.804 4.302c-.98.538-2.166.538-3.2-.032l-6.695-4.237A3.23 3.23 0 0 1 2 15.502V8.217c0-1.106.57-2.128 1.476-2.705l6.95-4.098c1-.552 2.214-.552 3.24.015m.864 5.723a1 1 0 0 0-1.378.318L11 10.912V8a1 1 0 0 0-.883-.993L10 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0v-2.914l2.152 3.444a1 1 0 0 0 1.276.374l.102-.056l.095-.068a1 1 0 0 0 .223-1.31L12.678 12l2.17-3.47a1 1 0 0 0-.318-1.378"
      />
    </svg>
    <svg
      v-else-if="name == 'github'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
      />
    </svg>
    <svg
      v-else-if="name == 'email'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
      />
    </svg>
    <svg
      v-else-if="name == 'linkedin'"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      >
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"
        />
        <circle cx="4" cy="4" r="2" />
      </g>
    </svg>
    <svg
      v-else-if="name == 'seperator'"
      width="170"
      height="12"
      viewBox="0 0 170 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="170" height="12" fill="url(#pattern0_1_878)" />
      <defs>
        <pattern id="pattern0_1_878" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_1_878" transform="scale(0.00588235 0.0833333)" />
        </pattern>
        <image
          id="image0_1_878"
          width="170"
          height="12"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAAMCAYAAADyMyZxAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERGOUZCMTkxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERGOUZCMTgxNUEzMTFFNDgzOEZCNTFFNTNBOUQ0NTkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA0ODAxMTc0MDcyMDY4MTE4MDgzRTI5QjZFREE2OEQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0543MwAAAuxJREFUeNrsmVuITVEYx/e4XwrjmBljGrfJMCbJJZ0cpKHcXiiah2ki5FkSkhLywINIEkVIUcotuY94oYmQ6wi5Ny7JMWPcx/H/8p36+lrrrDnnbdn7q1/NmvPb++w96z9rrb12EISj4uAi6OXwysAVMMDhFYA6MCrH6+kJzoGJDq8TOAzmObw8sA0sD6LytsaDJEiBGyDf4g0Br9h7BgZmCOkd9j6CMTmE9Bof/wVMyhDSo+z9BtUZQrqdPWJF1OV+1lTQIjryJogZvJHgvfCeg0EGrxQ8Ed4nMDaLkNaLY7+DGZaQHhfeH7DEEtIdwiM2Rl3ub1WpsN4CfQzeCBXWF2CwwSsBj4RHI/Y4xzXQsuO6OOYbmG4J6UkV0sWWkO5UId0QdbX/NVmF9TZP47oqwTvhveS1q65+oEGFNW757nxedqTdr2CaJaSnhNcKFlpCukuFdN3/3Hl5linFl/oJ9mXh03rwNOjO7btgCvigvOHgEiji9mselR8rr5i9Ydz+DGaCq8LpDS6A0dymkM4B59W5uoBjYpSlkC4C+w19tluNsmvBese9L+B/BG8r5THJHO6XnrSbxTnugUKDVwEahUdhLTd4fcED4VFYE/xZjNfE6c9aeM2sqys4Kzx6eKo1eO3AHvU3WNPG+0563tehCyrVBNAkznNfjJ6yaKR8Izz6eajBK+JzpD0692xeC8uQVhmO7cZbVTKkNQavPdir7n91FvfsdVBpGlnp8WzwA2zN8dgELwN6cPshB+mt8sp5ei/hdiN7DcorZK/S8F003c8Clw0hPSFG2VYeSQ8ZQkoj6Xzxu1VgUxb3uxR0jh5V/N9jTXFYix17rCkOa4VjjzVNc2De2KeQ1qmRtNoykh5Q54w29kNYcRHW+sD+9qqMdwDIewr6W7wCMeU38TLDVB3BEfZ+Bfa3TzTrbREhXRZ1WXiLNuzPBP825DMV7anSq9hShxfjaT7h8DqAg2BuG65xM0/foay/AgwAzVefd5V3qsgAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  </div>
</template>
