// Utilities
import { defineStore } from 'pinia'

export const useLineCountStore = defineStore({
    id: 'counter',
    state: () => ({
        count: 0,
        title: 'My Counter Title'
    }),
    actions: {
        increaseCounter() {
            this.count++
        },
        decreaseCounter() {
            this.count--
        }
    },
    getters: {
        oddOrEven: (state) => {
            if (state.count % 2 === 0) return 'even'
            return 'odd'
        }
    }
})