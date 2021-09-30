export default {
    name: 'ModalBootstrap',
    props: ['euros'],
    filters: {
        conversio(value) {
            return value * 1.23;
        }
    }
}