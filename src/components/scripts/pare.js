import ModalBootstrap from '../../components/ModalBootstrap.vue'

export default {
    name: 'Pare',
    data() {
        return {
            euros: "0",
            display : false
        }
    },
    components: {
        ModalBootstrap
    },
    filters: {
        conversio: function(value) {
            return value * 1.23;
        }
    }
}