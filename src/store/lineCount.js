// Utilities
import { defineStore } from 'pinia'

const useLineCountStore = defineStore({
    id: 'lineCounter',
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

const useLineStyleCountStore = defineStore({
    id: 'styleCounter',
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
    }
})

export { useLineCountStore, useLineStyleCountStore }