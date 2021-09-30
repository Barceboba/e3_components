export default {
    name: 'ModalBootstrap',
    props: ['euros'],
    filters: {
        euroDolar(value) {
            return value * 1.23;
        }
    }
}